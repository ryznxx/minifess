import React from "react";
import "./Upload.scss";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const navigate = useNavigate();
  return (
    <section className="upload-container">
      <h1 onClick={() => navigate("/")}>
        <span className="material-symbols-rounded">arrow_back</span> Upload
      </h1>
      <div className="upload-button">
        <div className="ub-left">
          <span className="material-symbols-rounded">book</span>
          <p>Upload Library</p>
        </div>
        <div className="ub-right">
          <span className="material-symbols-rounded">upload</span>
        </div>
      </div>
      <div className="upload-button">
        <div className="ub-left">
          <span className="material-symbols-rounded">manga</span>
          <p>Upload Comic</p>
        </div>
        <div className="ub-right">
          <span className="material-symbols-rounded">upload</span>
        </div>
      </div>
      <div className="upload-button">
        <div className="ub-left">
          <span className="material-symbols-rounded">info</span>
          <p>Post News</p>
        </div>
        <div className="ub-right">
          <span className="material-symbols-rounded">add</span>
        </div>
      </div>
      <div className="upload-button">
        <div className="ub-left">
          <span className="material-symbols-rounded">head_mounted_device</span>
          <p>Upload Educational Video</p>
        </div>
        <div className="ub-right">
          <span className="material-symbols-rounded">upload</span>
        </div>
      </div>
    </section>
  );
};

export default Upload;
