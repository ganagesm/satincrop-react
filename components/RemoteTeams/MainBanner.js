import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="startup-banner-area software-development-services-banner">
        <div className="startup-banner-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="startup-banner-content">
                  <h1>Software Development Services On Demand</h1>
                  <p>Get the expertise you need, when you need it.</p>
                  <p>
                    Seamlessly Add Offshore Developers Matched to Your Needs –
                    Vetted, Trained, and Fully Managed. Skip the Recruitment
                    Hassle.{" "}
                  </p>
                  <div
                    className="customers-partner-list"
                    style={{ marginTop: "20px" }}>
                    <div
                      className="partner-item"
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      data-aos-delay="100">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        rel="noreferrer">
                        <img
                          src="../images/software-development-services-on-demand/microsoft-power-platform-sd.jpg"
                          alt="image"
                        />
                      </a>
                    </div>

                    <div
                      className="partner-item"
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      data-aos-delay="200">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        rel="noreferrer">
                        <img
                          src="../images/software-development-services-on-demand/microsoft-dynamics-365-consultants-sd.jpg"
                          alt="image"
                        />
                      </a>
                    </div>

                    <div
                      className="partner-item"
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      data-aos-delay="300">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        rel="noreferrer">
                        <img
                          src="../images/software-development-services-on-demand/get-microsoft-azure-certification-sd.jpg"
                          alt="image"
                        />
                      </a>
                    </div>

                    <div
                      className="partner-item"
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      data-aos-delay="400">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        rel="noreferrer">
                        <img
                          src="../images/software-development-services-on-demand/sharepoint-sd.jpg"
                          alt="image"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6">
                <iframe
                  id="cotactForm"
                  width="480px"
                  height="550px"
                  src="https://crm.zoho.in/crm/WebFormServeServlet?rid=585ce290f2f8fba70f1e60e288502a6b825968003543681807317825a28e87e4f89a9f71ee36f4763a3e36de147e8f29gid1cfb6ade00e4faa14a372f4c1269614bacbc5616587cec4eff07651ff1446da3"></iframe>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
