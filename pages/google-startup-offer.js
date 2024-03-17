import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import AboutAI from "../components/GoogleStartupOffer/AboutAI";
import MainBanner from "../components/GoogleStartupOffer/MainBanner";
import CustomerFeedback from "../components/GoogleStartupOffer/CustomerFeedback";
import Services from "../components/GoogleStartupOffer/Services";
import ContactUs from "../components/GoogleStartupOffer/ContactUs";
import TopFeaturedSolutions from "../components/GoogleStartupOffer/TopFeaturedSolutions";
import CustomerSuccess from "../components/GoogleStartupOffer/CustomerSuccess";

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
        <title>
          Effectively Collaborate with Remote Teams Using Google Workspace{" "}
        </title>
        <meta
          property="og:title"
          content="Effectively Collaborate with Remote Teams Using Google Workspace "
          key="title"
        />
        <meta
          name="description"
          content="Experience accelerated app development with SA Technologies Mendix services. Empower your business with innovative, low-code solutions."
          key="description"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-817476777"></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-817476777');
        `}
        </script>

        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-817476777"
        />
        {/* pagesense */}
        <script src="https://cdn-in.pagesense.io/js/satechsoftwareipvtltd/45f7f983729c4e3cb6b6f24aeed1c238.js"></script>
        {/* End pagesense */}
        <Script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-817476777'); `,
          }}
        />
      </Head>

      <main id="content" role="main" className="overflow-hidden">
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
      </main>

      <MainBanner />
      <AboutAI />
      <Services />
      <CustomerFeedback />
      <TopFeaturedSolutions />
      {/* <CustomerSuccess /> */}

      {/* <React.Fragment>
        {useScript(
          "https://salesiq.zoho.in/widget",
          "siqd501e20f5ff83957af2415d36330a0344fef3b83965c959b579f4a9444020527"
        )}
      </React.Fragment>
      <Link
        href="https://api.whatsapp.com/send/?phone=%2B917058222899&text=Hello,%20I%20am%20interested%20in%20%20buying%20Google%20Cloud%20Platform"
        target="_blank"
        className="floatWhatsApp">
        <img src="/images/icons/whatsApp.svg" alt="whatsapp" />
      </Link> */}
    </>
  );
};

export default ContactFormContent;
