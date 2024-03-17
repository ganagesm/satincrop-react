import React, { useEffect, useState } from "react";
import Document, { Html, Main, NextScript } from "next/document";
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import HowWeWork from "../components/Startups/HowWeWork";
import MainBanner from "../components/Startups/MainBanner";
import Services from "../components/Startups/Services";
import ComputerVisionAI from "../components/Startups/ComputerVisionAI";
import Newsletter from "../components/Startups/Newsletter";
import TechSlider from "../components/Startups/TechSlider";
import ContactUs from "../components/GoogleStartupOffer/ContactUs";
import TopFeaturedSolutions from "../components/Startups/TopFeaturedSolutions";
import CustomerSuccess from "../components/Startups/CustomerSuccess";
import CustomerFeedback from "../components/Startups/CustomerFeedback";

const ContactFormContent = () => {
  const executeFunction = () => {
    try {
      var f = document.createElement("iframe");
      f.src =
        "https://forms.zohopublic.in/satechsoftwareipvtltd/form/Commonform/formperma/OqtO4dMucPCkviSHfWfmtFFImjjtai4d-o1gh8xkwX0?zf_rszfm=1";
      f.style.border = "none";
      f.style.height = "982px";
      f.style.width = "90%";
      f.style.transition = "all 0.5s ease";

      var d = document.getElementById(
        "zf_div_OqtO4dMucPCkviSHfWfmtFFImjjtai4d-o1gh8xkwX0"
      );
      d.appendChild(f);
      window.addEventListener(
        "message",
        function () {
          var evntData = event.data;
          if (evntData && evntData.constructor == String) {
            var zf_ifrm_data = evntData.split("|");
            if (zf_ifrm_data.length == 2) {
              var zf_perma = zf_ifrm_data[0];
              var zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";
              var iframe = document
                .getElementById(
                  "zf_div_OqtO4dMucPCkviSHfWfmtFFImjjtai4d-o1gh8xkwX0"
                )
                .getElementsByTagName("iframe")[0];
              if (
                iframe.src.indexOf("formperma") > 0 &&
                iframe.src.indexOf(zf_perma) > 0
              ) {
                var prevIframeHeight = iframe.style.height;
                if (prevIframeHeight != zf_ifrm_ht_nw) {
                  iframe.style.height = zf_ifrm_ht_nw;
                }
              }
            }
          }
        },
        false
      );
    } catch (e) {}
  };
  //Zoho Sales Iq Script:
  const useScript = (url, widgetCode) => {
    useEffect(() => {
      executeFunction();
      const script = document.createElement("script");
      script.setAttribute("type", "text/javascript");

      let code = `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "${widgetCode}", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="${url}";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.innerHTML = "<div id='zsiqwidget'></div>";`;

      script.appendChild(document.createTextNode(code));
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }, [url]);
  };
  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
      </Head>
      <Navbar />
      {/* <main id="content" role="main" className="overflow-hidden">
        <div
          id="navbar"
          className="navbar-area navbar-area-with-position-relative">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
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

                <div className="collapse navbar-collapse mean-menu">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <span>Phone:</span>{" "}
                      <a href="tel:+917058222899"> +91 7058 22 2899</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </main> */}

      <MainBanner />
      <Services />
      <ComputerVisionAI />
      <Newsletter />
      <HowWeWork />
      <TechSlider />

      <div className="webinar-area ptb-50 pt-50">
        <div className="container">
          <div className="webinar-inner text-center">
            <div className="row m-0 align-items-center">
              <div className="col-lg-6 col-md-12 p-0">
                <div className="image">
                  <img src="/images/webinar-img.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-6 col-md-12 p-0">
                <div className="content">
                  <h2>2 Week Trial</h2>
                  <p>
                    SAT provides dedicated teams of exceptional talents to
                    innovative companies in Silicon Valley and across the globe.
                    Our developers become your extended team members, working
                    directly with you.
                  </p>

                  <Link href="#contact-support" className="btn btn-primary">
                    Get 2 Week Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TopFeaturedSolutions />

      <CustomerFeedback />
      <ContactUs />
      {/* <CustomerSuccess /> */}
      <Footer />

      <React.Fragment>
        {useScript(
          "https://salesiq.zoho.in/widget",
          "siqf0be5ba9aefe176393dfbe591c77fef43f5283d3b627b4cd0b623da1760ed2e4117e8194377283a5ded1bc7509f07a7f"
        )}
      </React.Fragment>
      <Link
        href="https://api.whatsapp.com/send/?phone=%2B9107875787550&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20startups%20offer.%20Can%20you%20share%20more%20details?"
        target="_blank"
        className="floatWhatsApp">
        <img src="/images/icons/whatsApp.svg" alt="whatsapp" />
      </Link>
    </>
  );
};

export default ContactFormContent;
