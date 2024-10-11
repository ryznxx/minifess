import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import comic1 from "../../../../assets/dudungpmalas.jpg";
import comic2 from "../../../../assets/legendatp.jpg";
import "./ComicView.scss";
import { Helmet } from "react-helmet-async";

const ComicView = () => {
  const { id } = useParams();
  const location = useLocation();
  const [gambar, setGambar] = useState(null);
  const [judul, setJudul] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const judulQuery = searchParams.get("judul");
    setJudul(judulQuery || "");

    // Map IDs to corresponding images
    const imageMap = {
      1: comic1,
      2: comic2,
      // Add more IDs and images as needed
    };

    if (imageMap[id]) {
      setGambar(imageMap[id]);
    }
  }, [id, location.search]);

  return (
    <section className="comicview-container">
      <Helmet>
        <title>Comic - {judul.toLowerCase()}</title>
      </Helmet>
      <h1 onClick={() => navigate("/comic")}>
        <span className="material-symbols-rounded">arrow_back</span>{" "}
        {judul && judul}
      </h1>
      {gambar ? (
        <div className="comicv-container">
          <img src={gambar} alt="Comic" />
          <button
            onClick={() => navigate(`/comic/quiz/${id}?judul=${judul}`)}
            className="coba"
          >
            Coba Quiz
          </button>
        </div>
      ) : (
        <div className="oks">
          <p>
            Comic Rusak, <a href="#">Laporkan Admin</a>
          </p>
        </div>
      )}
    </section>
  );
};

export default ComicView;
