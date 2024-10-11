import React from "react";
import News from "../../../components/News/News";
import "./Threet.scss";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";

const Threet = () => {
  const navigate = useNavigate();
  return (
    <section className="threet-container">
      <Navbar />
      <h1 onClick={() => navigate("/library")}>
        <span className="material-symbols-rounded">arrow_back</span> 3T
      </h1>
      <div className="news-wrapper">
        <News
          judul="Revitalisasi Digital"
          deskripsi="Hidupkan kembali digitalisasi"
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <News
          judul="Pengembangan Bisnis dan Manajemen"
          deskripsi="Mulai pengembangan bisnis dan manajemen mulai dari sini"
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <News
          judul="Budaya dan Kewarganegaraan"
          deskripsi="Bersama kebudayaan lestarikan negeri"
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <News
          judul="Pengelolaan Sumber Daya Alam"
          deskripsi="Melalui kekayaan alam, bangun daerah beralas emas "
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <News
          judul="Upin Ipin Penyelamat Bumi"
          deskripsi="Bersama Upin dan Ipin selamatkan bumi!"
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <News
          judul="Petualangan Loopy di Hutan"
          deskripsi="Loopy, berang-berang manis yang suka bertualang di hutan "
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <News
          judul="Dodot sang Pahlawan Super"
          deskripsi="Bersama Dodot lindungi semua makhluk hutan"
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </section>
  );
};

export default Threet;
