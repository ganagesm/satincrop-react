import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3> Artificial Intelligence and Machine Learning: </h3>
              <p> Building Smart Businesses. Make your business intelligent, self-reliant and automated with artificial Intelligence and serve business-specific solutions to your customers. </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/banners/ai-banner-2.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-image">
              <img
                src="/images/banners/ai-banner-3.png"
                alt="image"
              />
            </div>
            <div className="services-details-desc mb-30">
              <h3> Our Machine Learning Development Services   </h3>
              <ul>
                <li> <strong>Predictive Analytics: </strong> Leverage our predictive analytics models to anticipate trends, forecast demands, and optimize business strategies for better outcomes. 
                </li>
                <li>
                  <strong>Natural Language Processing (NLP): </strong> Our NLP solutions enable computers to understand, interpret, and generate human language, enhancing communication and enabling intelligent interactions. 
                </li>
                <li>
                  <strong>Image and Video Recognition: </strong> Unlock the potential of image and video data with our advanced recognition models, allowing for automated classification and analysis. 
                </li>
                <li>
                  <strong>Recommendation Systems:</strong> Our recommendation systems provide personalized suggestions to users, enhancing customer experiences and increasing engagement. 
                </li>
                <li>
                  <strong>Anomaly Detection: </strong> Identify anomalies and irregularities in your data with our anomaly detection models, ensuring quick identification and resolution of issues. 
                </li>
              </ul>
              <p></p>
              <Link href="/contact/" className="btn btn-primary mt-20">
                Know More
              </Link>
            </div>


          </div>
        </div>
      </div> */}
    </>
  );
};

export default ServiceDetailsContent;
