import React from "react";

function TestimonialArea(props) {
  return (
    <section
      className="testimonial-area testimonial-bg padding-top-110 padding-bottom-120"
      id="testimonial"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center white">
              <h2 className="title">{props.params.title}</h2>
              <p>{props.params.text}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="testimonial-carousel owl-carousel owl-theme owl-loaded">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-1920px, 0px, 0px)",
                    transition: "all 0.25s ease 0s",
                    width: "3840px"
                  }}
                >
                  {props.params.cards &&
                    props.params.cards.map((card, i) => (
                      <div
                        key={i}
                        className="owl-item cloned"
                        style={{
                          width: "450px",
                          marginRight: "30px"
                        }}
                      >
                        <div className="single-testimonial-item">
                          <div className="description">{card.text}</div>
                          <div className="author-meta">
                            <div className="thumb">
                              <img src={card.imgAuthor} alt="testimonial" />
                              <div className="icon">
                                <i className="fas fa-quote-left" />
                              </div>
                            </div>
                            <div className="content">
                              <h4 className="name">{card.author}</h4>
                              <span className="post">{card.profession}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="owl-controls">
                <div className="owl-nav">
                  <div className="owl-prev" style={{ display: "block" }}>
                    <i className="fas fa-angle-left" />
                  </div>
                  <div className="owl-next" style={{ display: "block" }}>
                    <i className="fas fa-angle-right" />
                  </div>
                </div>
                <div className="owl-dots" style={{ display: "none" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialArea;
