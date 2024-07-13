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
            {/* <div className="section-title">
              <h2>We have expertise in</h2>
            </div> */}

            <div className="tab services-tab-list">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <ul className="tabs">
                    <li
                      className="current"
                      onClick={(e) => this.openTabSection(e, "tab1")}>
                      <i className="flaticon-income"></i>
                      <span>UI/UX Design Solutions</span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab2")}>
                      <i className="flaticon-automatic"></i>
                      <span>Web Development </span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab3")}>
                      <i className="flaticon-locked"></i>
                      <span>Mobile App Development</span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-8 col-md-8">
                  <div className="tab-content">
                    <div id="tab1" className="tabs-item">
                      {/* <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div> */}
                      <div>
                        <h3>
                          Next Gen UI/UX Solutions – Elevate Your Experience
                          with AI-Powered Design Solutions.{" "}
                        </h3>
                      </div>

                      <div className="content">
                        <p>
                          Elevate User Engagement with Our Cutting-Edge UI & UX
                          Solutions. At SA Technologies, we're dedicated to
                          refining user interactions through our UI & UX
                          Services. Our approach combines aesthetics and
                          functionality to craft seamless digital experiences.
                          By understanding user behaviors and preferences, we
                          create intuitive interfaces that resonate with your
                          audience.
                        </p>
                        <p>
                          Whether it's web design, app development, or
                          interactive solutions, we prioritize user-centric
                          designs that captivate and convert. Elevate your brand
                          with our UI & UX expertise and deliver exceptional
                          experiences that leave a lasting impression.
                        </p>

                        {/* <Link href="/service-details" className="btn btn-primary">
                          Read More
                        </Link> */}
                      </div>
                    </div>

                    <div id="tab2" className="tabs-item">
                      <div>
                        <h3>Custom Web Development Solutions </h3>
                      </div>

                      <div className="content">
                        <p>
                          In this digital era, every business needs a high
                          scoring website that is search engine friendly,
                          multi-responsive, and provides rich user experience. A
                          professional web app development company, like SA
                          Technologies, can help you fulfill those needs.
                        </p>
                        <p>
                          We are a leading website development services
                          provider, our expert developers possess razor-sharp
                          coding skills to provide you with cutting-edge web app
                          development services that help you emerge on top. We
                          have years of experience working with businesses of
                          all sizes and across multiple industries. Our team
                          works tirelessly to provide end to end web development
                          solutions.
                        </p>

                        <p>
                          AI-Powered Web Development Solutions We are AI focused
                          technology company and we leverage all the modern
                          tools and technologies to offer you web design
                          services that are second to none. Over the years, we
                          have tested and refined our web design and Website
                          development services to produce the best possible web
                          solutions in the most cost-effective way.
                        </p>

                        <p>
                          Being one of the top Web Development Companies in
                          India and the USA, we develop websites that boast
                          high-tech and powerful functionalities, simple yet
                          visually engaging design, and seamless user
                          experience. Irrespective of the scale and industry of
                          your business, SA Technologies integrates dynamic web
                          app development services with responsive website
                          design to provide you with a powerful website that
                          delivers results.
                        </p>
                      </div>
                    </div>

                    <div id="tab3" className="tabs-item">
                      <div>
                        <h3>
                          Revolutionizing Digital Solutions: AI-Powered Mastery
                          by SA Technologies
                        </h3>
                        <h5>
                          Transform The Future With Our Mobile App Development
                          Service
                        </h5>
                      </div>

                      <div className="content ai-about-content">
                        <h6>Hybrid App Development</h6>
                        <p>
                          For a budget-friendly solution targeting multiple
                          platforms, consider our Hybrid App Development. Using
                          web tech like HTML, CSS, and JavaScript, we design
                          apps for Android, iOS, and the web.
                        </p>
                        <p>Benefits of Hybrid Apps</p>

                        <ul className="about-list">
                          <li>
                            <i className="fa-solid fa-check"></i>{" "}
                            <b>Budget-Friendly:</b> One codebase reduces both
                            development time and costs.
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>{" "}
                            <b>Rapid Deployment </b> Get your app to market
                            quickly.
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>{" "}
                            <b> Consistent Codebase</b> Updates are a breeze
                            with uniform code across platforms.
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>{" "}
                            <b> Device Feature Access</b>Taps into native device
                            functions like GPS and notifications.
                          </li>
                        </ul>
                      </div>
                      <div className="content ai-about-content pt-100">
                        <h2>Cross-Platform App Development </h2>
                        <p>
                          Target a broad audience with one codebase. Our
                          expertise in React Native, Xamarin, and Flutter offers
                          a holistic cross-platform app experience on Android
                          and iOS.
                        </p>
                        <p>Benefits of Hybrid Apps</p>

                        <ul className="about-list">
                          <li>
                            <i className="fa-solid fa-check"></i>{" "}
                            <b>Cost-Effectiveness</b> Building a single codebase
                            that works across multiple platforms significantly
                            reduces development costs and time-to-market.
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>{" "}
                            <b>Cost Efficiency </b> A universal codebase cuts
                            development expenses and speeds up deployment.
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>{" "}
                            <b> Code Reusability</b> Frameworks like React
                            Native allow significant code reuse, easing updates.
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>{" "}
                            <b> Swift Development</b> Launch your app swiftly
                            and get ahead.
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>{" "}
                            <b> Uniform User Experience</b> Ensures users enjoy
                            a consistent interface across devices.
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
