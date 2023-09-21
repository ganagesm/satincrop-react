import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import HeaderTopBar from "./HeaderTopBar";

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
      <div id="navbar" className="navbar-area navbar-area-with-position-relative">
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
                      className={`nav-link ${currentPath == "/generative-ai" || currentPath === "/machine-learning-and-artificial-intelligence" || currentPath === "/frontend-development" || currentPath === "/internet-of-things" || currentPath === "/machine-learning-and-artificial-intelligence" || currentPath === "/data-science-analytics" || currentPath === "/cloud-services" || currentPath === "/rpa"|| currentPath === "/devops" || currentPath === "/mobile-app-development" || currentPath === "/software-quality-assurance" || currentPath === "/software-application-development" || currentPath === "/ui-ux-design" ? "active"
                          : ""
                        }`}
                    >
                      AI Services
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/generative-ai"
                          className={`nav-link ${currentPath == "/generative-ai" && "active"
                            }`}
                        >
                          Generative AI
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/machine-learning-and-artificial-intelligence"
                          className={`nav-link ${currentPath == "/machine-learning-and-artificial-intelligence" && "active"
                            }`}
                        >
                          Machine Learning
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/internet-of-things"
                          className={`nav-link ${currentPath == "/internet-of-things" && "active"
                            }`}
                        >
                          IOT (Internet of Things)
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/data-science-analytics"
                          className={`nav-link ${currentPath == "/data-science-analytics" && "active"
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
                          href="/cloud-services"
                          className={`nav-link ${currentPath == "/cloud-services" && "active"
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
                          href="/ui-ux-design"
                          className={`nav-link ${currentPath == "/ui-ux-design" && "active"
                            }`}
                        >
                          UI & UX Design
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/software-application-development"
                          className={`nav-link ${currentPath == "/software-application-development" && "active"
                            }`}
                        >
                          Software Application development
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/mobile-app-development"
                          className={`nav-link ${currentPath == "/mobile-app-development" && "active"
                            }`}
                        >
                          Mobile App Development
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/software-quality-assurance"
                          className={`nav-link ${currentPath == "/software-quality-assurance" && "active"
                            }`}
                        >
                          Software Quality Assurance
                        </Link>
                      </li>

                    </ul>
                  </li>
                  {/* <li className="nav-item">
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
                  </li> */}
                  <li className="nav-item">
                    <Link
                      href=""
                      className={`nav-link ${currentPath == "/microsoft" || currentPath === "/google-cloud" || currentPath === "/oracle" || currentPath === "/aws-services" || currentPath === "/salesforce" || currentPath === "/servicenow" || currentPath === "/angular" || currentPath === "/android" ? "active"
                          : ""
                        }`}
                    >
                      Technologies
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/microsoft"
                          className={`nav-link ${currentPath == "/microsoft" && "active"
                            }`}
                        >
                          Microsoft
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/google-cloud"
                          className={`nav-link ${currentPath == "/google-cloud" && "active"
                            }`}
                        >
                          Google
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/oracle"
                          className={`nav-link ${currentPath == "/oracle" && "active"
                            }`}
                        >
                          Oracle
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/aws-services"
                          className={`nav-link ${currentPath == "/aws-services" && "active"
                            }`}
                        >
                          AWS
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/salesforce"
                          className={`nav-link ${currentPath == "/salesforce" && "active"
                            }`}
                        >
                          Salesforce
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/servicenow"
                          className={`nav-link ${currentPath == "/servicenow" && "active"
                            }`}
                        >
                          Service Now
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/mendix"
                          className={`nav-link ${currentPath == "/mendix" && "active"
                            }`}
                        >
                          Mendix
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href=""
                      className={`nav-link ${currentPath == "/contigent-service" || currentPath === "/rpo-services" || currentPath === "/hire-train-deploy" || currentPath === "/payroll-outsourcing-services" || currentPath === "/gcc" ? "active"
                      : ""
                    }`}
                    >
                      Talent Solutions
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/contigent-service"
                          className={`nav-link ${currentPath == "/contigent-service" && "active"
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
                      <li className="nav-item">
                        <Link
                          href="/gcc"
                          className={`nav-link ${currentPath == "/gcc" && "active"
                            }`}
                        >
                         GCC Service
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/internal-audit"
                      className={`nav-link ${currentPath == "/internal-audit" && "active"
                        }`}
                    >
                     Internal Audit
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      className={`nav-link ${currentPath == "/education" || currentPath === "/government" || currentPath === "/healthcare" || currentPath === "/media-entertainment" || currentPath === "/semiconductor" || currentPath === "/manufacturing" || currentPath === "/Product-services" || currentPath === "/retail" || currentPath === "/fmcd" ? "active"
                          : ""
                        }`}
                    >
                     Industry
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/education"
                          className={`nav-link ${currentPath == "/education" && "active"
                            }`}
                        >
                          Education
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/government"
                          className={`nav-link ${currentPath == "/government" && "active"
                            }`}
                        >
                          Government
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/healthcare"
                          className={`nav-link ${currentPath == "/healthcare" && "active"
                            }`}
                        >
                          Healthcare
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/media-entertainment"
                          className={`nav-link ${currentPath == "/media-entertainment" && "active"
                            }`}
                        >
                          Media and Entertainment
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/semiconductor"
                          className={`nav-link ${currentPath == "/semiconductor" && "active"
                            }`}
                        >
                          Semiconductor
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/manufacturing"
                          className={`nav-link ${currentPath == "/manufacturing" && "active"
                            }`}
                        >
                          Manufacturing
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/Product-services"
                          className={`nav-link ${currentPath == "/Product-services" && "active"
                            }`}
                        >
                          IT Product and services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/retail"
                          className={`nav-link ${currentPath == "/retail" && "active"
                            }`}
                        >
                         Retail
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/fmcd"
                          className={`nav-link ${currentPath == "/fmcd" && "active"
                            }`}
                        >
                          FMCD
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
