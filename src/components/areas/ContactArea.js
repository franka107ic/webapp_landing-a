import React from "react";

function ContactArea(props) {
  return (
    <section className="contact-area contact-bg padding-120" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-info-area">
              <h3 className="title">{props.params.title}</h3>
              <p>{props.params.text}</p>
              <ul className="contact-info-list ">
                {props.params.info &&
                  props.params.info.map((element, i) => (
                    <li key={i} className="single-info-item">
                      <div className="icon">
                        <i className={element.icon} />
                      </div>
                      <div className="content">
                        <span className="details">{element.firstText}</span>
                        <span className="details">{element.secondText}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form-area">
              <form
                action="index.html"
                id="get_in_touch"
                className="contact-form"
              >
                <div className="row">
                  {props.params.inputs &&
                    props.params.inputs.map((input, i) => {
                      switch (input.tag) {
                        case "input":
                          return (
                            <div key={i} className={input.class}>
                              <div className="form-group">
                                <input
                                  type={input.type}
                                  id={input.key}
                                  className="form-control"
                                  placeholder={input.placeholder}
                                />
                              </div>
                            </div>
                          );
                        case "textarea":
                          return (
                            <div key={i} className={input.class}>
                              <div className="form-group textarea">
                                <input
                                  type={input.type}
                                  id={input.key}
                                  className="form-control"
                                  placeholder={input.placeholder}
                                />
                              </div>
                            </div>
                          );
                        default:
                          return <h1>Elemento incorrecto</h1>;
                      }
                    })}
                  <div className="col-lg-12">
                    {props.params.buttons &&
                      props.params.buttons.map((button, i) => (
                        <button className="submit-btn" key={i} type="submit">
                          {button.label}
                        </button>
                      ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactArea;
