import React from "react";
import "./Repo.scss";
import { useNavigate } from "react-router-dom";
const Repo = () => {
  const navigate = useNavigate();
  return (
    <div className="repo-container">
      <h1 onClick={() => navigate("/")}>
        <span className="material-symbols-rounded">arrow_back</span> Repository
      </h1>
      <div className="repos">
        <h1>Belum Ada Document, File, Atau yang lainnya yang telah diunduh</h1>
      </div>
    </div>
  );
};

export default Repo;
