import React from "react";

function FaqArea(props) {
  return (
    <section className="faq-area padding-top-110 padding-bottom-120" id="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h2 className="title">{props.params.title}</h2>
              <p>{props.params.text}</p>
            </div>
          </div>
        </div>
        <div className="row reorder-xs">
          <div className="col-lg-7">
            <div className="accordion-wrapper">
              <div id="accordion">
                {props.params.questions &&
                  props.params.questions.map((question, i) => (
                    <div className="card" key={i}>
                      <div className="card-header" id={`heading${i}`}>
                        <h5 className="mb-0">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            data-target={`#collapse${i}`}
                            aria-expanded="false"
                            aria-controls={`collapse${i}`}
                            href="/"
                          >
                            {question.title}
                          </a>
                        </h5>
                      </div>

                      <div
                        id={`collapse${i}`}
                        className="collapse"
                        aria-labelledby={`heading${i}`}
                        data-parent="#accordion"
                      >
                        <div className="card-body">{question.desc}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="right-content-area">
              <div className="img-wrapper">
                <img src={props.params.img} alt="faq" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqArea;
