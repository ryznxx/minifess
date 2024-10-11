import React from "react";
import "./Repo.scss";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Repo = () => {
  const navigate = useNavigate();
  return (
    <div className="repos-container">
      <Helmet>
        <title>Repository - Download</title>
      </Helmet>
      <h1 onClick={() => navigate("/")}>
        <span className="material-symbols-rounded">arrow_back</span> Repository
      </h1>
      <div className="repos">
        <h3>Belum Ada Document, File, Atau yang lainnya yang telah diunduh</h3>
      </div>
    </div>
  );
};

export default Repo;
