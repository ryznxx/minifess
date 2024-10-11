import React from "react";
import "./EduvidDisplay.scss";

const EduvidDisplay = ({ judul, video, sumber, deskripsi }) => {
  return (
    <div className="eduvid-video">
      <div className="eduvid-video-frame">
        <iframe src={video} title={judul} frameborder="0" />
      </div>
      <div className="eduvid-video-text">
        <h3>{judul}</h3>
        <p>{deskripsi}</p>
        <a href="#">{sumber}</a>
      </div>
    </div>
  );
};

export default EduvidDisplay;
