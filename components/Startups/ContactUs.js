import React, { useState } from "react";
import Link from "next/link";

const DomainSearch = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <section className="contactPageSupport bg-f2f6f9 pt-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>Contact Us</h2>
            <h4 style={{ marginTop: "20px" }}>
              Simplifying Your Reach: Expert Help Just a Click Away.
            </h4>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-3">
              <div className="services-area">
                <div className="single-services-box">
                  <div className="icon">
                    <img
                      src="/images/icons/indusrty-icon/calender-sa.jpg"
                      alt="image"
                      style={{
                        width: "50%",
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                    />
                  </div>
                  <h2 style={{ margin: "20px 0" }}>Book a meeting</h2>
                  <div className="btn-box" style={{ marginTop: "30px" }}>
                    <Link
                      href="https://crm.zoho.in/bookings/15minutesmeeting?rid=83ae67e835471568d742ef9582b4ef33b8f36dd0fb7cdebd602c8c357a84e3008ff2bddb5ab17b32e4f832c99492f2efgide6130e6203d90c8a72b192686e28ff7b9451257b4d55de887183f3d06b9d34a1"
                      className="btn btn-primary">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="services-area">
                <div className="single-services-box">
                  <div className="icon">
                    <img
                      src="/images/icons/indusrty-icon/chat.png"
                      alt="image"
                      style={{
                        width: "70%",
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                    />
                  </div>
                  <h2 style={{ margin: "10px 0" }}>Chat with us</h2>
                  <p>
                    Get expert IT advice now. Chat with our specialists for
                    solutions and guidance
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="services-area">
                <div className="single-services-box">
                  <div className="icon">
                    <img
                      src="/images/icons/indusrty-icon/Whatsapp-icon.png"
                      alt="image"
                      style={{
                        width: "70%",
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                    />
                  </div>
                  <h2 style={{ margin: "11px 0" }}>Chat with WhatsApp</h2>
                  <div className="btn-box" style={{ marginTop: "10px" }}>
                    <a
                      href="https://api.whatsapp.com/send/?phone=%2B9107058188896&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?"
                      className="btn btn-primary"
                      style={{
                        width: "15%",
                        padding: "7px",
                        borderRadius: "50%",
                      }}>
                      <img
                        src="/images/icons/indusrty-icon/Whatsapp-icon-1.png"
                        alt="image"
                        style={{
                          textAlign: "center",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="services-area">
                <div className="single-services-box">
                  <div className="icon">
                    <img
                      src="/images/icons/indusrty-icon/call.png"
                      alt="image"
                      style={{
                        width: "50%",
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                    />
                  </div>
                  <h2 style={{ margin: "34px 0" }}>Call us now India</h2>
                  <h3 style={{ marginTop: "40px" }}>
                    {/* <a
                      href="https://api.whatsapp.com/send/?phone=%2B9107058188896&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?"
                      style={{ textDecoration: "2px dashed underline" }}>
                      +91 7058222899
                    </a> */}
                    <a
                      href="tel:(+91) -7058222899"
                      style={{ textDecoration: "2px dashed underline" }}>
                      +91 7058222899
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DomainSearch;
