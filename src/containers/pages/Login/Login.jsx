import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = { username, password, status };
    if (userData && userData.status !== "") {
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/");
    }
  };

  useEffect(() => {
    const checkLogin = () => {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        navigate("/");
      }
    };
    checkLogin();
  }, [navigate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleStatusSelect = (status) => {
    setStatus(status);
    setDropdownOpen(false);
  };

  return (
    <section className="login-container">
      <div className="login-box">
        <form onSubmit={handleLogin}>
          <div className="input-box">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-box list" ref={dropdownRef}>
            <label htmlFor="status">Status</label>
            <div
              className="custom-dropdown"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {status || "Pilih Status"}
              <span className="material-symbols-rounded">
                {dropdownOpen ? "arrow_drop_up" : "arrow_drop_down"}
              </span>
            </div>
            {dropdownOpen && (
              <div className="custom-dropdown-options">
                <div
                  className="cdo-button"
                  onClick={() => handleStatusSelect("Guru")}
                >
                  Guru
                </div>
                <div
                  className="cdo-button"
                  onClick={() => handleStatusSelect("Pelajar")}
                >
                  Pelajar
                </div>
              </div>
            )}
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
