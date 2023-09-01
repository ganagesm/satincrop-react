import React from "react";

const AboutContact = () => {
  return (
    <>
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about/about1.jpg" alt="image" />
                <img src="/images/about/about2.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2>Engaging New Audiences Through Smart Approach</h2>
                <p> With SA Technologies, propel forward on your digital and AI-driven journey under the aegis of our expert guidance, made possible by our diverse onshore, nearshore, and offshore teams. Our global perspective, combined with deep AI expertise, ensures a holistic approach to digital solutions tailored just for you.</p>
                <p>Stay abreast with invaluable insights from our seasoned AI and tech experts. These insights not only enlighten but empower, ensuring you maintain a significant competitive edge in the ever-evolving digital and AI terrain. Delve deeper into the latest trends, strategies, and groundbreaking advancements in AI that hold the potential to redefine and elevate your business. With SA Technologies by your side, you're not just reacting to the digital and AI age - you're shaping it.</p>
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                  We have over 2 decades of experience in the IT consulting and staffing industry. We began focusing on outsourcing development to India, and have since helped 100+ companies in the US and Canada achieve digital transformations, launch new products, and recruit globally.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                  We help companies solve their most crucial problem: hiring and staffing. We find world class people in any time zone, with any expertise, and at many price points.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="about-text">
                  <h3>Who we are</h3>
                  <p>
                  We are a globally distributed team with offices in California, New York, India and Mexico. We collectively bring expertise in outsourcing, nearshoring, machine learning infrastructure, startups, enterprise, Flutter/Android/React Native/iOS/Ionic development, engineering management, Kubernetes and privately hosted LLMs. If you can name it, one of us has probably done it.
                  </p>
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

export default AboutContact;
