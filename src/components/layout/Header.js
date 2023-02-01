import { useIc } from "../../context/IcContext.jsx";
import React from "react";

function Header() {
  const { staticSetup } = useIc();
  return (
    <header className="App-header">
      <nav className="navbar navbar-area navbar-expand-lg">
        <div className="container nav-container">
          {!!staticSetup.content.layout.headerLogo && (
            <div
              onClick={() =>
                window.ic.executeFunction(
                  staticSetup.content.layout.headerLogo.action
                )
              }
              className="logo-wrapper navbar-brand"
              style={{ cursor: "pointer" }}
            >
              <img
                src={staticSetup.content.layout.headerLogo.src}
                style={{
                  height:
                    staticSetup.content.layout.headerLogo.heightScale + "rem" ||
                    "auto",
                  width:
                    staticSetup.content.layout.headerLogo.widthScale + "rem" ||
                    "auto",
                }}
                alt="logo"
              />
            </div>
          )}
          <div className="collapse navbar-collapse" id="cgency">
            <ul className="navbar-nav" id="primary-menu">
              {!!staticSetup.content.layout.headerButtons &&
                staticSetup.content.layout.headerButtons.map((option, iOpt) => (
                  <nav
                    key={iOpt}
                    className={`nav-item ${!!option.childs && "dropdown"}`}
                  >
                    <a
                      style={{ cursor: "pointer" }}
                      className={`nav-link ${!!option.childs && "pl-0 dropdown-toggle"
                        }`}
                      href={option.href}
                    // onClick={() => window.ic.executeFunction(option.action)}
                    >
                      {option.label}
                    </a>
                    {!!option.childs && (
                      <div className="dropdown-menu">
                        {option.childs.map((child, iChild) => (
                          <a
                            style={{ cursor: "pointer" }}
                            key={iChild}
                            href={child.href}
                            // onClick={() =>
                            //   window.ic.executeFunction(child.action)
                            // }
                            className="dropdown-item"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </nav>
                ))}
            </ul>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <div className="nav-right-content">
              <ul>
                {!!staticSetup.content.layout.headerIcons &&
                  staticSetup.content.layout.headerIcons.map(
                    (element, indexE) => (
                      <li key={indexE} className="align-middle">
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            window.ic.executeFunction(element.action)
                          }
                        >
                          <i className={`${element.icon}`}></i>
                        </a>
                      </li>
                    )
                  )}
              </ul>
            </div>
            {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
            <div className="responsive-mobile-menu">
              <button
                className="navbar-toggler ml-4"
                type="button"
                data-toggle="collapse"
                data-target="#cgency"
                aria-controls="cgency"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
