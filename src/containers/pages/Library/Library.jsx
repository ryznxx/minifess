import React from "react";
import "./Library.scss";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Helmet } from "react-helmet-async";
const Library = () => {
  const navigate = useNavigate();
  return (
    <section className="library-container">
      {/* <Navbar /> */}
      <Helmet>
        <title>Library</title>
      </Helmet>
      <h1 onClick={() => navigate("/")}>
        <span className="material-symbols-rounded">arrow_back</span> Library
      </h1>
      <div onClick={() => navigate("/library/3t")} className="library-option">
        <span className="material-symbols-rounded">cell_tower</span>
        <h3>3T</h3>
      </div>
      <div onClick={() => navigate("/library/kota")} className="library-option">
        <span className="material-symbols-rounded">domain</span>
        <h3>Kota</h3>
      </div>
      <div
        onClick={() => navigate("/library/sosial")}
        className="library-option"
      >
        <span className="material-symbols-rounded">
          connect_without_contact
        </span>
        <h3>Sosial</h3>
      </div>
    </section>
  );
};

export default Library;
