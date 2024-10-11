import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import comic1 from "../../../../assets/dudungpmalas.jpg";
import comic2 from "../../../../assets/legendatp.jpg";
import "./ComicView.scss";

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
      <h1 onClick={() => navigate("/comic")}>
        <span className="material-symbols-rounded">arrow_back</span>{" "}
        {judul && judul}
      </h1>
      {gambar ? (
        <img src={gambar} alt="Comic" />
      ) : (
        <p>No image found for this ID</p>
      )}
    </section>
  );
};

export default ComicView;
