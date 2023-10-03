import React from "react";

const Award = () => {
  return (
    <>
      <section className="team-area pb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Awards and Accolades</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/1.png" alt="Team Image" />
                </div>
              </div>
            </div>

            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/2.png" alt="Team Image" />
                </div>
              </div>
            </div>

            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/3.png" alt="Team Image" />
                </div>
              </div>
            </div>

            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="500"
              >
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/4.png" alt="Team Image" />
                </div>
              </div>
            </div>
            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="500"
              >
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/5.png" alt="Team Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Award;
