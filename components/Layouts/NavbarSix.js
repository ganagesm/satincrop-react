import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavbarSix = () => {
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
      <div id="navbar" className="navbar-area navbar-area-with-position-relative">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img
                  src="/images/black-logo.png"
                  alt="logo"
                />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="#"
                      className={`nav-link ${currentPath == "/" && "active"}`}
                    >
                      AI Services <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/"
                          className={`nav-link ${
                            currentPath == "/" && "active"
                          }`}
                        >
                          Generative AI
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/index-2/"
                          className={`nav-link ${
                            currentPath == "/index-2/" && "active"
                          }`}
                        >
                         Machine Learning
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/index-3/"
                          className={`nav-link ${
                            currentPath == "/index-3/" && "active"
                          }`}
                        >
                          Home Demo - 3
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/index-4/"
                          className={`nav-link ${
                            currentPath == "/index-4/" && "active"
                          }`}
                        >
                         IOT
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Engagement Models <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/about/"
                          className={`nav-link ${
                            currentPath == "/about/" && "active"
                          }`}
                        >
                          Nearshore
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/about-two/"
                          className={`nav-link ${
                            currentPath == "/about-two/" && "active"
                          }`}
                        >
                          Offshore
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/team/"
                          className={`nav-link ${
                            currentPath == "/team/" && "active"
                          }`}
                        >
                          Onsite
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/services/"
                      className={`nav-link ${
                        currentPath == "/services/" && "active"
                      }`}
                    >
                      Technologies <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/services/"
                          className={`nav-link ${
                            currentPath == "/services/" && "active"
                          }`}
                        >
                          Microsoft
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/services-two/"
                          className={`nav-link ${
                            currentPath == "/services-two/" && "active"
                          }`}
                        >
                          Google
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/services-three/"
                          className={`nav-link ${
                            currentPath == "/services-three/" && "active"
                          }`}
                        >
                          AWS
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/services-four/"
                          className={`nav-link ${
                            currentPath == "/services-four/" && "active"
                          }`}
                        >
                          Oracle
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/service-details/"
                          className={`nav-link ${
                            currentPath == "/service-details/" && "active"
                          }`}
                        >
                          Salesforce
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/projects/"
                      className={`nav-link ${
                        currentPath == "/projects/" && "active"
                      }`}
                    >
                      Talent Solutions <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/projects/"
                          className={`nav-link ${
                            currentPath == "/projects/" && "active"
                          }`}
                        >
                          Contingent Workforce
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/projects-details/"
                          className={`nav-link ${
                            currentPath == "/projects-details/" && "active"
                          }`}
                        >
                          RPO Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/projects-details/"
                          className={`nav-link ${
                            currentPath == "/projects-details/" && "active"
                          }`}
                        >
                         Hire Train Deploy
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/shop/"
                          className={`nav-link ${
                            currentPath == "/shop/" && "active"
                          }`}
                        >
                          Payroll Outsourcing Services
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
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

                  <Link href="/contact" className="btn btn-primary">
                    Schedule a Demo
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
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
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

export default NavbarSix;
