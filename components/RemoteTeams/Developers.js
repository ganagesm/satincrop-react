import React, { Component } from "react";
import Link from "next/link";

export default class Services extends Component {
  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("animate__fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    document.getElementById(tabNmae).className +=
      " animate__fadeInUp animate__animated";
    evt.currentTarget.className += "current";
  };

  render() {
    return (
      <>
        <div className="services-section ptb-70 bg-f2f6f9 software-development-services-on-demand mb-50">
          <div className="container">
            <div className="section-title">
              <h2>Hire Top Vetted Developers</h2>
              <p>
                Need expert developers? Our vetted team delivers exceptional results across various technologies.
              </p>
            </div>

            <div className="tab services-tab-list">
              <div className="row">
                {/* <div className="col-lg-5 col-md-5">
                  <ul className="tabs">
                    <li
                      className="current"
                      onClick={(e) => this.openTabSection(e, "tab1")}>
                      <i className="flaticon-income"></i>
                      <span>Step 1: Define Your Requirements </span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab2")}>
                      <i className="flaticon-automatic"></i>
                      <span>Step 2: Consultation and Candidate Matching </span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab3")}>
                      <i className="flaticon-locked"></i>
                      <span>Step 3: Interview and Selection </span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab4")}>
                      <i className="flaticon-molecular"></i>
                      <span>Step 4: Onboarding and Integration </span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab5")}>
                      <i className="flaticon-gear"></i>
                      <span>Step 5: Kickoff and Ongoing Support </span>
                    </li>
                  </ul>
                </div> */}

                <div className="col-lg-12 col-md-12">
                  <div className="tab-content ai-about-area">
                    <div id="tab1" className="tabs-item">
                      <div className="content ai-about-content">
                        <ul className="about-list" style={{ columnCount: '4', maxWidth: '100%' }}>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Power Platform Developer{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Power BI Developer{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Power Apps Developer{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Sharepoint Developer{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Dynamics 365 CRM Developer{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Dynamics 365 Business Central{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Dynamics 365 Developer
                            {" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Microsoft Azure Developer
                            {" "}
                          </li>
                        </ul>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shape Images  */}
          <div className="shape-img1">
            <img src="/images/shape/shape1.png" alt="image" />
          </div>
          <div className="shape-img3">
            <img src="/images/shape/shape3.png" alt="image" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/shape2.svg" alt="image" />
          </div>
          <div className="shape-img5">
            <img src="/images/shape/shape5.svg" alt="image" />
          </div>
          <div className="shape-img4">
            <img src="/images/shape/shape4.svg" alt="image" />
          </div>
          <div className="dot-shape1">
            <img src="/images/shape/dot1.png" alt="image" />
          </div>
          <div className="dot-shape2">
            <img src="/images/shape/dot3.png" alt="image" />
          </div>
        </div>
      </>
    );
  }
}
