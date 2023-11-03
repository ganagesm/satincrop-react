import React from "react";
import Link from "next/link";

const TopFeaturedSolutions = () => {
  return (
    <>
      <div className="top-featured-area pt-50 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-sm-12">
              <div style={{textAlign:"center",}} className="top-featured-content">
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
    </>
  );
};

export default TopFeaturedSolutions;
