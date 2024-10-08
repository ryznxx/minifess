import React from "react";
import "./Sidebar.scss";
const Sidebar = () => {
  const logout = () => {
    localStorage.removeItem("userData");
    window.location.reload();
  };
  return (
    <aside className="sidebar">
      <span className="material-symbols-rounded">menu</span>
      <span className="material-symbols-rounded" onClick={logout}>
        logout
      </span>
    </aside>
  );
};

export default Sidebar;
