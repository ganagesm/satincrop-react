import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Make smarter decisions. Take actions that drive your business.{" "}
            </h2>
            {/* <h4>for building robust and scalable web applications</h4> */}
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Sales</h2>
                <p>
                   With Dynamics 365 Sales, now’s the right time to meet today’s challenges by 
                    bringing your customers and business together and aligning sales & marketing
                    with the next generation of CRM and ERP applications.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Marketing</h2>
                <p>
                    Personalize the buyer experiences, build more rewarding business relationships, strengthen your marketing capabilities, 
                        and expand your sales opportunities with Microsoft Dynamics 365 Marketing. 
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Customer Service</h2>
                <p>
                  Earn customers for life, build brand affinity and customer loyalty with Dynamics 
                  365 Customer Service. Empower your teams with the streamlined data and 
                  unified technology to deliver seamless, personalized experiences. 
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Supply Chain </h2>
                <p>
                  {" "}
                       Move from reactive to proactive operations and build an agile, connected, and 
                        resilient supply chain with Dynamics 365 Supply Chain. Streamline planning, production, 
                        inventory, and transportation to maximize operational efficiency.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Field Service</h2>
                <p>Deliver effective onsite services to customer locations and be prepared for onsite help with 
                    Dynamics 365 Field Service. Combine workflow automation, scheduling algorithms, and mobility 
                    to ensure dependable solutions.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Projects Service Automation</h2>
                <p>
                      Offer excellent project experiences to profit from your projects and build trusted customer 
                        relationships. With Dynamics 365 Project Service Automation, deliver projects on time and within 
                        budget while boosting employee productivity.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Microsoft Dynamics 365 AI </h2>
                <p>
                  Utilize AI-driven insights to make better decisions and improve user experience with 
                  Microsoft Dynamics 365 AI. Attune to market conditions and evolving customer requirements
                  with easily adjustable AI functionality.  
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Financial Service</h2>
                <p>
                Maximize financial visibility and profitability, automate & modernize global financial operations with 
                        Microsoft Dynamics 365 for Financial Services. Monitor performance in real-time and make data-driven 
                        decisions to drive business growth.
                </p>
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
