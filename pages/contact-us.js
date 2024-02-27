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

      <section className="contactPageSupport bg-f2f6f9 pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2> Contact Support Team</h2>
            <p>
              Let's talk about simplifying your communications with the world's
              leading cloud phone system.
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-3">
              <div className="services-area">
                <div className="single-services-box">
                  <div className="icon">
                    <img
                      src="/images/icons/artificial-intelligence-1.svg"
                      alt="image"
                      style={{
                        width: "50%",
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                    />
                  </div>
                  <h2 style={{ margin: "20px 0" }}>Book a meeting</h2>
                  <h3>Book a meeting</h3>
                  <div className="btn-box" style={{ marginTop: "30px" }}>
                    <Link href="/contact-us/" className="btn btn-primary">
                      Call Now!
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
                      src="/images/icons/artificial-intelligence-1.svg"
                      alt="image"
                      style={{
                        width: "50%",
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                    />
                  </div>
                  <h2 style={{ margin: "20px 0" }}>Call us now</h2>
                  <h3>
                    <a
                      href="tel:(408)-495-5822"
                      style={{ textDecoration: "2px dashed underline" }}>
                      (408)-495-5822
                    </a>
                  </h3>
                  <div className="btn-box" style={{ marginTop: "30px" }}>
                    <Link href="/contact-us/" className="btn btn-primary">
                      Call Now!
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
                      src="/images/icons/artificial-intelligence-1.svg"
                      alt="image"
                      style={{
                        width: "50%",
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                    />
                  </div>
                  <h2 style={{ margin: "20px 0" }}>Chat on WhatsApp</h2>
                  <h3>
                    <a
                      href="https://api.whatsapp.com/send/?phone=%2B9107875787550&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?"
                      style={{ textDecoration: "2px dashed underline" }}>
                      +91 78757 87550
                    </a>
                  </h3>
                  <div className="btn-box" style={{ marginTop: "30px" }}>
                    <Link
                      href="https://api.whatsapp.com/send/?phone=%2B9107875787550&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?"
                      className="btn btn-primary">
                      Chat Now!
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
                      src="/images/icons/artificial-intelligence-1.svg"
                      alt="image"
                      style={{
                        width: "50%",
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                    />
                  </div>
                  <h2 style={{ margin: "20px 0" }}>Chat on WhatsApp</h2>
                  <h3>
                    <a
                      href="https://api.whatsapp.com/send/?phone=%2B9107875787550&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?"
                      style={{ textDecoration: "2px dashed underline" }}>
                      +91 78757 87550
                    </a>
                  </h3>
                  <div className="btn-box" style={{ marginTop: "30px" }}>
                    <Link
                      href="https://api.whatsapp.com/send/?phone=%2B9107875787550&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?"
                      className="btn btn-primary">
                      Chat Now!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormContent />
      <Services />

      <Footer />
    </>
  );
};

export default Contact;
