// import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./containers/pages/Home/Home";
import Login from "./containers/pages/Login/Login";
import { useEffect, useState } from "react";
import Library from "./containers/pages/Library/Library";
import Threet from "./containers/pages/Library/ThreeT/Threet";
import Kota from "./containers/pages/Library/Kota/Kota";
import Sosial from "./containers/pages/Library/Sosial/Sosial";
import Comic from "./containers/pages/Comic/Comic";
import Navbar from "./containers/components/Navbar/Navbar";
import ComicView from "./containers/pages/Comic/ComicView/ComicView";
import Upload from "./containers/pages/New/Upload";
import Eduvid from "./containers/pages/Eduvid/Eduvid";
import ComicQuiz from "./containers/pages/Comic/ComicView/ComicQuiz/ComicQuiz";
import Repo from "./containers/pages/Repo/Repo";

function App() {
  const location = useLocation();
  const showNavbar = !(
    location.pathname === "/login" || location.pathname.includes("/comic/quiz/")
  );
  useEffect(() => {
    localStorage.getItem("userData");
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Anggap 768px ke bawah sebagai mobile
    };

    checkIfMobile(); // Cek pertama kali saat komponen dirender
    window.addEventListener("resize", checkIfMobile); // Cek setiap kali ukuran layar berubah

    return () => {
      window.removeEventListener("resize", checkIfMobile); // Bersihkan listener saat komponen unmount
    };
  }, []);

  if (!isMobile) {
  }
  return (
    <>
      {isMobile ? (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/library"
              element={
                <ProtectedRoute>
                  <Library />
                </ProtectedRoute>
              }
            />
            <Route
              path="/library/3t"
              element={
                <ProtectedRoute>
                  <Threet />
                </ProtectedRoute>
              }
            />
            <Route
              path="/library/kota"
              element={
                <ProtectedRoute>
                  <Kota />
                </ProtectedRoute>
              }
            />
            <Route
              path="/library/sosial"
              element={
                <ProtectedRoute>
                  <Sosial />
                </ProtectedRoute>
              }
            />
            <Route
              path="/comic"
              element={
                <ProtectedRoute>
                  <Comic />
                </ProtectedRoute>
              }
            />

            <Route
              path="/comic/:id"
              element={
                <ProtectedRoute>
                  <ComicView />
                </ProtectedRoute>
              }
            />

            <Route
              path="/upload"
              element={
                <ProtectedRoute>
                  <Upload />
                </ProtectedRoute>
              }
            />
            <Route
              path="/eduvid"
              element={
                <ProtectedRoute>
                  <Eduvid />
                </ProtectedRoute>
              }
            />
            <Route
              path="/comic/quiz/:id"
              element={
                <ProtectedRoute>
                  <ComicQuiz />
                </ProtectedRoute>
              }
            />
            <Route
              path="/repository"
              element={
                <ProtectedRoute>
                  <Repo />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
          </Routes>
          {showNavbar && <Navbar />}
        </>
      ) : (
        <p>Aplikasi ini hanya dapat diakses melalui perangkat mobile.</p>
      )}
    </>
  );
}

export default App;

const ProtectedRoute = ({ children }) => {
  const userData = localStorage.getItem("userData");
  return userData ? children : <Navigate to="/login" />;
};
