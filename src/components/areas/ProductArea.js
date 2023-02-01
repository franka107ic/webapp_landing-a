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
          slidesToShow:
            props.params.productsToShow <= props.params.products.length
              ? 3
              : props.params.products.length,
          slidesToScroll:
            props.params.productsToShow <= props.params.products.length
              ? 3
              : props.params.products.length,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:
            props.params.productsToShow <= props.params.products.length
              ? 2
              : props.params.products.length,
          slidesToScroll:
            props.params.productsToShow <= props.params.products.length
              ? 2
              : props.params.products.length,
          initialSlide:
            props.params.productsToShow <= props.params.products.length
              ? 2
              : props.params.products.length,
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
      className=" padding-top-110 padding-bottom-90"
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
            <div className="">
              <div className="">
                <div>
                  <Slider {...settings}>
                    {
                      props.params?.products?.map((product, i) => (
                        <div className="" key={i}>
                          <div className="single-product-item">
                            <div className="thumb">
                              <img src={product.img} alt="product" />
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a
                                  onClick={() => {
                                    window.ic.executeFunction(
                                      product.name.action
                                    );
                                  }}
                                  style={{ cursor: "pointer" }}
                                >
                                  {product.name.text}
                                </a>
                              </h4>
                              <p className="h6">{product.description}</p>
                              <div className="price-wrap">
                                <span className="price mr-2">
                                  {product.reducePrice}
                                </span>
                                <del>{product.price}</del>
                              </div>
                              <a
                                onClick={() => {
                                  window.ic.executeFunction(
                                    product.button.action
                                  );
                                }}
                                style={{ cursor: "pointer" }}
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
