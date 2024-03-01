import React from "react";
import Head from "next/head";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
// import ContactFormContent from "../components/Contact/ContactFormContent";
import ContactFormContent from "../components/Common/ContactFormContent";
import Services from "../components/Contact/Services";
import Footer from "../components/Live/Footer";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Head>
        <title>
          Get in Touch with SA Technologies Experts | Contact Us Today{" "}
        </title>
        <meta
          property="og:title"
          content="Get in Touch with SA Technologies Experts | Contact Us Today"
          key="title"
        />
        <meta
          name="description"
          content="Have questions or need assistance? Contact SA Technologies today. We're here to help you achieve your business goals."
          key="description"
        />
      </Head>

      <Navbar />
      {/* <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        bgImgClass="item-bg12"
      /> */}

      <section className="contactPageSupport bg-f2f6f9 pt-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>Contact Us</h2>
            <h4>Simplifying Your Reach: Expert Help Just a Click Away.</h4>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-4">
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
                  {/* <p>I want to embedded the calednar , i have that link with me</p> */}
                  <div className="btn-box" style={{ marginTop: "30px" }}>
                    <Link
                      href="https://crm.zoho.in/bookings/SATSalesEnquiry?rid=ad19505fc0fd044928994f6b9427e66a78adbea582c167ab0e0f6c23274a7d6e92069362e3822d4f29f5d26f9f4ad1dfgidb0bab5a1325aa8bda564fcc494c02b6a4c40baac422d6924adb73c40710a0b7a"
                      className="btn btn-primary">
                      Book Now
                    </Link>
                  </div>
                </div >
              </div >
            </div >

            <div className="col-sm-4">
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
                  <h2 style={{ margin: "20px 0" }}>Chat with us</h2>
                  <p>
                    Get expert IT advice now. Chat with our specialists for
                    solutions and guidance
                  </p>
                  {/* <div className="btn-box" style={{ marginTop: "30px" }}>
                    <Link href="/contact-us/" className="btn btn-primary">
                      Chat Now!
                    </Link>
                  </div> */}
                </div>
              </div >
            </div >

            <div className="col-sm-4">
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
                  <h2 style={{ margin: "20px 0" }}>Chat with WhatsApp</h2>
                  {/* <h3>
                    <a
                      href="https://api.whatsapp.com/send/?phone=%2B9107875787550&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?"
                      style={{ textDecoration: "2px dashed underline" }}>
                      +91 78757 87550
                    </a>
                  </h3> */}
                  <div className="btn-box" style={{ marginTop: "30px" }}>
                    <a
                      href="https://api.whatsapp.com/send/?phone=%2B9107875787550&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?"
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
                  </div >
                </div >
              </div >
            </div >
          </div>

          <div className="row align-items-center">
            <div className="col-sm-4">
              <div className="services-area">
                <div className="single-services-box">
                  <div className="icon">
                    <img
                      src="/images/icons/indusrty-icon/email-id.png"
                      alt="image"
                      style={{
                        width: "50%",
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                    />
                  </div>
                  <h2 style={{ margin: "20px 0" }}>Email-ID</h2>
                  <a
                    href="mailto:sales@satincorp.com"
                    style={{ fontSize: "19px" }}>
                    sales@satincorp.com
                  </a>
                  {/* <div className="btn-box" style={{ marginTop: "30px" }}>
                    <Link href="mailto:sales@satincorp.com" className="btn btn-primary">
                      Email Now!
                    </Link>
                  </div> */}
                </div >
              </div >
            </div >

            <div className="col-sm-4">
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
                  <h2 style={{ margin: "20px 0" }}>Call us now USA</h2>
                  <h3>
                    <a
                      href="https://api.whatsapp.com/send/?phone=%2B9107875787550&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?"
                      style={{ textDecoration: "2px dashed underline" }}>
                      +1 (408)-495-5822
                    </a>
                  </h3>
                  {/* <div className="btn-box" style={{ marginTop: "30px" }}>
                    <a
                      href="https://api.whatsapp.com/send/?phone=%2B9107875787550&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?"
                      className="btn btn-primary"
                      style={{ width: "20%", padding: "7px", borderRadius: "50%" }}
                    >
                      <img
                        src="/images/icons/indusrty-icon/Whatsapp-icon-1.png"
                        alt="image"
                        style={{
                          textAlign: "center",
                        }}
                      />
                    </a>

                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-sm-4">
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
                  <h2 style={{ margin: "20px 0" }}>Call us now India</h2>
                  <h3>
                    <a
                      href="https://api.whatsapp.com/send/?phone=%2B9107875787550&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?"
                      style={{ textDecoration: "2px dashed underline" }}>
                      +91 78757 87550
                    </a>
                  </h3>
                  {/* <div className="btn-box" style={{ marginTop: "30px" }}>
                    <Link
                      href="https://api.whatsapp.com/send/?phone=%2B9107875787550&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?"
                      className="btn btn-primary">
                      Chat Now!
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div >
        </div >
      </section >

      {/* <ContactFormContent /> */}
      < Services />

      <Footer />
    </>
  );
};

export default Contact;
