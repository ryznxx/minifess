import React from "react";
import "./Eduvid.scss";
import EduvidDisplay from "../../components/EduvidDisplay/EduvidDisplay";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const dataVideo = [
  {
    judul: "Kebudayaan Wayang Indonesia",
    url: "https://www.youtube.com/embed/cCMbZuumHYs?si=k-LdLipQoXZnWz7Z",
    deskripsi: "Pelajari kesenian budaya untuk pelestarian budaya Indonesia",
    sumber: "HELLO FAHAD!",
  },
  {
    judul: "statistika dan data",
    url: "https://www.youtube.com/embed/Op3pbzXgmlU?si=NP21veKbur3NTfoQ",
    deskripsi:
      "Belajar dan kenali statistika dan data bersama Pak Yayat yuk, belajar cerdas dengan strategis yang cermat",
    sumber: "BTIKP PROVINSI KALIMANTAN SELATAN",
  },
  {
    judul: "Pengelolaan Sumber Daya di Era Transformasi",
    url: "https://www.youtube.com/embed/4645i6vpApk?si=gHUQmtzbFKQ_8Uwf",
    deskripsi:
      "Punya kekayaan alam yang luas tidak imbang jika tidak tahu cara mengolahnya, pelajari sekarang yuk!",
    sumber: "HALO EDUKASI",
  },
  {
    judul: "Daur Ulang Sampah Plastik",
    url: "https://www.youtube.com/embed/YGjRvts84QI?si=FIwCFWhjAd28MpKL",
    deskripsi:
      "Sampah menumpuk dibiarkan begitu saja? Jangan dong, pelajari pengolahan sampah dulu di sini!",
    sumber: "Makin Pinter Channel",
  },
];

const Eduvid = () => {
  const navigate = useNavigate();

  return (
    <section className="eduvid-container">
      <Helmet>
        <title>Eduvid - Educational Video</title>
      </Helmet>

      <h1 onClick={() => navigate("/")}>
        <span className="material-symbols-rounded">arrow_back</span> Eduvid
      </h1>
      {dataVideo.map((data, id) => {
        return (
          <div key={id}>
            <EduvidDisplay
              judul={data.judul}
              video={data.url}
              deskripsi={data.deskripsi}
              sumber={data.sumber}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Eduvid;
