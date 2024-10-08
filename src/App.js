// import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./containers/pages/Home/Home";
import Login from "./containers/pages/Login/Login";
import { useEffect, useState } from "react";
import Library from "./containers/pages/Library/Library";
import Threet from "./containers/pages/Library/ThreeT/Threet";
import Kota from "./containers/pages/Library/Kota/Kota";
import Sosial from "./containers/pages/Library/Sosial/Sosial";
function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
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
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

const ProtectedRoute = ({ children }) => {
  const userData = localStorage.getItem("userData");
  return userData ? children : <Navigate to="/login" />;
};
