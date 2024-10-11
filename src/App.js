// import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./containers/pages/Home/Home";
import Login from "./containers/pages/Login/Login";
import { useEffect } from "react";
import Library from "./containers/pages/Library/Library";
import Threet from "./containers/pages/Library/ThreeT/Threet";
import Kota from "./containers/pages/Library/Kota/Kota";
import Sosial from "./containers/pages/Library/Sosial/Sosial";
import Comic from "./containers/pages/Comic/Comic";
import Navbar from "./containers/components/Navbar/Navbar";
import ComicView from "./containers/pages/Comic/ComicView/ComicView";
import Upload from "./containers/pages/New/Upload";
import Eduvid from "./containers/pages/Eduvid/Eduvid";
function App() {
  useEffect(() => {
    localStorage.getItem("userData");
  }, []);
  return (
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
        <Route path="/login" element={<Login />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;

const ProtectedRoute = ({ children }) => {
  const userData = localStorage.getItem("userData");
  return userData ? children : <Navigate to="/login" />;
};
