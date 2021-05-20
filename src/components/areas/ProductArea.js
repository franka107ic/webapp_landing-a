import React from "react";
import Slider from "react-slick";

function ProductArea(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:
      props.params.productsToShow < props.params.products.length
        ? props.params.productsToShow
        : props.params.products.length,
    slidesToScroll:
      props.params.productsToShow < props.params.products.length
        ? props.params.productsToShow
        : props.params.products.length,
    accesibility: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      className="product-area padding-top-110 padding-bottom-90"
      id="product"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h2 className="title">{props.params.title}</h2>
              <p>{props.params.text}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="product-carousel">
              <div className="">
                <div>
                  <Slider {...settings}>
                    {props.params.products &&
                      props.params.products.map((product, i) => (
                        <div className="" key={i}>
                          <div className="single-product-item">
                            <div className="thumb">
                              <img src={product.img} alt="product" />
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="/">{product.name}</a>
                              </h4>
                              <p className="h6">{product.description}</p>
                              <div className="price-wrap">
                                <span className="price mr-2">
                                  {product.reducePrice}
                                </span>
                                <del>{product.price}</del>
                              </div>
                              <a
                                href="#"
                                onClick={() =>
                                  window.ic.executeFunction(
                                    product.button.action
                                  )
                                }
                                className="boxed-bt"
                              >
                                {product.button.label}
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                  </Slider>
                </div>
              </div>
              {/*
              <div className="owl-controls">
                <div className="owl-nav">
                  <div className="owl-prev" style={{ display: "block" }}>
                    <i className="fas fa-angle-left" />
                  </div>
                  <div className="owl-next" style={{ display: "block" }}>
                    <i className="fas fa-angle-right" />
                  </div>
                </div>
                <div className="owl-dots" />
              </div>
                */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductArea;
