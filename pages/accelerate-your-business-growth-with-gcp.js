import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import AboutAI from "../components/MicrosoftGC/AboutAI";
import TopFeaturedSolutions from "../components/MicrosoftGC/TopFeaturedSolutions";
import CustomerSuccess from "../components/MicrosoftGC/CustomerSuccess";
// import $ from 'jquery';

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
    } catch (e) { }
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
        <style>
          {`
          .embed-responsive {
            position: relative;
          display: block;
          width: 100%;
          padding: 0;
          overflow: hidden;
}

          .embed-responsive-23by9::before {
            content: '';
          padding-top: 43.4783%; /* 9 / 23 * 100% */
          display: block;
}

          .embed-responsive-item {
            position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          border: 0;
}
.navbar-brand, .navbar-brand > img {
  width: 5rem;
}

`}
        </style>
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

        <div>
          <div className="container space-bottom-2" style={{ height: "50vh" }}>
            <div className="row">
              {" "}
              {/* align-items-lg-center */}
              <div className="col-lg-12 mb-12 mb-lg-0">
                <img
                  src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/img/banners/Google-cloud-partners-new.png"
                  width={300}
                  style={{ marginTop: "40px" }}
                />
                <div className="mb-4">
                  <h1>
                    {" "}
                    Get upto $1000 Free Credit to Accelerate Your Small or
                    Mid-Sized Organization with the Google Cloud Platform{" "}
                  </h1>
                  {/* <p>Transform your business with GCP’s advanced cloud solutions – now available with a free $500 credit for new users.</p> */}
                </div>
                <a
                  className="js-go-to position-static btn btn-primary transition-3d-hover"
                  href="#contact">
                  Get Started
                </a>
              </div>
              <div className="col-lg-6 offset-md-1">
                {/* <div className="w-md-80 w-lg-80 text-center mx-md-auto mt-5">
                  <h2> Request a call back </h2>
                </div> */}
                <div className="bg-white" id="contact">
                  <div>
                    {/* <div id="zf_div_OqtO4dMucPCkviSHfWfmtFFImjjtai4d-o1gh8xkwX0"></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="contactPageSupport bg-f2f6f9 pt-50">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>Contact Us</h2>
            <h4>Simplifying Your Reach: Expert Help Just a Click Away.</h4>
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
                      href="https://crm.zoho.in/bookings/SATSalesEnquiry?rid=ad19505fc0fd044928994f6b9427e66a78adbea582c167ab0e0f6c23274a7d6e92069362e3822d4f29f5d26f9f4ad1dfgidb0bab5a1325aa8bda564fcc494c02b6a4c40baac422d6924adb73c40710a0b7a"
                      className="btn btn-primary">
                      Book Now
                    </Link>
                  </div>
                </div >
              </div >
            </div >

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
                  <h2 style={{ margin: "20px 0" }}>Chat with us</h2>
                  <p>
                    Get expert IT advice now. Chat with our specialists for
                    solutions and guidance
                  </p>
                </div>
              </div >
            </div >

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
                  <h2 style={{ margin: "20px 0" }}>Chat with WhatsApp</h2>
                  <div className="btn-box" style={{ marginTop: "30px" }}>
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
                  </div >
                </div >
              </div >
            </div >
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
                  <h2 style={{ margin: "20px 0" }}>Call us now India</h2>
                  <h3>
                    <a
                      href="https://api.whatsapp.com/send/?phone=%2B9107058188896&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?"
                      style={{ textDecoration: "2px dashed underline" }}>
                      +91 7058222899
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >

      <AboutAI />

      <TopFeaturedSolutions />

      <CustomerSuccess />

      <React.Fragment>
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
      </Link>
    </>
  );
};

export default ContactFormContent;
