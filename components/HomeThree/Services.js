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
        <div className="services-section bg-f2f6f9 ptb-110">
          <div className="container">
            <div className="section-title">
              <h2>SAT's offerings </h2>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
            </div>

            <div className="tab services-tab-list">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <ul className="tabs">
                    <li
                      className="current"
                      onClick={(e) => this.openTabSection(e, "tab1")}>
                      <i className="flaticon-income"></i>
                      <span>Consulting</span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab2")}>
                      <i className="flaticon-automatic"></i>
                      <span>Migration</span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab3")}>
                      <i className="flaticon-locked"></i>
                      <span>Manage </span>
                    </li>

                    {/* <li onClick={(e) => this.openTabSection(e, "tab4")}>
                      <i className="flaticon-molecular"></i>
                      <span>Health & Manufacturing</span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab5")}>
                      <i className="flaticon-gear"></i>
                      <span>Software Engineers</span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab6")}>
                      <i className="flaticon-ceo"></i>
                      <span>IT Professional</span>
                    </li> */}
                  </ul>
                </div>

                <div className="col-lg-8 col-md-8">
                  <div className="tab-content">
                    <div id="tab1" className="tabs-item">
                      {/* <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div> */}

                      <div className="content">
                        <p>
                          Are you looking to harness the power of cloud
                          computing to drive your business forward? Look no
                          further! Our expert consulting services are here to
                          guide you every step of the way. At SAT company, we
                          understand that every business is unique. That's why
                          we offer personalized consulting services to assess
                          your specific needs and craft a cloud strategy that
                          aligns perfectly with your goals.
                        </p>
                        <p>
                          Our team of experienced consultants will work closely
                          with you to gain a deep understanding of your
                          organization's objectives, challenges, and
                          opportunities. We'll conduct a comprehensive analysis
                          to identify the best cloud solutions that can enhance
                          your efficiency, scalability, and security.
                        </p>

                        {/* <Link
                          href="/service-details"
                          className="btn btn-primary">
                          Read More
                        </Link> */}
                      </div>
                    </div>

                    <div id="tab2" className="tabs-item">
                      {/* <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div> */}

                      <div className="content">
                        <p>
                          Ready to make the move to Google Cloud? Our migration
                          experts are here to ensure a smooth and secure
                          transition. Migrating your workloads to the cloud can
                          be a complex endeavor, but with our guidance, you can
                          rest easy knowing that your data and applications are
                          in capable hands.
                        </p>
                        <p>
                          We take a meticulous approach to migration,
                          meticulously planning and executing each step to
                          minimize downtime and disruptions. Our team will
                          assess your existing infrastructure, design a
                          migration plan tailored to your needs, and ensure that
                          your valuable assets are safeguarded throughout the
                          process. With our assistance, you can make the leap to
                          Google Cloud with confidence.
                        </p>

                        {/* <Link
                          href="/service-details"
                          className="btn btn-primary">
                          Read More
                        </Link> */}
                      </div>
                    </div>

                    <div id="tab3" className="tabs-item">
                      {/* <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div> */}

                      <div className="content">
                        <p>
                          Managing your Google Cloud environment doesn't have to
                          be a time-consuming and resource-intensive task. Our
                          managed services are designed to simplify the
                          management of your cloud resources, allowing you to
                          concentrate on what you do best – running your core
                          business operations.
                        </p>
                        <p>
                          Our dedicated team of cloud management experts will
                          handle all aspects of your Google Cloud environment,
                          from monitoring and optimization to security and
                          compliance. We proactively identify and address any
                          potential issues, ensuring that your cloud
                          infrastructure remains efficient, cost-effective, and
                          secure.
                        </p>
                        <p>
                          Don't let the complexities of cloud computing hold you
                          back. Partner with SAT company and unlock the full
                          potential of Google Cloud for your business.
                        </p>
                        <p>
                          Contact us today to discuss your cloud needs and take
                          the first step toward a brighter, more efficient
                          future.
                        </p>

                        {/* <Link
                          href="/service-details"
                          className="btn btn-primary"
                        >
                          Read More
                        </Link> */}
                      </div>
                    </div>

                    <div id="tab4" className="tabs-item">
                      <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div>

                      <div className="content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomized words
                          which don't look even slightly believable. If you are
                          going to use a passage.
                        </p>

                        <Link
                          href="/service-details"
                          className="btn btn-primary">
                          Read More
                        </Link>
                      </div>
                    </div>

                    <div id="tab5" className="tabs-item">
                      <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div>

                      <div className="content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomized words
                          which don't look even slightly believable. If you are
                          going to use a passage.
                        </p>

                        <Link
                          href="/service-details"
                          className="btn btn-primary">
                          Read More
                        </Link>
                      </div>
                    </div>

                    <div id="tab6" className="tabs-item">
                      <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div>

                      <div className="content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomized words
                          which don't look even slightly believable. If you are
                          going to use a passage.
                        </p>

                        <Link
                          href="/service-details"
                          className="btn btn-primary">
                          Read More
                        </Link>
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
