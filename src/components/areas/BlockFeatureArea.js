import React from "react";

function BlockFeatureArea(props) {
  return (
    <div className="block-feature-area padding-top-120 mb-5" id="feature">
      <div className="container">
        <div className="row">
          {props.params.features &&
            props.params.features.map((feature, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="single-block-feature">
                  <div className="icon">
                    <i className={feature.icon} />
                  </div>
                  <div className="content">
                    <h4 className="title">{feature.title}</h4>
                    <p>{feature.text}</p>
                  </div>
                </div>
              </div>
            ))}
          {/* 
                    <div className="col-lg-12 ">
                        <div
                            className="bottom-image text-center margin-top-30 fadeInUp wow"
                            style={{ animationName: 'fadeInUp', visibility: 'visible' }}
                        >
                            <img
                                src={props.params.img}
                                alt="block feature"
                            />
                        </div>
                    </div>
                    */}
        </div>
      </div>
    </div>
  );
}

export default BlockFeatureArea;
