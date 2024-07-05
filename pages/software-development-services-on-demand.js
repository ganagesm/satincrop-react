// import React, { Component } from "react";
import React, { useEffect, Component } from "react";
import Navbar from "../components/Live/Navbar";
import MainBanner from "../components/RemoteTeams/MainBanner";
import HeroBanner from "../components/RemoteTeams/HeroBanner";
import WhyChooseSAT from "../components/RemoteTeams/WhyChooseSAT";
import Services from "../components/RemoteTeams/Services";
import Developers from "../components/RemoteTeams/Developers";
import PartnerContent from "../components/Live/PartnerContent";
import Testimonials from "../components/RemoteTeams/Testimonials";
import OurIndustry from "../components/RemoteTeams/OurIndustry";
import Footer from "../components/Live/Footer";
// import Services from "../components/About/Services";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

const About = () => {
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    function wfa_pstMesgFrmFom(evt) {
      if (
        evt.origin === "https://crm.zoho.in" ||
        evt.origin === "https://crm.zohopublic.in"
      ) {
        var loc_obj = JSON.stringify({
          origin: window.location.origin,
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash,
        });
        evt.source.postMessage(
          "prnt_wnd_pg_lc_rc_frm_prwindow_" + loc_obj,
          evt.origin
        );
      }
    }

    window.addEventListener("message", wfa_pstMesgFrmFom, false);

    return () => {
      window.removeEventListener("message", wfa_pstMesgFrmFom, false);
    };
  }, []);
  return (
    <>
      <Head>
        <title>
          Discover SA Technologies: Your Trusted Technology Partner{" "}
        </title>
        <meta
          property="og:title"
          content="Discover SA Technologies: Your Trusted Technology Partner  "
          key="title"
        />
        <meta
          name="description"
          content="Learn about SA Technologies mission, expertise, and commitment to innovation. Join us in shaping the future of technology."
          key="description"
        />
      </Head>
      <di>
        {/* <Script
          id="formScript206942000039490073"
          src="https://crm.zoho.in/crm/WebFormServeServlet?rid=77d970c31d8cfec8f7d30e45665d320e6b36a1287f92fe724320d7f248fae058f2db17e70fc485ad06d3a3968a09c079gid3a43ae06560502a644e6b82aec3520fa9c8dd3616a6a29f50cfb7d481a5ecc00&script=$sYG"
        /> */}
      </di>
      <div
        id="navbar"
        className="navbar-area navbar-area-with-position-relative">
        <div className="main-nav">
          <div className="container">
            <nav
              className="navbar navbar-expand-md navbar-light"
              style={{ backgroundColor: "transparent" }}>
              <Link href="/" className="navbar-brand">
                <img
                  src="/images/sa-logo.svg"
                  className="main-logo"
                  alt="logo"
                  width={80}
                />
                <img
                  src="/images/sa-logo.svg"
                  className="optional-logo"
                  alt="logo"
                  height={30}
                  width={80}
                />
              </Link>

              <div className="cmmi">
                <h4>
                  {" "}
                  A CMMI Level <span>5</span> Company{" "}
                </h4>
              </div>

              <div className="collapse navbar-collapse mean-menu" style={{ display: 'block !important', textAlign: 'right' }}>
                {/* <ul className="navbar-nav">
                  <li className="nav-item">
                    <span>Phone:</span>{" "}
                    <a href="tel:+9170582228997"> +91 7058 22 2899</a>
                  </li>
                </ul> */}
                <img
                  src="../images/software-development-services-on-demand/MC-gold.png"
                  alt="image" width={"180px"}
                  style={{ marginRight: '20px' }}
                />
                <Link href="#cotactForm" className="btn btn-primary float-right" >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* <Navbar /> */}
      <MainBanner />
      <Services />
      {/* <HeroBanner /> */}
      {/* <AboutContact /> */}
      <WhyChooseSAT />
      <Developers />

      <OurIndustry />
      {/* <PartnerContent /> */}
      {/* <Services /> */}
      <Testimonials />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <iframe
              style={{
                textAlign: "center",
                display: "block",
                margin: "0 auto",
              }}
              id="cotactForm"
              width="600px"
              height="550px"
              src="https://crm.zoho.in/crm/WebFormServeServlet?rid=585ce290f2f8fba70f1e60e288502a6b825968003543681807317825a28e87e4f89a9f71ee36f4763a3e36de147e8f29gid1cfb6ade00e4faa14a372f4c1269614bacbc5616587cec4eff07651ff1446da3">
            </iframe> */}

          </div>
        </div>
      </div>


      <div className="startup-banner-area software-development-services-banner">
        <div className="startup-banner-inner" style={{ backgroundImage: 'url(/images/software-development-services-on-demand/from-bg.jpg)' }}>
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <Link href="#cotactForm" className="btn btn-primary" style={{ fontSize: '24px' }}>
                    start Now
                  </Link>
                  <div className="startup-banner-content">


                    <div className="customers-partner-list" style={{ marginTop: "20px", display: 'inline-block' }}>

                      <div
                        className="partner-item"
                        data-aos="fade-in"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                        style={{
                          maxWidth: ' 80%'
                        }}
                      >
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          rel="noreferrer">
                          <img src="../images/software-development-services-on-demand/cmmi-1.png"
                            alt="image"

                          />
                        </a>
                      </div>

                      <div
                        className="partner-item"
                        data-aos="fade-in"
                        data-aos-duration="1200"
                        data-aos-delay="300"
                        style={{
                          maxWidth: ' 80%'
                        }}
                      >
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          rel="noreferrer">
                          <img
                            src="../images/software-development-services-on-demand/MC-gold-1.png"
                            alt="image"
                          />
                        </a>
                      </div>

                      <div
                        className="partner-item"
                        data-aos="fade-in"
                        data-aos-duration="1200"
                        data-aos-delay="300"
                        style={{
                          maxWidth: ' 80%'
                        }}
                      >
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          rel="noreferrer">
                          <img
                            src="../images/software-development-services-on-demand/google-partner-1.png"
                            alt="image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <iframe
                    style={{
                      textAlign: "center",
                      display: "block",
                      margin: "0 auto",
                    }}
                    id="cotactForm"
                    width="600px"
                    height="550px"
                    src="https://crm.zoho.in/crm/WebFormServeServlet?rid=585ce290f2f8fba70f1e60e288502a6b825968003543681807317825a28e87e4f89a9f71ee36f4763a3e36de147e8f29gid1cfb6ade00e4faa14a372f4c1269614bacbc5616587cec4eff07651ff1446da3">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






      {/* <Footer /> */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="logo">
                <Link href="/">
                  <img
                    src="/images/f_sa-logo.svg"
                    alt="triosource logo"
                    width={80}
                  />
                </Link>
                <img
                  alt="cmmi5"
                  src="/images/ca-cmmi_logo.jpeg"
                  width={50}
                  style={{ marginLeft: "10px" }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <p style={{ textAlign: "center" }}>
                Copyright &copy;{currentYear} SA Technologies. All Rights
                Reserved.
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <ul>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-conditions">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Link
        href="https://api.whatsapp.com/send/?phone=%2B9107875787550&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?"
        target="_blank"
        className="floatWhatsApp">
        <img src="/images/icons/whatsApp.svg" alt="whatsapp" />
      </Link>
    </>
  );
};

export default About;
