import React from "react";

function LeftListFeatureArea(props) {
  return (
    <section className="list-feature-area padding-top-110 padding-bottom-115 list-feature-bg">
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
    </section>
  );
}

export default LeftListFeatureArea;
