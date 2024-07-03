// import React, { Component } from "react";
import React, { useEffect, Component } from "react";
import Navbar from "../components/Live/Navbar";
import MainBanner from "../components/RemoteTeams/MainBanner";
import HeroBanner from "../components/RemoteTeams/HeroBanner";
import WhyChooseSAT from "../components/RemoteTeams/WhyChooseSAT";
import Services from "../components/RemoteTeams/Services";
import AboutContact from "../components/About/AboutContent";
import PartnerContent from "../components/Live/PartnerContent";
import Testimonials from "../components/RemoteTeams/Testimonials";
import Footer from "../components/Live/Footer";
// import Services from "../components/About/Services";
import Head from "next/head";
import Link from "next/link";

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

      {/* <Navbar /> */}
      <MainBanner />
      <Services />
      {/* <HeroBanner /> */}
      {/* <AboutContact /> */}
      <WhyChooseSAT />
      {/* <PartnerContent /> */}
      {/* <Services /> */}
      <Testimonials />
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
