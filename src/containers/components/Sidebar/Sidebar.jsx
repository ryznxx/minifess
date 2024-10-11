import React, { useState } from "react";
import "./Sidebar.scss";
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const logout = () => {
    localStorage.removeItem("userData");
    window.location.reload();
  };
  return (
    <aside className="sidebar">
      <span
        onClick={() => setSidebar(true)}
        className="material-symbols-rounded"
      >
        menu
      </span>
      <span className="material-symbols-rounded" onClick={logout}>
        logout
      </span>
      {sidebar ? (
        <div className="sidebar-window">
          <div className="sidebar-container">
            <span
              onClick={() => setSidebar(false)}
              className="material-symbols-rounded"
            >
              close
            </span>
            <ul>
              <li>Setting</li>
              <li>Workflow</li>
              <li>Info</li>
              <li>About</li>
              <li>Developer</li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </aside>
  );
};

export default Sidebar;
