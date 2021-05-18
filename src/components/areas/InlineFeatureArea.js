import React from "react";

function InlineFeatureArea(props) {
  return (
    <div className="inline-feature-area padding-top-120" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inline-feaure-wrap">
              <ul>
                {props.params.cards &&
                  props.params.cards.map((card, i) => (
                    <li key={i}>
                      <div className="single-inline-feature-item">
                        <div className="icon">
                          <img
                            className="flaticon-chat"
                            src={card.img}
                            alt="icon"
                          />
                        </div>
                        <div className="content">
                          <a href="/">
                            <h4 className="title">{card.title}</h4>
                          </a>
                          <p>{card.text}</p>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InlineFeatureArea;
