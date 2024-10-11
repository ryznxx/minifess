import React, { useState } from "react";
import "./ComicDisplay.scss";
import { useNavigate } from "react-router-dom";

const ComicDisplay = ({ judul, sinopsis, rilis, gambar, id }) => {
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className="comic-display">
        <div className="cd-left">
          <img
            src={
              gambar
                ? gambar
                : "https://static.vecteezy.com/system/resources/previews/012/942/784/original/broken-image-icon-isolated-on-a-white-background-no-image-symbol-for-web-and-mobile-apps-free-vector.jpg"
            }
            alt="errpr"
          />
        </div>
        <div className="cd-right">
          <h3>
            {judul
              ? judul.length > 6
                ? judul.slice(0, 30) + "..."
                : judul
              : "Tidak berjudul"}
          </h3>
          <p>
            {sinopsis
              ? sinopsis.length > 6
                ? sinopsis.slice(0, 32) + "..."
                : sinopsis
              : "Tidak memiliki sinopsis"}
          </p>
          <a href="#">{rilis}</a>
          <button onClick={() => setModal(true)}>baca</button>
        </div>
      </div>
      {modal ? (
        <div className="modal-preview">
          <div className="modal-box">
            <span
              className="vls material-symbols-rounded"
              onClick={() => setModal(false)}
            >
              close
            </span>
            <img
              src={
                gambar
                  ? gambar
                  : "https://static.vecteezy.com/system/resources/previews/012/942/784/original/broken-image-icon-isolated-on-a-white-background-no-image-symbol-for-web-and-mobile-apps-free-vector.jpg"
              }
              alt="source"
            />
            <h4>{judul}</h4>
            <p>
              {sinopsis
                ? sinopsis.length > 6
                  ? sinopsis.slice(0, 32) + "..."
                  : sinopsis
                : "Tidak memiliki sinopsis"}
            </p>
            <button onClick={() => navigate(`/comic/${id}?judul=${judul}`)}>
              Baca
            </button>
            <button>Baca Offline</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ComicDisplay;
