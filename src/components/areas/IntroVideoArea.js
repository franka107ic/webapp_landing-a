import React from "react";

function IntroVideoArea(props) {
  return (
    <div
      className="intro-video-area intro-video-bg"
      style={{ backgroundImage: props.params.backgroundImage }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="intro-video-wrap">
              <a
                href="#"
                onClick={() =>
                  window.ic.executeFunction(props.params.button.action)
                }
                className="video-play-btn mfp-iframe"
              >
                <i className={props.params.button.icon} />
              </a>
              <h2 className="title">{props.params.title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroVideoArea;
