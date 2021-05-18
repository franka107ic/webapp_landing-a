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
              <a href={props.params.href} className="video-play-btn mfp-iframe">
                <i className="fas fa-play" />
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
