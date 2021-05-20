import { useIc } from "../../context/IcContext.jsx";
import React from "react";
import Toggle from "../Toggle";
import styled from "styled-components";

const A = styled.a`
  &:hover {
    color: ${(props) => props.color} !important;
  }
`;

const AChild = styled.a`
  &:hover {
    background-color: ${(props) => props.backgroundColor} !important;
  }
`;
function Header({ theme, toggleTheme }) {
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
                    <A
                      className={`nav-link ${
                        !!option.childs && "pl-0 dropdown-toggle"
                      }`}
                      color={staticSetup.styling.colorPalette.primaryColors[0]}
                      data-toggle="dropdown"
                      href="#"
                      onClick={() => window.ic.executeFunction(option.action)}
                    >
                      {option.label}
                    </A>
                    {!!option.childs && (
                      <div className="dropdown-menu">
                        {option.childs.map((child, iChild) => (
                          <AChild
                            href="#"
                            backgroundColor={
                              staticSetup.styling.colorPalette.primaryColors[0]
                            }
                            key={iChild}
                            onClick={() =>
                              window.ic.executeFunction(child.action)
                            }
                            className="dropdown-item"
                          >
                            {child.label}
                          </AChild>
                        ))}
                      </div>
                    )}
                  </nav>
                ))}
            </ul>
          </div>

          <div className="d-flex justify-content-center">
            <div className="nav-right-content">
              <ul>
                {!!staticSetup.content.layout.headerIcons &&
                  staticSetup.content.layout.headerIcons.map(
                    (element, indexE) => (
                      <li key={indexE} className="align-middle">
                        <A
                          href="#"
                          onClick={() =>
                            window.ic.executeFunction(element.action)
                          }
                        >
                          <i className={`${element.icon}`}></i>
                        </A>
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
