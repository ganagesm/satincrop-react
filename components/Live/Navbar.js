import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
      <div id="navbar" className="navbar-area">
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
                      className={`nav-link ${currentPath == "/generativeAi" || currentPath === "/ai-machine-learning-services" || currentPath === "/UIUXSolutions" || currentPath === "/ai-driven-iot" || currentPath === "/ai-machine-learning-services" || currentPath === "/data-science" || currentPath === "/cloud-infrastructure-services" || currentPath === "/rpa"|| currentPath === "/devops" || currentPath === "/SoftwareApplication" ? "active"
                          : ""
                        }`}
                    >
                      AI Services
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/generativeAi"
                          className={`nav-link ${currentPath == "/generativeAi" && "active"
                            }`}
                        >
                          Generative AI
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/ai-machine-learning-services/"
                          className={`nav-link ${currentPath == "/ai-machine-learning-services/" && "active"
                            }`}
                        >
                          Machine Learning
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/ai-driven-iot"
                          className={`nav-link ${currentPath == "/ai-driven-iot" && "active"
                            }`}
                        >
                          IOT (Internet of Things)
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/data-science"
                          className={`nav-link ${currentPath == "/data-science" && "active"
                            }`}
                        >
                          Data Science & Analytics
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/rpa/"
                          className={`nav-link ${currentPath == "/rpa" && "active"
                            }`}
                        >
                          RPA
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/cloud-infrastructure-services"
                          className={`nav-link ${currentPath == "/cloud-infrastructure-services" && "active"
                            }`}
                        >
                          Cloud Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/devops"
                          className={`nav-link ${currentPath == "/devops" && "active"
                            }`}
                        >
                          DevOps
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/UIUXSolutions"
                          className={`nav-link ${currentPath == "/UIUXSolutions" && "active"
                            }`}
                        >
                          UI & UX Design
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/SoftwareApplication"
                          className={`nav-link ${currentPath == "/SoftwareApplication" && "active"
                            }`}
                        >
                          Software Application development
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/cloud-infrastructure-services"
                          className={`nav-link ${currentPath == "/cloud-infrastructure-services" && "active"
                            }`}
                        >
                          Mobile App Development
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/cloud-infrastructure-services"
                          className={`nav-link ${currentPath == "/cloud-infrastructure-services" && "active"
                            }`}
                        >
                          Software Quality Assurance
                        </Link>
                      </li>

                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="#"
                      className={`nav-link ${currentPath == "/nearshore" || currentPath === "/offshore" || currentPath === "/onsite" ? "active"
                          : ""
                        }`}
                    >
                      Engagement Models
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/nearshore"
                          className={`nav-link ${currentPath == "/nearshore" && "active"
                            }`}
                        >
                          Nearshore
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/offshore"
                          className={`nav-link ${currentPath == "/offshore" && "active"
                            }`}
                        >
                          Offshore
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/onsite"
                          className={`nav-link ${currentPath == "/onsite" && "active"
                            }`}
                        >
                          Onsite
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href=""
                      className={`nav-link ${currentPath == "/kubernetes" || currentPath === "/react" || currentPath === "/net" || currentPath === "/python" || currentPath === "/c-sharp" || currentPath === "/rails" || currentPath === "/angular" || currentPath === "/android" ? "active"
                          : ""
                        }`}
                    >
                      Technologies
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/kubernetes"
                          className={`nav-link ${currentPath == "/kubernetes" && "active"
                            }`}
                        >
                          Microsoft
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/react"
                          className={`nav-link ${currentPath == "/react" && "active"
                            }`}
                        >
                          Google
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/net"
                          className={`nav-link ${currentPath == "/net" && "active"
                            }`}
                        >
                          Oracle
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/python"
                          className={`nav-link ${currentPath == "/python" && "active"
                            }`}
                        >
                          AWS
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/c-sharp"
                          className={`nav-link ${currentPath == "/c-sharp" && "active"
                            }`}
                        >
                          Salesforce
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/rails"
                          className={`nav-link ${currentPath == "/rails" && "active"
                            }`}
                        >
                          Service Now
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/case-studies"
                      className={`nav-link ${currentPath == "/case-studies" && "active"
                        }`}
                    >
                      Talent Solutions
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/contingent-solution"
                          className={`nav-link ${currentPath == "/contingent-solution" && "active"
                            }`}
                        >
                         Contingent Workforce
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/rpo-services"
                          className={`nav-link ${currentPath == "/rpo-services" && "active"
                            }`}
                        >
                          RPO Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/hire-train-deploy"
                          className={`nav-link ${currentPath == "/hire-train-deploy" && "active"
                            }`}
                        >
                          Hire Train Deploy 
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/payroll-outsourcing-services"
                          className={`nav-link ${currentPath == "/payroll-outsourcing-services" && "active"
                            }`}
                        >
                         Payroll Outsourcing Services
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/about"
                      className={`nav-link ${currentPath == "/about" && "active"
                        }`}
                    >
                     Internal Audit
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
        className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"
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

export default Navbar;
