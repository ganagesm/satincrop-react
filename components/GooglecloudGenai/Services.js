import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Unlocking AI Across Industries  {" "}
            </h2>
            {/* <h4>for building robust and scalable web applications</h4> */}
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Retail</h2>
                <p>Ensure customer data confidentiality for a secure shopping experience.</p>

                <p>Safeguard transactions and sensitive customer information.</p>

                <p>Personalized shopping experiences powered by AI. </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Healthcare </h2>
                <p>Protect patient data and uphold confidentiality in medical records.</p>

                <p>Implement robust data security for sensitive health information.</p>

                <p>Drive precision medicine and predictive analytics with AI. </p>
              </div>
            </div>

            

          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Startups</h2>
                <p>Safeguard proprietary data and intellectual property with AI.</p>

                <p>Ensure secure handling of startup and client information.</p>

                <p>Foster innovation with AI-driven products and services.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>AI Companies</h2>
                <p>Uphold data privacy standards for AI model training in AI companies.</p>

                <p>Safeguard proprietary algorithms and datasets with advanced data security.</p>

                <p>Drive advanced AI research and development with cutting-edge technology.</p>
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
