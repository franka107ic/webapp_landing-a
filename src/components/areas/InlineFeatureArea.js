import React from "react";

function InlineFeatureArea(props) {
  return (
    <div
      className="inline-feature-area padding-top-60 padding-bottom-60"
      id="about"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inline-feaure-wrap">
              <ul>
                {props.params.cards &&
                  props.params.cards.map((card, i) => (
                    <li key={i} className="d-flex justify-content-center">
                      <div className="single-inline-feature-item d-flex flex-column ">
                        <div className="">
                          {card.img && (
                            <div style={{ height: "200px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                              <img
                                className="flaticon-chat"
                                src={card.img}
                                alt="icon"
                              />
                            </div>

                          )}
                        </div>
                        <div className="content">
                          <a
                            href="#"
                            onClick={() =>
                              window.ic.executeFunction(card.title.action)
                            }
                          >
                            <h4 className="title">{card.title.text}</h4>
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
