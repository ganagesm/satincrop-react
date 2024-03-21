import React from "react";
import Link from "next/link";

const TopFeaturedSolutions = () => {
  return (
    <>
      <section className="about-area ptb-50">
        <div className="container">
          <section className="section-enterprise section-enterprise_new">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <h4 className="office-enterprise_new">
                    Why SA Technologies?
                  </h4>
                  <p style={{ textAlign: "center" }}>SAT is a trusted Google Cloud partner that can help you get the most out of Google Cloud solutions. Here are just a few of the reasons why you should choose SA Technologies as your Google Cloud partner.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-30">
                  <div className="main-business text-center">
                    <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-tag.svg" />
                    <h3>Rapid implementation</h3>
                    <h5>
                      SA Technologies has a proven track record of success in
                      helping customers quickly implement Google Cloud solutions.
                      They understand the unique challenges that businesses face,
                      and they work closely with their customers to develop a
                      customized implementation plan that meets their specific
                      needs.
                    </h5>
                  </div>
                </div>
                <div className="col-md-4 mb-30">
                  <div className="main-business text-center">
                    <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/settings.svg" />
                    <h3>Expertise</h3>
                    <h5>
                      SA Technologies' team of Google Cloud certified engineers
                      has the expertise and experience to help businesses get the
                      most out of Google Cloud solutions. They can help businesses
                      choose the right solutions for their needs, and they can
                      help them implement and manage those solutions effectively.
                    </h5>
                  </div>
                </div>
                <div className="col-md-4 mb-30">
                  <div className="main-business text-center">
                    <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/file-sharing.svg" />
                    <h3>Support</h3>
                    <h5>
                      SA Technologies provides comprehensive support to their
                      customers throughout the implementation process and beyond.
                      They offer a variety of support options, including training,
                      consulting, and 24/7 technical support.
                    </h5>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-30">
                  <div className="main-business text-center">
                    <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/settings.svg" />
                    <h3>Free Technical Assessmen</h3>
                    <h5>
                      Get started with a complimentary evaluation to align GCP solutions with your business needs, laying a solid foundation for your cloud strategy.
                    </h5>
                  </div>
                </div>
                <div className="col-md-4 mb-30">
                  <div className="main-business text-center">
                    <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/file-sharing.svg" />
                    <h3>On-Demand Support</h3>
                    <h5>
                      Access 24/7 expert support to tackle any technical challenge or query, ensuring your GCP journey is smooth and uninterrupted
                    </h5>
                  </div>
                </div>
                <div className="col-md-4 mb-30">
                  <div className="main-business text-center">
                    <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/online-support.svg" />
                    <h3>Lift and Shift by Expert</h3>
                    <h5>
                      Migrate with ease using our expert "Lift and Shift" service, designed for a hassle-free transition to GCP, focusing on security and efficiency.
                    </h5>
                  </div>
                </div>
              </div>

            </div>
          </section>


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

export default TopFeaturedSolutions;
