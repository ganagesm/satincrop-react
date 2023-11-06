import React from "react";
import Link from "next/link";

const TopFeaturedSolutions = () => {
  return (
    <>
      {/* <div className="top-featured-area pt-50 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-sm-12">
              <div style={{ textAlign: "center", }} className="top-featured-content">
                <h2>Customer Success</h2>
                <p>SAT helped a retail company implement Google Cloud's data analytics and machine learning services to
                  get insights from its customer data. The company has been able to use these insights to improve its marketing
                  campaigns and product development efforts.
                </p>
                <p>SAT helped a healthcare company develop a new cloud-native application for managing patient records.
                  The application was developed and deployed in just three months, and it has helped the company to improve its
                  operational efficiency and patient care.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ai-subscribe-area ptb-100">
        <div className="container">
          <div className="ai-subscribe-content">
            <h2>Customer Success</h2>
            <p>SAT helped a retail company implement Google Cloud's data analytics and machine learning services to
              get insights from its customer data. The company has been able to use these insights to improve its marketing
              campaigns and product development efforts.
            </p>
            <p>SAT helped a healthcare company develop a new cloud-native application for managing patient records.
              The application was developed and deployed in just three months, and it has helped the company to improve its
              operational efficiency and patient care.</p>
          </div>
        </div>

        <div className="ai-subscribe-shape">
          <img src="/images/home-six/subscribe-shape.png" alt="image" />
        </div>
      </div> */}
      <div className="webinar-area ptb-110 pt-0">
        <div className="container">
          <div className="webinar-inner">
            <div className="row m-0 align-items-center">
              <div className="col-lg-6 col-md-12 p-0">
                <div className="image">
                  <img src="/images/webinar-img.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-6 col-md-12 p-0">
                <div className="content">
                  <h2>Customer Success</h2>
                  <p>SAT helped a retail company implement Google Cloud's data analytics and machine learning services to
                    get insights from its customer data. The company has been able to use these insights to improve its marketing
                    campaigns and product development efforts.
                  </p>
                  <p>SAT helped a healthcare company develop a new cloud-native application for managing patient records.
                    The application was developed and deployed in just three months, and it has helped the company to improve its
                    operational efficiency and patient care.</p>

                  <Link href="#contact" className="btn btn-primary">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFeaturedSolutions;
