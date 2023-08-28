import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const TechSlider = () => {
  return (
    <>
      <div className="partner-section ptb-110">
        <div className="container">
          <Swiper
            spaceBetween={0}
            autoplay={{
              delay: 900,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay]}
            className="partner-slides"
          >
            <SwiperSlide>
            <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  Node Js
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  Java
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/react/" target="_blank" rel="noreferrer">
                  React
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/net/" target="_blank" rel="noreferrer">
                  .NET
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="./python/" target="_blank" rel="noreferrer">
                  Python
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/c-sharp/" target="_blank" rel="noreferrer">
                  C#
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/rails/" target="_blank" rel="noreferrer">
                  Rails
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/angular/" target="_blank" rel="noreferrer">
                Angular
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                PHP
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/android/" target="_blank" rel="noreferrer">
                Android
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                iOS
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/" target="_blank" rel="noreferrer">
                Golang
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/" target="_blank" rel="noreferrer">
                Vue.js
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                C++
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                JavaScript
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                Swift
                </a>
              </div>
            </SwiperSlide>
            
          </Swiper>

          <Swiper
            spaceBetween={0}
            autoplay={{
              delay: 1200,
              loop: true,
              speed:300,
              loopPreventsSliding: true,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
              reverseDirection:true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay]}
            className="partner-slides"
          >
            <SwiperSlide>
            <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  Node Js
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                  Java
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/react/" target="_blank" rel="noreferrer">
                  React
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/net/" target="_blank" rel="noreferrer">
                  .NET
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/python/" target="_blank" rel="noreferrer">
                  Python
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/c-sharp/" target="_blank" rel="noreferrer">
                  C#
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/rails/" target="_blank" rel="noreferrer">
                  Rails
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/angular/" target="_blank" rel="noreferrer">
                Angular
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                PHP
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="/android/" target="_blank" rel="noreferrer">
                Android
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                iOS
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                Golang
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                Vue.js
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                C++
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                JavaScript
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="" target="_blank" rel="noreferrer">
                Swift
                </a>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>

        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
      </div>
    </>
  );
};

export default TechSlider;
