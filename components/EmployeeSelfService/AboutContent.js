import React from "react";

const AboutContact = () => {
  return (
    <>
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about/emp_3.jpg" alt="image" />
                <img src="/images/about/emp_4.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2>Engaging Employees  Through a Smart Approach</h2>
                <p>We're here to empower you with the information and assistance you need, from the moment you join our 
                  team to well beyond your departure. Whether you're a new recruit or a former colleague, we've got you covered
                </p>

                <h5>Key Features:</h5>
                <ul className="about-list emp_list">
                  <li>
                    <i className="fa-solid fa-check"></i> <b>Live Chat Support :</b> Have questions? Our team is just a message away.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <b>HR Resources :</b>  Access policies, forms, and benefits info.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <b>Frequently Asked Questions :</b>  Find quick answers to common queries.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <b>Onboarding : </b>  New hires, start your journey here.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <b>Offboarding : </b> Helpful resources for those moving on.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
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
        <div className="shape-img6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default AboutContact;
