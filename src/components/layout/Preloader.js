import React from "react";

function Preloader() {
  return (
    <div className="preloader" id="preloader" style={{ display: "none" }}>
      <div className="preloader-inner">
        <div className="cancel-preloader">
          <a href="/">Cancel Preloader</a>
        </div>
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube" />
          <div className="sk-cube2 sk-cube" />
          <div className="sk-cube4 sk-cube" />
          <div className="sk-cube3 sk-cube" />
        </div>
      </div>
    </div>
  );
}

export default Preloader;
