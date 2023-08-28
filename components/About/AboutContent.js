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
                <p> Welcome to TrioSource! We are a leading technology company specializing in innovative software solutions for businesses in various industries. With a passion for delivering excellence, our team of talented engineers and developers is dedicated to creating cutting-edge products that empower organizations to thrive in the digital age. At TrioSource, we combine our technical expertise with a deep understanding of our clients' needs to develop tailored solutions that drive growth, efficiency, and customer satisfaction. Join us on this exciting journey as we transform businesses through technology. </p>
                <p> TrioSource is built on the foundation of innovation and collaboration. Our story began with a group of visionary entrepreneurs who recognized the potential of technology to revolutionize the way businesses operate. Since our inception, we have been committed to delivering exceptional software solutions that empower our clients to stay ahead in a rapidly changing landscape. With a diverse team of industry experts and thought leaders, we bring together the best minds to develop robust, scalable, and user-friendly applications. Join us as we harness the power of technology to shape a brighter future for businesses around the world.</p>
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
