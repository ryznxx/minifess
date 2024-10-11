import React from "react";
import "./Comic.scss";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import ComicDisplay from "../../components/ComicDisplay/ComicDisplay";
import comic1 from "../../../assets/dudungpmalas.jpg";
import comic2 from "../../../assets/legendatp.jpg";

const comics = [
  {
    judul: "Dudung si Pemalas",
    sinopsis: "Dudung, remaja pemalas yang gemar bermain game",
    rilis: "2024",
    gambar: comic1,
    id: 1,
  },
  {
    judul: "Legenda Tangkuban Perahu",
    sinopsis:
      "Dayang Sumbi, putri kerajaan di Jawa Barat harus menikah dengan seekor anjing.",
    rilis: "2024",
    gambar: comic2,
    id: 2,
  },
  {
    judul: "Datuk Berkepala Merah",
    sinopsis:
      "Datuk isnin, manusia licik yang berkepala merah karena sering menipu sesama.",
    rilis: "2024",
  },
  {
    judul: "Pejabat Keren",
    sinopsis:
      "Cipta, pemilik PT Cipta Jaya menaruh harapan besar kepada karyawannya.",
    rilis: "2024",
  },
];

const Comic = () => {
  const navigate = useNavigate();
  return (
    <section className="comic-container">
      {/* <Navbar /> */}
      <h1 onClick={() => navigate("/")}>
        <span className="material-symbols-rounded">arrow_back</span> Comic
      </h1>
      <div className="news-wrapper">
        {comics.map((comic, index) => (
          <ComicDisplay
            key={index}
            judul={comic.judul}
            sinopsis={comic.sinopsis}
            rilis={comic.rilis}
            id={comic.id}
            gambar={comic.gambar}
          />
        ))}
      </div>
    </section>
  );
};

export default Comic;
