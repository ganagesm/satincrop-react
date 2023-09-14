import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="ai-services-area pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>Our Services Aligned with Modern Demands</h2>
            {/* <p>
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
                  <Link href="/service-details">Mobile App Development</Link>
                </h3>
                <p> Create user-friendly mobile apps for seamless shopping experiences, loyalty programs, and personalized offers to engage customers and drive sales. </p>

                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-two">
                  <img src="/images/home-six/services/icon2.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Software Development</Link>
                </h3>
                <p>Develop custom software solutions to optimize inventory management, point-of-sale systems, and customer relationship management, enhancing overall efficiency. 
                </p>
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
                  <Link href="/service-details">Cloud Solutions</Link>
                </h3>
                <p> Implement secure and scalable cloud platforms for storing and analyzing customer data, enabling real-time insights and data-driven decision-making.  
                </p>
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
                  <Link href="/service-details">AI and Machine Learning</Link>
                </h3>
                <p>Utilize AI-powered solutions for demand forecasting, personalized product recommendations, and customer behavior analysis to enhance customer satisfaction and sales. </p>
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
                  <Link href="/service-details">Robotic Process Automation (RPA)</Link>
                </h3>
                <p>Automate repetitive tasks such as inventory updates, order processing, and customer inquiries, reducing errors and improving operational efficiency. 
                </p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-three">
                  <img src="/images/home-six/services/icon3.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Software Testing</Link>
                </h3>
                <p>Ensure the reliability of your e-commerce platforms and applications through rigorous testing, enhancing user experience and trust. 
                </p>
                {/* <Link href="/service-details" className="read-btn">
                  Read More
                </Link> */}
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-three">
                  <img src="/images/home-six/services/icon3.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">Software Development</Link>
                </h3>
                <p>Streamline production workflows by developing customized software solutions for content management, scheduling, collaboration, and distribution.
                </p>
               
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
