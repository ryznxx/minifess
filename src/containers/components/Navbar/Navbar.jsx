import React from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div onClick={() => navigate("/library")} className="nav-icon">
        <span className="material-symbols-rounded">book</span>
        <p>Library</p>
      </div>
      <div onClick={() => navigate("/comic")} className="nav-icon">
        <span className="material-symbols-rounded">manga</span>
        <p>Comic</p>
      </div>
      <div onClick={() => navigate("/upload")} className="nav-icon tw">
        <span className="material-symbols-rounded">add</span>
        <p>Upload</p>
      </div>
      <div onClick={() => navigate("/eduvid ")} className="nav-icon">
        <span className="material-symbols-rounded">head_mounted_device</span>
        <p>Eduvid</p>
      </div>
      <div onClick={() => navigate("/repository")} className="nav-icon">
        <span className="material-symbols-rounded">archive</span>
        <p>Repository</p>
      </div>
    </nav>
  );
};

export default Navbar;
