import React from "react";
import Slider from "react-slick";

function TestimonialArea(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:
      props.params.cardsToShow < props.params.cards.length
        ? props.params.cardsToShow
        : props.params.cards.length,
    slidesToScroll:
      props.params.cardsToShow < props.params.cards.length
        ? props.params.cardsToShow
        : props.params.cards.length,
    accesibility: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:
            props.params.cardsToShow <= props.params.cards.length
              ? 2
              : props.params.cards.length,
          slidesToScroll:
            props.params.cardsToShow <= props.params.cards.length
              ? 2
              : props.params.cards.length,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:
            props.params.cardsToShow <= props.params.cards.length
              ? 1
              : props.params.cards.length,
          slidesToScroll:
            props.params.cardsToShow <= props.params.cards.length
              ? 1
              : props.params.cards.length,
          initialSlide:
            props.params.cardsToShow <= props.params.cards.length
              ? 1
              : props.params.cards.length,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="list-feature-area padding-top-110 padding-bottom-115 list-feature-bg"
      id="testimonial"
    >
      <div
        style={{
          position: "absolute",
          bottom: "-20px",
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
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center white">
              <h2 className="title">{props.params.title}</h2>
              <p style={{ color: "white" }}>{props.params.text}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="testimonial-carousel">
              <div className="">
                <Slider {...settings}>
                  {props.params.cards &&
                    props.params.cards.map((card, i) => (
                      <div
                        key={i}
                        className="owl-item cloned"
                        style={{
                          width: "450px",
                          marginRight: "30px",
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
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "-20px",
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

export default TestimonialArea;
