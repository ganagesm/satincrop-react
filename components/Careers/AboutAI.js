import React from "react";
import Link from "next/link";

const AboutAI = () => {
  return (
    <>
      <div className="ai-about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ai-about-image">
                <img src="/images/home-six/about.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h3>Benefits</h3>
                 <p>
                 At SAT, we prioritize the well-being and growth of our team members. Our suite of benefits is meticulously crafted
                 to cater to our employees' diverse needs. Taking a step beyond the conventional open-door policy, we've introduced 
                 an open floor policy. This approach underscores our commitment to creating a work culture that champions initiative 
                 and provides an inclusive space for development and dialogue. Join us, and experience a workplace that truly listens
                  and empowers.
                </p>

                {/* <ul className="about-list">
                  <li>
                    <i className="fa-solid fa-check"></i> Are you facing difficulties integrating technology effectively into your teaching methods and administrative processes?
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> How do you ensure the security of student and staff data in an increasingly digital environment? 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> What challenges have you encountered while shifting to remote learning, and how are you ensuring seamless education delivery?
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> How do you manage technology assets and maintain a standardized IT framework across different campuses or locations? 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> How do you protect sensitive student and institutional data from cyber threats and attacks?
                  </li>
                </ul> */}
                <div className="others-options" style={{marginTop:"40px",}}>
                  <Link href="https://jobs.satincorp.com/jobs/Careers" target="_blank" className="btn btn-primary">
                  Discover Your Next Role
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

export default AboutAI;
