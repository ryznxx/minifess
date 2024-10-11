import React from "react";
import News from "../../../components/News/News";
import "./Sosial.scss";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
const Sosial = () => {
  const navigate = useNavigate();
  return (
    <section className="sosial-container">
      <Navbar />
      <h1 onClick={() => navigate("/library")}>
        <span className="material-symbols-rounded">arrow_back</span> Sosial
      </h1>
      <div className="news-wrapper">
        <News
          judul="Statistika"
          deskripsi="Tabel distribusi frekuensi data kelompok "
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <News
          judul="Penerapan Hukum Charles "
          deskripsi="Kecepatan pertama sebanding dengan kecepatan kedua "
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <News
          judul="Hak Asasi Manusia"
          deskripsi="Sanksi sosial bagi pencuri "
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <News
          judul="Kewirausahaan "
          deskripsi="Menentukan BEP unit "
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <News
          judul="Penurunan Titik Beku Larutan "
          deskripsi="Perubahan pelarut akibat penambahan zat terlarut "
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <News
          judul="Cause and Effect "
          deskripsi="Pernyataan sebab-akibat "
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <News
          judul="Cerita Pendek "
          deskripsi="Vitaribosa Sang pendekar hebat "
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </section>
  );
};

export default Sosial;
