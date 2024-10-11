import React from "react";
import "./Eduvid.scss";

const dataVideo = [
  {
    judul: "statistika",
    url: "https://www.youtube.com/embed/Op3pbzXgmlU?si=LpxN7bWOVFmIrVx5",
  },
  {
    judul: "statistika",
    url: "https://www.youtube.com/embed/Op3pbzXgmlU?si=LpxN7bWOVFmIrVx5",
  },
  {
    judul: "statistika",
    url: "https://www.youtube.com/embed/Op3pbzXgmlU?si=LpxN7bWOVFmIrVx5",
  },
  {
    judul: "statistika",
    url: "https://www.youtube.com/embed/Op3pbzXgmlU?si=LpxN7bWOVFmIrVx5",
  },
];

const Eduvid = () => {
  return (
    <section className="eduvid-container">
      {dataVideo.map((data) => {
        return (
          <div className="eduvid-video">
            <div className="eduvid-video-frame">
              <iframe src={data.url} title={data.judul} frameborder="0" />
            </div>
            <div className="eduvid-video-text">
              <h3>{data.judul}</h3>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Eduvid;
