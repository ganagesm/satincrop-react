import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Get end-to-end consulting for Business Central with an Expert Dynamics 365 Business Central Partner  {" "}
            </h2>
             <p>As a trusted Microsoft Dynamics 365 Partner, SA Technologies handles your migration, maintenance, and integration 
              for Microsoft Business Central. Our skilled consultants maximize the potential of Microsoft Dynamics NAV. With 20+ years 
              of experience, we've aided countless users in achieving business goals through platforms like Microsoft D365 Business
               Central. </p> 
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Revitalize Financial Management</h2>
                <p>Enhance financial accuracy and reporting efficiency, ensuring compliance standards are met. </p>
                
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Automate SCM Processes</h2>
                <p>Improve visibility and control over the purchasing process within your Supply Chain Management.  </p>
                
              </div>
            </div>
         

            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="single-services-box">
                <h2>Elevate Sales Service Management </h2>
                  <p>Boost service quality and revenue opportunities through D365 Business Central's integrated functionality.</p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="single-services-box">
                <h2>Efficient Project Management  </h2>
                  <p>Ensure on-time and budget-friendly project deliverables with real-time data visibility on resources. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
              <h2>Optimize Operation Management  </h2>
                <p>Streamline both front and back-end operations for timely product delivery and cost reduction.  </p>
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
