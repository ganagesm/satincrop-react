import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="ai-services-area pt-100 pb-100" style={{marginBottom:"50px;",}}>
        <div className="container">
          <div className="section-title with-underline-text">
             <h2>Benefits at SAT</h2>
             <p>Enjoy tailored benefits and a culture that nurtures growth and initiative within a supportive work environment.
            </p> 
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon">
                  <img src="/images/home-six/services/mobile-app.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Learning & Development</Link>
                </h3>
                <p>Propel your career with ongoing educational opportunities.</p>

                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-two">
                  <img src="/images/home-six/services/Datamanagement.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">An Energizing & Fun Environment</Link>
                </h3>
                <p>Thrive in a lively and creatively stimulating workspace.</p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon">
                  <img src="/images/home-six/services/icon1.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Comprehensive Employee Healthcare</Link>
                </h3>
                <p>Prioritize your well-being with our thorough health benefits.</p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-four">
                  <img src="/images/home-six/services/Cloudservices.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Authentic Work-Life Balance</Link>
                </h3>
                <p>Achieve equilibrium with our genuine commitment to work-life harmony.</p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-five">
                  <img src="/images/home-six/services/icon5.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Infinite Career Advancement</Link>
                </h3>
                <p>Explore boundless avenues for career progression.</p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-six">
                  <img src="/images/home-six/services/icon6.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Versatile Working Culture</Link>
                </h3>
                <p>Enjoy flexibility that respects your working style and life demands</p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="ai-all-services-btn">
                <Link href="https://jobs.satincorp.com/jobs/Careers" target="_blank" className="btn btn-primary">
                  All Job Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-services-shape">
          <img src="/images/home-six/services/shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Services;
