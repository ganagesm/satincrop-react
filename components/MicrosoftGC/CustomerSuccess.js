import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const TopFeaturedSolutions = () => {
  return (
    <>
      {/* <div className="top-featured-area pt-50 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-sm-12">
              <div style={{ textAlign: "center", }} className="top-featured-content">
                <h2>Customer Success</h2>
                <p>SAT helped a retail company implement Google Cloud's data analytics and machine learning services to
                  get insights from its customer data. The company has been able to use these insights to improve its marketing
                  campaigns and product development efforts.
                </p>
                <p>SAT helped a healthcare company develop a new cloud-native application for managing patient records.
                  The application was developed and deployed in just three months, and it has helped the company to improve its
                  operational efficiency and patient care.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ai-subscribe-area ptb-100">
        <div className="container">
          <div className="ai-subscribe-content">
            <h2>Customer Success</h2>
            <p>SAT helped a retail company implement Google Cloud's data analytics and machine learning services to
              get insights from its customer data. The company has been able to use these insights to improve its marketing
              campaigns and product development efforts.
            </p>
            <p>SAT helped a healthcare company develop a new cloud-native application for managing patient records.
              The application was developed and deployed in just three months, and it has helped the company to improve its
              operational efficiency and patient care.</p>
          </div>
        </div>

        <div className="ai-subscribe-shape">
          <img src="/images/home-six/subscribe-shape.png" alt="image" />
        </div>
      </div> */}
      <div className="webinar-area ptb-110 pt-0">
        <div className="container">
          <div className="webinar-inner">
            <div className="row m-0 align-items-center">
              <div className="col-lg-5 col-md-12 p-0">
                <div className="image">
                  <img src="/images/CustomerSuccess.jpg" alt="image" />
                </div>
              </div>

               {/* <div className="col-lg-6 col-md-12 p-0">
                <div className="content">
                  <h2>Customer Success</h2>
                  <p>SAT helped a retail company implement Google Cloud's data analytics and machine learning services to
                    get insights from its customer data. The company has been able to use these insights to improve its marketing
                    campaigns and product development efforts.
                  </p>
                  <p>SAT helped a healthcare company develop a new cloud-native application for managing patient records.
                    The application was developed and deployed in just three months, and it has helped the company to improve its
                    operational efficiency and patient care.</p>

                  <Link href="#contact" className="btn btn-primary">
                    Get Started
                  </Link>
                </div>
              </div>  */}
              <div className="col-lg-6 col-sm-12" style={{paddingLeft:"70px"}}>
              
                <Swiper
                    spaceBetween={20}
                    autoplay={{
                      delay: 900,
                      disableOnInteraction: true,
                      pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      576: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 1,
                      },
                      1200: {
                        slidesPerView: 1,
                      },
                    }}
                    modules={[Autoplay]}
                    className="ceo-slides"
                  >
                  <div className="row justify-content-center">
                    <SwiperSlide>
                      <div className="">
                        <div className="entry-post-content">
                          <p> SAT helped a retail company implement Google Cloud's data analytics and machine learning services to
                              get insights from its customer data. The company has been able to use these insights to improve its marketing
                              campaigns and product development efforts.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <div className="entry-post-content">
                          <p>SAT helped a healthcare company develop a new cloud-native application for managing patient records.
                              The application was developed and deployed in just three months, and it has helped the company to improve its
                              operational efficiency and patient care.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
                <Link href="#contact" className="btn btn-primary" style={{marginTop: "50px"}}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFeaturedSolutions;
