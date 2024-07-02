import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="startup-banner-area software-development-services-banner">
        <div className="startup-banner-inner">
          <div className="container">
            <div className="startup-banner-content">
              <h1>Software Development Services On Demand</h1>
              <p>Get the expertise you need, when you need it.</p>
              <p>
                Seamlessly Add Offshore Developers Matched to Your Needs –
                Vetted, Trained, and Fully Managed. Skip the Recruitment Hassle.{" "}
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
                      src="https://emerge.digital/wp-content/uploads/2022/06/Microsoft-Power-Platform.jpg"
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
                      src="https://bairesdev.mo.cloudinary.net/blog/2023/08/Microsoft-Dynamics-365-Consultants.jpg?tx=w_1920,q_auto"
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
                      src="https://aptronnoida.in/blog/wp-content/uploads/2020/10/get-microsoft-azure-certification.png"
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
                      src="https://i.pcmag.com/imagery/reviews/07LERcQBRVgcVKystB3aGUU-11.fit_lim.size_1050x591.v1569471957.jpg"
                      alt="image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
