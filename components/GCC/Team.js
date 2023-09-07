import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area pb-110">
        <div className="container">
          <div className="section-title">
            <h2>Meet our GCC Team</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="">
                <div className="">
                  <img src="/images/team/abhay.jpg" alt="image"/>
                </div>
                <h5
                style={{
                  marginTop: "15px",
                }}>Abhay Bhan</h5>
                <p>Director Client Engagement <br /> (Europe)</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="">
                <div className="">
                  <img src="/images/team/kanak.jpg" alt="image"/>
                </div>
                <h5
                style={{
                  marginTop: "15px",
                }}>Kanak Sahoo</h5>
                <p>Marketing Manager</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="">
                <div className="">
                  <img src="/images/team/sudha.jpg" alt="image"/>
                </div>
                <h5
                style={{
                  marginTop: "15px",
                }}>Vasudha Kanade</h5>
                <p>Direct FInance</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="">
                <div className="">
                  <img src="/images/team/amita.jpg" alt="image"/>
                </div>
                <h5
                style={{
                  marginTop: "15px",
                }}>Amita Bhosale</h5>
                <p>Director Client Engagement <br /> (North America) </p>
              </div>
            </div>
            

          </div>

        </div>

        <div className="GCCJourney">
          <div className="container">
          <div className="row ptb-100 align-items-center">
            <div className="col-lg-6 col-md-6">
              <h2 className="align-items-center"
              style={{
                textAlign: "right",
               }} 
              >Ready to Begin Your GCC Journey?</h2>
            </div>
            <div className="col-lg-5 col-md-5"
              style={{
               textAlign: "left",
              }} 
            >
              <Link href="#contact" className="btn btn-primary">
                Contact Us
              </Link>
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
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default Services;
