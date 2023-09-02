import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <div className="why-choose-us-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-image text-center">
                <img src="/images/team-smile.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <h2>Technologies We Use </h2>
                <p> We are committed to using the most advanced and reliable technologies to deliver our IoT services. Our tech stack includes:  </p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h3>IoT Platforms</h3>
                      <p> AWS IoT, Azure IoT, Google Cloud IoT  </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h3>Connectivity</h3>
                      <p> Wi-Fi, Bluetooth, Zigbee, Lora WAN </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h3>AI Technologies</h3>
                      <p> Machine Learning, Natural Language Processing, Deep Learning </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h3>Data Security</h3>
                      <p> Encryption, Authentication, Access Control </p>
                    </div>
                  </div>
                </div>

                <Link href="/contact/" className="btn btn-primary">
                  More IoT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
