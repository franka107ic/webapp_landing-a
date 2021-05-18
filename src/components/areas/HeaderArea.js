import React from "react";

function HeaderArea(props) {
  return (
    <div className="header-area" id="home">
      <div className="span-1">
        <img src="assets/img/trinagle.png" alt="tringle" />
      </div>
      <div className="span-2">
        <img src="assets/img/circle-shape.png" alt="tringle" />
      </div>
      <div className="span-3">
        <img src="assets/img/square-shape.png" alt="tringle" />
      </div>
      <div className="span-4">
        <img src="assets/img/ball.png" alt="tringle" />
      </div>
      <div className="header-area-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="header-inner">
                <h1
                  className="title wow FadeInDown animated"
                  style={{ visibility: "visible" }}
                >
                  {props.params.title}
                </h1>
                <div className="btn-wrapper">
                  <a href="/" className="boxed-btn btn-rounded reverse-color">
                    <i className={`${props.params.button.icon}`} />{" "}
                    {props.params.button.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-right-image">
        <div
          className="right-image-with-price header-right-image-animation"
          style={{ transform: "matrix(1, 0, 0, 1, 26.875, -12.3)" }}
        >
          <div className="price-wrap">
            <span className="price">
              <strong>{props.params.wrap.title}</strong>{" "}
              {props.params.wrap.subtitle}
            </span>
          </div>
          <img
            src={props.params.image.src}
            width={props.params.image.width || "400px"}
            height={props.params.image.height || "auto"}
            alt="header right"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderArea;
