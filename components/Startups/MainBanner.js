// import React from "react";
import { useEffect, useRef } from "react";
import Link from "next/link";

const MainBanner = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: ["Projects Managers.", "Developers.", "Architects."],
        typeSpeed: 50,
        loop: true,
      };
      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      <div className="banner-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200">
                  Quickly build skilled remote engineering teams
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="300">
                  <strong>
                    Hire{" "}
                    <span style={{ color: "#ff4800" }} ref={typedRef}></span>
                  </strong>
                  {/* Typed.js will type here */}
                </p>
                <p
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                  style={{ marginTop: "0" }}>
                  So you can focus on hitting your business goals.
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="400">
                  <Link href="#contact-support" className="btn btn-primary">
                    Get a Quick call
                  </Link>
                  {/* <Link href="/contact" className="optional-btn">
                    Get Started Free
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="banner-image">
                <img src="/images/banner-2/banner-2-shape1.png" alt="image" />

                <img
                  src="/images/banner-2/banner-2-shape2.png"
                  className="animate__animated animate__fadeIn animate__delay-0.1s"
                  alt="image"
                />

                <img
                  src="/images/banner-2/banner-2-shape3.png"
                  className="animate__animated animate__fadeInUp animate__delay-0.1s"
                  alt="image"
                />

                <img
                  src="/images/banner-2/banner-2-shape4.png"
                  className="animate__animated animate__fadeInLeft animate__delay-0.1s"
                  alt="image"
                />

                <img
                  src="/images/banner-2/banner-2-shape5.png"
                  className="animate__animated animate__fadeInLeft animate__delay-0.1s"
                  alt="image"
                />

                <img
                  src="/images/banner-2/banner-2-shape6.png"
                  className="animate__animated animate__fadeInUp animate__delay-0.1s"
                  alt="image"
                />

                <img
                  src="/images/banner-2/banner-2-shape7.png"
                  className="animate__animated animate__fadeIn animate__delay-0.1s"
                  alt="image"
                />

                <img
                  src="/images/banner-2/banner-2-shape8.png"
                  className="animate__animated animate__fadeInDown animate__delay-0.1s"
                  alt="image"
                />

                <img
                  src="/images/banner-image.png"
                  className="main-pic animate__animated animate__fadeInUp animate__delay-0.1s"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
