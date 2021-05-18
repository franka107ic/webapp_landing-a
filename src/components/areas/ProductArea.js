import React from "react";

function ProductArea(props) {
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
            <div className="product-carousel owl-carousel owl-theme owl-loaded">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-1600px, 0px, 0px)",
                    transition: "all 0.25s ease 0s",
                    width: "3520px"
                  }}
                >
                  {props.params.products &&
                    props.params.products.map((product, i) => (
                      <div
                        className="owl-item active"
                        style={{
                          width: "290px",
                          marginRight: "30px"
                        }}
                        key={i}
                      >
                        <div className="single-product-item">
                          <div className="thumb">
                            <img src={product.img} alt="product" />
                          </div>
                          <div className="content">
                            <h4 className="title">
                              <a href="/">{product.name}</a>
                            </h4>
                            <div className="price-wrap">
                              <span className="price mr-2">
                                {product.reducePrice}
                              </span>
                              <del>{product.price}</del>
                            </div>
                            <a href="/" className="boxed-bt">
                              {product.button}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}

                  <div
                    className="owl-item cloned"
                    style={{
                      width: "290px",
                      marginRight: "30px"
                    }}
                  >
                    <div className="single-product-item">
                      <div className="thumb">
                        <img src="assets/img/product/02.jpg" alt="product" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <a href="/">V7t watch</a>
                        </h4>
                        <div className="price-wrap">
                          <span className="price">$34</span> <del>$55</del>
                        </div>
                        <a href="/" className="boxed-bt">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{
                      width: "290px",
                      marginRight: "30px"
                    }}
                  >
                    <div className="single-product-item">
                      <div className="thumb">
                        <img src="assets/img/product/03.jpg" alt="product" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <a href="/">t2f Watch</a>
                        </h4>
                        <div className="price-wrap">
                          <span className="price">$34</span> <del>$55</del>
                        </div>
                        <a href="/" className="boxed-bt">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
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
                <div className="owl-dots" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductArea;
