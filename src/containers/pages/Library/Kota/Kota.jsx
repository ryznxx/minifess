import React from "react";
import News from "../../../components/News/News";
import "./Kota.scss";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
const Kota = () => {
  const navigate = useNavigate();
  return (
    <section className="kota-container">
      <Navbar />
      <h1 onClick={() => navigate("/library")}>
        <span className="material-symbols-rounded">arrow_back</span> Kota
      </h1>
      <div className="news-wrapper">
        <News
          judul="Pengelolaan SDM"
          deskripsi="Strategis terhadap manajemen sumber daya"
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <News
          judul="Penanaman Pohon Kembali"
          deskripsi="Gerakan Indonesia dalam penghijauan dunia "
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <News
          judul="Robotika"
          deskripsi="Perancangan robot pemilah sampah "
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <News
          judul="Albert Menolak Perundungan"
          deskripsi="Peranan Albert dalam mental health"
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <News
          judul="Pembangunan Infrastruktur"
          deskripsi="Proses pembangunan IKN "
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <News
          judul="Kebudayaan dan Kewarganegaraan"
          deskripsi="Mengetahui segala aspek HAM "
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <News
          judul="Kesehatan"
          deskripsi="Pencegahan diabetes melitus pada remaja "
          url="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </section>
  );
};

export default Kota;
