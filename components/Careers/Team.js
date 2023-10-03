import React from "react";

const Team = () => {
  return (
    <>
      <section className="team-area ptb-50">
        <div className="container">
          <div className="section-title">
            <h2>Life at SA Tech</h2>
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
                  <img src="/images/team/team1.png" alt="Team Image" />
                </div>

                <div className="content tm_title">
                  <h3>Corporate Cricket Tournament_ SAT's Cricket Champions proving that success is a team effort</h3>
                  {/* <span>CEO & Founder</span> */}
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
                  <img src="/images/team/team2.png" alt="Team Image" />
                </div>

                <div className="content tm_title">
                  <h3>Digitize Tomorrow_ Celebrating the Launch of SAT's New Office in Bangalore!</h3>
                  {/* <span>React Developer</span> */}
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
                  <img src="/images/team/team3.png" alt="Team Image" />
                </div>

                <div className="content tm_title">
                  <h3>Global Sales Meet_ Where Global Minds and Strategies Converge at SAT's</h3>
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
                  <img src="/images/team/team4.png" alt="Team Image" />
                </div>

                <div className="content tm_title">
                  <h3>Leadership and Collaboration_ Annual Meet-up with our CEO, [Manoj Joshi], spotlighting achievements, and sculpting the path ahead!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
