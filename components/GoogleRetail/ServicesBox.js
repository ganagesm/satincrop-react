import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area bg-f2f6f9 pt-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>Services Tailored for Retail</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Omnichannel Experience </h3>
                <p>
                  Create seamless shopping experiences across all platforms with
                  Google Cloud's retail solutions, enhancing customer
                  satisfaction and loyalty.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Customer Insights & Personalization</h3>
                <p>
                  Leverage Google Analytics and AI to gain deep customer
                  insights, enabling personalized marketing and shopping
                  experiences.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3> Efficient Supply Chain Management</h3>
                <p>
                  Utilize Google Cloud's AI and machine learning to streamline
                  your supply chain, improving efficiency and reducing costs.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Retail Data Analytics </h3>
                <p>
                  Harness the power of BigQuery for real-time data analysis,
                  helping you make informed decisions to drive sales and
                  profitability.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>E-commerce Optimization </h3>
                <p>
                  Enhance your online store's performance with Google's AI and
                  machine learning, improving search functionality,
                  recommendations, and customer service.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Digital Marketing Solutions</h3>
                <p>
                  Use Google Ads and Google Marketing Platform to reach your
                  target audience more effectively, increasing brand visibility
                  and driving sales.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <h3>Workplace Collaboration</h3>
                <p>
                  Foster a collaborative work environment with Google Workspace,
                  improving communication and productivity among your team
                  members.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-md-12">
          <div className="ai-all-services-btn ptb-50">
            <Link href="/contact-us/" className="btn btn-primary">
              Contact Us
            </Link>
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
