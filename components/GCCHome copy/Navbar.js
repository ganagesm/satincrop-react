import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import HeaderTopBar from "../Live/HeaderTopBar";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  return (
    <>
      <HeaderTopBar />
      {/* <div id="navbar" className="navbar-area"> */}
      <div
        id="navbar"
        className="navbar-area navbar-area-with-position-relative">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img
                  src="/images/sa-logo.svg"
                  className="main-logo"
                  alt="logo"
                  width={80}
                />
                <img
                  src="/images/sa-logo.svg"
                  className="optional-logo"
                  alt="logo"
                  height={30}
                  width={80}
                />
              </Link>

              <div className="cmmi">
                <h4>
                  {" "}
                  A CMMI Level <span>5</span> Company{" "}
                </h4>
                {/* <p>Level <span>5</span></p>*/}
              </div>

              {/* <img alt="cmmi5" src="./images/ca-cmmi_logo.jpeg" width={50} style={{ marginRight: "10px", }} /> */}

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/gcc-operations/"
                      className={`nav-link ${
                        currentPath == "/gcc-operations/" && "active"
                      }`}>
                      GCC Operations
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/customized-workspaces/"
                      className={`nav-link ${
                        currentPath == "/customized-workspaces/" && "active"
                      }`}>
                      Customized Workspaces
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="#"
                      className={`nav-link ${
                        currentPath == "/build-operate-transfer/" ||
                        currentPath === "/qa-automation/"
                          ? "active"
                          : ""
                      }`}>
                      Engagement Model
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/build-operate-transfer/"
                          className={`nav-link ${
                            currentPath == "/build-operate-transfer/" &&
                            "active"
                          }`}>
                          Build Operate Transfer (BOT)
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/global-capability-center/"
                          className={`nav-link ${
                            currentPath == "/global-capability-center/" &&
                            "active"
                          }`}>
                          Global Capability Center
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/managed-teams/"
                          className={`nav-link ${
                            currentPath == "/managed-teams/" && "active"
                          }`}>
                          Managed Teams
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* others-options */}
                <div className="others-options">
                  {/* <Link href="/cart" className="cart-btn">
                    <i className="flaticon-commerce-and-shopping"></i>
                    <span>1</span>
                  </Link>

                  <div className="option-item">
                    <i
                      className="search-btn flaticon-search"
                      onClick={handleToggleSearchModal}
                    ></i>
                  </div> */}

                  <Link href="/contact-us" className="btn btn-primary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}>
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}
    </>
  );
};

export default Navbar;
