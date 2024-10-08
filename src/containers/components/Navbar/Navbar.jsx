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
      <div className="nav-icon">
        <span className="material-symbols-rounded">manga</span>
        <p>Comic</p>
      </div>
      <div className="nav-icon tw">
        <span className="material-symbols-rounded">add</span>
        <p>New Story</p>
      </div>
      <div className="nav-icon">
        <span className="material-symbols-rounded">head_mounted_device</span>
        <p>Eduvid</p>
      </div>
      <div className="nav-icon">
        <span className="material-symbols-rounded">archive</span>
        <p>Repository</p>
      </div>
    </nav>
  );
};

export default Navbar;
