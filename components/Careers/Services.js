import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="ai-services-area pt-100 pb-100" style={{marginBottom:"50px;",}}>
        <div className="container">
          <div className="section-title with-underline-text">
             {/*<h2>Our Services for Today's Digital Landscape</h2>
             <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. A ac, ut
              eget pellentesque nulla viverr.
            </p> */}
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
                <p>Embark on a continuous learning journey with us. We're committed to fostering a culture of professional growth and skill enhancement. </p>

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
                  <Link href="/service-details">Fun Environment</Link>
                </h3>
                <p>Work doesn’t have to be all serious. Dive into a lively workspace that values creativity, camaraderie, and a touch of fun.</p>
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
                  <Link href="/service-details">Employee Health Care</Link>
                </h3>
                <p>Your well-being is paramount. Benefit from top-tier health care options that ensure you're always at your best.</p>
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
                  <Link href="/service-details">Work-Life Balance</Link>
                </h3>
                <p>We understand the importance of personal time. Experience a workplace that respects boundaries and promotes a harmonious balance between work and leisure.</p>
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
                  <Link href="/service-details">Limitless Career Growth</Link>
                </h3>
                <p>
                  With us, the sky's the limit. Seize opportunities that pave the way for unparalleled career progression.</p>
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
                  <Link href="/service-details">Flexible Working</Link>
                </h3>
                <p>
Adaptability is key. Enjoy the freedom to tailor your work hours and environment to best suit your needs and preferences. 
                </p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            {/* <div className="col-lg-12 col-md-12">
              <div className="ai-all-services-btn">
                <Link href="/services" className="btn btn-primary">
                  View All Services
                </Link>
              </div>
            </div> */}
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
