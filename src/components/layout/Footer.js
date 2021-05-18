import React from "react";
import { useIc } from "../../context/IcContext.jsx";

function Footer() {
  const { staticSetup } = useIc();

  return (
    <footer className="footer-area padding-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-inner text-center">
              <ul className="social-icon">
                {!!staticSetup.content.footerIcons &&
                  staticSetup.content.footerIcons.map((button, i) => (
                    <li key={i}>
                      <a href="/">
                        <i className={`${button.icon}`} />
                      </a>
                    </li>
                  ))}
              </ul>
              <div className="copyright-text margin-top-30">
                © Copyrights 2019 All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
