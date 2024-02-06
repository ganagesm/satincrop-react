import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>One Stop Power BI Solution {" "}
            </h2>
             <p>We make our Power BI consulting Company unique, by involving specifically crafted methodologies that adapt well 
              to your needs and demands. Our customized module developments and the ability to integrate a huge volume of data 
              from internal as well as external sources makes us one of the best Power BI consulting service providers for Microsoft 
              Power BI Solutions. </p> 
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Power BI Desktop</h2>
                <p>Our industry experts offer you a personalized solution after doing a comprehensive assessment of your unique business needs</p>
                
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Power BI Mobile</h2>
                <p>We deploy on-demand certified Cloud Specialists to help you meet your strategic goals & respond quickly to the 
                  market needs</p>
                
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
              <h2>Power BI Premium </h2>
                <p>We ensure a seamless business transformation by helping you implement exclusively tailored strategies that mitigate risk</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
              <h2>Power BI Embedded </h2>
                <p>We analyze your current technology and process maturity to devise a customized integration approach that addresses all your requirements. </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
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
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default Services;
