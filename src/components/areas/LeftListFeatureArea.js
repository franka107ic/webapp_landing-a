import React from "react";

function LeftListFeatureArea(props) {
  return (
    <section className="list-feature-area padding-top-110 padding-bottom-115 list-feature-bg">
      <div
        style={{
          position: "absolute",
          bottom: "-10px",
          width: "100%",
          transform: "rotate(180deg)",
        }}
      >
        <svg viewBox="0 0 1920 110">
          <path
            fill="#fff"
            d="M 0 27 C 740.5 27 740.5 94 1481 94 L 1481 94 L 1481 0 L 0 0 Z"
          ></path>{" "}
          <path
            fill="#fff"
            d="M 1480 94 C 1700 94 1700 82 1920 82 L 1920 82 L 1920 0 L 1480 0 Z"
          ></path>{" "}
        </svg>
      </div>
      <div className="container">
        <div className="row reorder-xs">
          <div className="col-lg-6">
            <div className="right-content-area white">
              <h3 className="title">{props.params.title}</h3>
              <div className="list-feature-wrap white">
                <ul>
                  {props.params.features &&
                    props.params.features.map((feature, i) => (
                      <li key={i}>
                        <div className="single-list-feature-item">
                          <div className="icon">
                            <i className={feature.icon} />
                          </div>
                          <div className="content">
                            <h4 className="title">{feature.title}</h4>
                            <p>{feature.text}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="left-content-area">
              <div className="img-wrap">
                <img src={props.params.image} alt="list feature" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "-10px",
          width: "100%",
          transform: "",
        }}
      >
        <svg viewBox="0 0 1920 110">
          <path
            fill="#fff"
            d="M 0 27 C 740.5 27 740.5 94 1481 94 L 1481 94 L 1481 0 L 0 0 Z"
          ></path>{" "}
          <path
            fill="#fff"
            d="M 1480 94 C 1700 94 1700 82 1920 82 L 1920 82 L 1920 0 L 1480 0 Z"
          ></path>{" "}
        </svg>
      </div>
    </section>
  );
}

export default LeftListFeatureArea;
