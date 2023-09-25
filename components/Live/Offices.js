import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area pt-50">
        <div className="container">
          <div className="section-title">
            <h2>Global Development Centers</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <img
                  src="/images/location.svg"
                  alt="image"
                  style={{
                    width: "15%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3>
                  California
                </h3>
                <p>
                  3031 Tisch Way, 110 Plaza West, San Jose, CA 95128
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <img
                  src="/images/location.svg"
                  alt="image"
                  style={{
                    width: "15%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3>
                  Canada
                </h3>
                <p>
                  552A Clarke Road, Suite 299, Coquitlam BC V3J 0A3
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <img
                  src="/images/location.svg"
                  alt="image"
                  style={{
                    width: "15%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3>
                  Singapore
                </h3>
                <p>
                  #05-03 Plus, 20 Cecil Street,
                  Singapore 049705
                </p>
                {/* <p>Phone: <a href="tel:080 4375 1188">080 4375 1188</a></p> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <img
                  src="/images/location.svg"
                  alt="image"
                  style={{
                    width: "15%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3>
                  Pune
                </h3>
                <p>
                  Solitaire Business Hub,
                  D-6030, Clover Park,
                  Viman Nagar, Pune,
                  Maharashtra 411014
                </p>

              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <img
                  src="/images/location.svg"
                  alt="image"
                  style={{
                    width: "15%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3>
                  Bangalore
                </h3>
                <p>
                613/A, 2nd Floor,15th Cross Ring Road, 
                33rd Main, J P nagar 1st Phase, 
                Bangalore – 560078
                </p>

              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <img
                  src="/images/location.svg"
                  alt="image"
                  style={{
                    width: "15%",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                />
                <h3>
                  Indore
                </h3>
                <p>
                  Awfis Office,
                  Winway World Offices Plot No. B-7,
                  Vijay Nagar, Indore, Madhya Pradesh, 452 010. India
                </p>
                {/* <p>Phone: <a href="tel:080 4375 1188">080 4375 1188</a></p> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
