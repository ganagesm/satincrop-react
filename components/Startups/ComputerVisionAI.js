import React from "react";
import Link from "next/link";

const ComputerVisionAI = () => {
  return (
    <>
      {/* <div className="about-area pt-100 ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-content about-content aos-init aos-animate">
                <h3>Your Remote engineering teams in India</h3>
                <p className="p8">
                  The USA is in a tech talent shortage crisis and unfortunately,
                  there is no improvement to immigration policies in the
                  foreseeable future. India has become a highly sought-after
                  country for building remote engineering teams for start-ups as
                  well as large corporations. Remote engineering teams have
                  turned out to be a strategic necessity for every organization
                  and India is the obvious choice for multiple years.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-content">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="content">
                        <div className="image-icon">
                          <img
                            src="/images/home-six/computer-vision/icon1.png"
                            alt="icon"
                          />
                        </div>
                        <h4>Great pricing options</h4>
                      </div>
                      <p>
                        Flexible pricing options are one of the main reasons
                        most of the partners are delivering projects from India
                        and USA.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="content">
                        <div className="image-icon">
                          <img
                            src="/images/home-six/computer-vision/icon2.png"
                            alt="icon"
                          />
                        </div>
                        <h4>Time zone difference</h4>
                      </div>
                      <p>
                        The advantage of time zone difference is that work gets
                        done way earlier than the deadline. Besides it provides
                        the benefit of fast turn-around time. In short, this
                        gives a quicker time to market offering an edge to the
                        firm in this competitive world.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="content">
                        <div className="image-icon">
                          <img
                            src="/images/home-six/computer-vision/icon3.png"
                            alt="icon"
                          />
                        </div>
                        <h4>Quality</h4>
                      </div>
                      <p>
                        India is no more a destination considered to be an
                        offload non-business critical projects and budget
                        rationalization. With the progress of its technical
                        talent, India has achieved a status of delivering
                        top-notch high-quality work. A lot of American and
                        European companies have started trusting Indian Partners
                        and Vendors for their superior performances.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <section className="about-area pt-100 bg-f2f6f9">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="about-content">
                <h2>Your Remote engineering teams in India</h2>
                <p>
                  The USA is in a tech talent shortage crisis and unfortunately,
                  there is no improvement to immigration policies in the
                  foreseeable future. India has become a highly sought-after
                  country for building remote engineering teams for start-ups as
                  well as large corporations. Remote engineering teams have
                  turned out to be a strategic necessity for every organization
                  and India is the obvious choice for multiple years.
                </p>

                <Link href="#contact-support" className="btn btn-primary">
                  Discover More
                </Link>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="row justify-content-center services-area">
                <div className="col-lg-4 col-sm-6">
                  <div className="single-services-box">
                    <div className="content">
                      <div className="image-icon">
                        <img
                          src="/images/icon-26.svg"
                          alt="icon"
                          style={{ width: "60px" }}
                        />
                      </div>
                      <h4>Great pricing options</h4>
                    </div>
                    <p>
                      Flexible pricing options are one of the main reasons most
                      of the partners are delivering projects from India and
                      USA.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="single-services-box">
                    <div className="content">
                      <div className="image-icon">
                        <img
                          src="/images/icon-25.svg"
                          alt="icon"
                          style={{ width: "60px" }}
                        />
                      </div>
                      <h4>Time zone difference</h4>
                    </div>
                    <p>
                      The advantage of time zone difference is that work gets
                      done way earlier than the deadline. Besides it provides
                      the benefit of fast turn-around time. In short, this gives
                      a quicker time to market offering an edge to the firm in
                      this competitive world.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="single-services-box">
                    <div className="content">
                      <div className="image-icon">
                        <img
                          src="/images/icon-27.svg"
                          alt="icon"
                          style={{ width: "60px" }}
                        />
                      </div>
                      <h4>Quality</h4>
                    </div>
                    <p>
                      India is no more a destination considered to be an offload
                      non-business critical projects and budget rationalization.
                      With the progress of its technical talent, India has
                      achieved a status of delivering top-notch high-quality
                      work. A lot of American and European companies have
                      started trusting Indian Partners and Vendors for their
                      superior performances.
                    </p>
                  </div>
                </div>
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

export default ComputerVisionAI;
