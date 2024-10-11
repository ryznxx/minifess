import React from "react";
import "./EduvidDisplay.scss";

const EduvidDisplay = ({ judul, video, sumber, deskripsi }) => {
  return (
    <div className="eduvid-video">
      <div className="eduvid-video-frame">
        <iframe src={video} title={judul} frameBorder="0" />
      </div>
      <div className="eduvid-video-text">
        <h3>
          {judul
            ? judul.length > 6
              ? judul.slice(0, 32) + "..."
              : judul
            : "Tidak memiliki judul"}
        </h3>
        <p>
          {deskripsi
            ? deskripsi.length > 6
              ? deskripsi.slice(0, 32) + "..."
              : deskripsi
            : "Tidak memiliki deskripsi"}
        </p>
        <a href={video}>{sumber}</a>
        {/* <button>Tonton</button> */}
      </div>
    </div>
  );
};

export default EduvidDisplay;
