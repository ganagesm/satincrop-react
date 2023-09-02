import React from "react";

const AboutContact = () => {
return (
<>
  <section className="about-area ptb-110">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="about-image">
            <img src="/images/about/4.jpg" alt="image" />
            <img src="/images/about/5.jpg" alt="image" />
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="about-content">
            <h2>Who We Are
            </h2>
            <p> SA Technologies Inc is a California based IT Consulting & Offshore Company headquartered at Santa Monica
              with offices in US, Canada, Singapore & India.

            </p>
            <p> We specializes in offering IT consulting and Development solutions using Remote as well as onsite IT
              Teams. Over the years, we have been helping our customers achieve operational excellence and compliance on
              the cloud. Our expertise lies in delivering quality services, cross-platform skills & supporting you to
              achieve operational excellence & empower you to become a technology-driven enterprise.

            </p>
          </div>
        </div>
      </div>
      <div class="about-inner-area">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="about-text">
              <h3>Vision</h3>
              <p>Committed to going the extra mile to bring success to the clients consistently We are dedicated to delivering the right people, solutions, and services to the clients that they require to meet their technology challenges and business goals.

</p>
            </div>
          </div>
          {/* <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="about-text">
              <h3>Our Mission</h3>
              <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc
                tinci dunt nec elei fend et tiram.</p>
            </div>
          </div> */}
          <div class="col-lg-6 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
            <div class="about-text">
              <h3>Mission</h3>
              <p>Optimizing client satisfaction with quality services Delivering world-class capabilities to every client leveraging leading technologies & industry best practice</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Shape Images */}
    <div className="shape-img1">
      <img src="/images/shape/shape1.png" alt="image" />
    </div>
    <div className="shape-img2">
      <img src="/images/shape/shape2.svg" alt="image" />
    </div>
    <div className="shape-img3">
      <img src="/images/shape/shape3.png" alt="image" />
    </div>
    <div className="shape-img4">
      <img src="/images/shape/shape4.svg" alt="image" />
    </div>
    <div className="shape-img5">
      <img src="/images/shape/shape5.svg" alt="image" />
    </div>
    <div className="shape-img6">
      <img src="/images/shape/shape6.png" alt="image" />
    </div>
    <div className="dot-shape1">
      <img src="/images/shape/dot1.png" alt="image" />
    </div>
    <div className="dot-shape2">
      <img src="/images/shape/dot2.png" alt="image" />
    </div>
  </section>
</>
);
};

export default AboutContact;