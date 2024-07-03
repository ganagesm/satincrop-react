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
        <div className="services-section ptb-70 bg-f2f6f9 software-development-services-on-demand">
          <div className="container">
            <div className="section-title">
              <h2>Build your offshore Dev team in 24 Hrs. </h2>
            </div>

            <div className="tab services-tab-list">
              <div className="row">
                <div className="col-lg-5 col-md-5">
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
                </div>

                <div className="col-lg-7 col-md-7">
                  <div className="tab-content ai-about-area">
                    <div id="tab1" className="tabs-item">
                      <div className="content ai-about-content">
                        <p>
                          Begin by outlining the specific skills, experience,
                          and project requirements for your offshore developer.
                          The more precise you are, the better we can match you
                          with the perfect candidate.
                        </p>
                        <ul className="about-list">
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Identify key technical skills and experience levels.{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Specify the scope and objectives of the project.{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Determine the desired start date and duration.{" "}
                          </li>
                        </ul>
                        <div className="about-btn">
                          <Link href="#cotactForm" className="btn btn-primary">
                            Hire Developer
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div id="tab2" className="tabs-item">
                      <div className="content ai-about-content">
                        <p>
                          Within hours of receiving your requirements, our team
                          will consult with you to understand your needs in
                          detail and immediately start matching you with vetted
                          offshore developers.
                        </p>

                        <ul className="about-list">
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Quick consultation to refine your requirements.{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Access our pool of pre-screened and highly skilled
                            developers.{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Receive a shortlist of candidates that match your
                            criteria.{" "}
                          </li>
                        </ul>
                        <div className="about-btn">
                          <Link href="#cotactForm" className="btn btn-primary">
                            Hire Developer
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div id="tab3" className="tabs-item">
                      {/* <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div> */}

                      <div className="content ai-about-content">
                        <p>
                          Conduct interviews with shortlisted candidates to
                          assess their suitability for your project. Our
                          streamlined process ensures you can evaluate and
                          select the best fit swiftly.
                        </p>
                        <ul className="about-list">
                          {" "}
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Schedule and conduct interviews with top candidates.{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>Evaluate
                            technical and soft skills.{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>Make your
                            selection with confidence.{" "}
                          </li>
                        </ul>
                        <div className="about-btn">
                          <Link href="#cotactForm" className="btn btn-primary">
                            Hire Developer
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div id="tab4" className="tabs-item">
                      <div className="content ai-about-content">
                        <p>
                          Once you’ve selected a developer, we handle the
                          onboarding process to ensure they’re ready to start
                          working on your project within 24 hours.
                        </p>

                        <ul className="about-list">
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Complete necessary documentation and agreements.{" "}
                          </li>

                          <li>
                            <i className="fa-solid fa-check"></i>
                            Set up necessary tools and access permissions.{" "}
                          </li>

                          <li>
                            <i className="fa-solid fa-check"></i>
                            Integrate the developer into your team seamlessly.{" "}
                          </li>
                        </ul>
                        <div className="about-btn">
                          <Link href="#cotactForm" className="btn btn-primary">
                            Hire Developer
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div id="tab5" className="tabs-item">
                      <div className="content ai-about-content">
                        <p>
                          Your offshore developer is now ready to hit the ground
                          running. We provide continuous support to ensure a
                          smooth collaboration and address any issues promptly.
                        </p>
                        <ul className="about-list">
                          <li>
                            <i className="fa-solid fa-check"></i>Begin your
                            project with a kickoff meeting.{" "}
                          </li>

                          <li>
                            <i className="fa-solid fa-check"></i>
                            Receive ongoing support and performance monitoring.{" "}
                          </li>

                          <li>
                            <i className="fa-solid fa-check"></i>
                            Enjoy seamless communication and project updates.{" "}
                          </li>
                        </ul>
                        <div className="about-btn">
                          <Link href="#cotactForm" className="btn btn-primary">
                            Hire Developer
                          </Link>
                        </div>
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
