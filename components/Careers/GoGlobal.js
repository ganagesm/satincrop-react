import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const AboutAI = () => {
  return (
    <>
      <div className="ai-about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="offset-md-2 col-lg-8 col-md-12">
              <div className="c_img">
                <a href="" target="_blank" rel="noreferrer">
                  <img src="../images/technology-banner/career.png" alt="image" />
                </a>
                <h2 style={{ marginTop: "20px", textAlign: "center", }}>Seize global career opportunities with us and make a worldwide impact on an international stage!</h2>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAI;
