import { useIc } from "../../context/IcContext.jsx";
import React from "react";
import Toggle from '../Toggle'

function Header({theme, toggleTheme}) {
  const { staticSetup } = useIc();

  return (
    <header className="App-header">
      <nav className="navbar navbar-area navbar-expand-lg">
        <div className="container nav-container">
          {!!staticSetup.content.logo && (
            <div className="logo-wrapper navbar-brand">
              <a href="/" className="logo ">
                <img
                  src={staticSetup.content.logo}
                  style={{
                    height: staticSetup.styling.logoHeight || "50px",
                    width: staticSetup.styling.logoWidth || "auto"
                  }}
                  alt="logo"
                />
              </a>
            </div>
          )}
          <div className="collapse navbar-collapse" id="cgency">
            <ul className="navbar-nav" id="primary-menu">
              {!!staticSetup.content.headerButtons &&
                staticSetup.content.headerButtons.map((option, iOpt) => (
                  <li
                    key={iOpt}
                    className={`nav-item ${!!option.childs && "dropdown"}`}
                  >
                    <a
                      className={`nav-link ${
                        !!option.childs && "pl-0 dropdown-toggle"
                      }`}
                      data-toggle="dropdown"
                      href="/"
                    >
                      {option.label}
                    </a>
                    {!!option.childs && (
                      <div className="dropdown-menu">
                        {option.childs.map((child, iChild) => (
                          <a
                            href="blog.html"
                            key={iChild}
                            className="dropdown-item"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
            </ul>
          </div>

          <div className="d-flex justify-content-center">
            <div className="nav-right-content">
              <ul>
                {!!staticSetup.content.headerIcons &&
                  staticSetup.content.headerIcons.map((element, indexE) => (
                    <li key={indexE} className="align-middle">
                      <a href="/">
                        <i className={`${element.icon}`}></i>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
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
