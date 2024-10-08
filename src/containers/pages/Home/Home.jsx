import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import bg from "../../../assets/gg.png";
import ProgressBar from "../../components/Progressbar/Progressbar";

const Home = () => {
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      const storedUser = localStorage.getItem("userData");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setUsername(user.username);
        setStatus(user.status);
      }
    };
    getUserData();
  }, []);

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) {
      return { message: "Selamat Pagi", icon: "wb_sunny" };
    } else if (hours >= 12 && hours < 15) {
      return { message: "Selamat Siang", icon: "wb_sunny" };
    } else if (hours >= 15 && hours < 18) {
      return { message: "Selamat Sore", icon: "wb_twilight" };
    } else {
      return { message: "Selamat Malam", icon: "nights_stay" };
    }
  };

  const { message, icon } = getGreeting();

  return (
    <section className="home-container">
      <Sidebar />
      <Navbar />
      <div className="home-content">
        <div className="greeting">
          <h1>Halo,</h1>
          <h1>
            {message} <span className="material-symbols-rounded">{icon}</span>
          </h1>
        </div>
        <div className="home-box-profile">
          <div className="home-box-photo">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              alt="contoh"
            />
          </div>
          <div className="home-box-info">
            <h1>{username}</h1>
            <p>{status}</p>
          </div>
          <img className="addt" src={bg} alt="error" />
        </div>
      </div>
      <div className="home-progress">
        <p className="semi">progress literasi</p>
        <ProgressBar />
      </div>
      <div className="infobr">
        <h3 className="info-berita">Info Dan Berita</h3>
        <div className="widg">
          <span className="material-symbols-rounded">widgets</span>
        </div>
      </div>
      <div className="home-news-wrapper">
        <News />
        <News />
        <News />
        <News />
      </div>
    </section>
  );
};

export default Home;

const News = () => {
  return (
    <div className="home-news">
      <div className="home-news-left">
        <img
          src="https://images.unsplash.com/photo-1518826778770-a729fb53327c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="a"
        />
      </div>
      <div className="home-news-right">
        <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <a className="waktu" href="#">
          12 september 2024
        </a>
        <div className="home-news-pk">
          <img
            className="pfp"
            src="https://images.unsplash.com/photo-1533110398145-9f8cef8e5ad4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="person"
          />
          <span className="material-symbols-rounded">arrow_outward</span>
        </div>
      </div>
    </div>
  );
};
