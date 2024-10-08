import React, { useState, useEffect } from "react";
import "./Progressbar.scss";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const randomProgress = Math.floor(Math.random() * 101); // Generates a random number between 0 and 100
    setProgress(randomProgress);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="progressbar">
      <span className="material-symbols-rounded">dictionary</span>
      <div
        className="progressbox"
        style={{
          // width: "100%",
          backgroundColor: "#e0e0df",
        }}
      >
        <div
          className="progress"
          style={{
            width: `${progress}%`,
            height: "24px",
            borderRadius: "4px",
            transition: "width 0.5s",
          }}
        />
      </div>
      <p>{progress}%</p>
    </div>
  );
};

export default ProgressBar;
