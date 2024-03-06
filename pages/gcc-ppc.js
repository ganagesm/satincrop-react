import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Services from "../components/GccPpc/Services";
import Testimonials from "../components/GccPpc/Testimonials";

const ContactFormContent = () => {
  const executeFunction = () => {
    try {
      var f = document.createElement("iframe");
      f.src =
        "https://forms.zohopublic.in/satechsoftwareipvtltd/form/MicrosoftOffice365LicensesPPC/formperma/C24oeqXLgeckBAaWoP8bgt1tTvq_JpbaQRUBTLATWDw?zf_rszfm=1";
      f.style.border = "none";
      f.style.height = "571px";
      f.style.width = "90%";
      f.style.transition = "all 0.5s ease";

      var d = document.getElementById(
        "zf_div_C24oeqXLgeckBAaWoP8bgt1tTvq_JpbaQRUBTLATWDw"
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
                  "zf_div_C24oeqXLgeckBAaWoP8bgt1tTvq_JpbaQRUBTLATWDw"
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
          Enable Your Remote Team to Work Efficiently with Microsoft
          365(formerly Office 365)(Get Upto 20% OFF* on any License Type){" "}
        </title>
        <meta
          property="og:title"
          content="Enable Your Remote Team to Work Efficiently with  Microsoft 365(formerly Office 365)(Get Upto 20% OFF* on any License Type) "
          key="title"
        />
        <meta
          name="description"
          content="Experience accelerated app development with SA Technologies Mendix services. Empower your business with innovative, low-code solutions."
          key="description"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/style.css?ver=20190507"
        />
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-817476777"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-817476777"></script>
        {/* zohopagesense.com */}
        <script src="https://cdn-in.pagesense.io/js/satechsoftwareipvtltd/af17f642c1a84df3a78486e23a5f8b67.js"></script>
        {/* End zohopagesense.com */}
        <Script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-817476777'); `,
          }}
        />
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-817476777');
        `}
        </script>
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
        .navbar {
          background-color: transparent;
        }
        .navbar-area {
          padding: 16px;
      }
      .collapse.navbar-collapse.mean-menu {
        display: block;
        padding-bottom: 0;
    }

`}
        </style>
      </Head>
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
                    <a href="tel:+917058188896"> +91 7058 18 8896</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <section
        className="d-flex justify-content-center align-items-center"
        style={{
          // backgroundColor: "red",
          backgroundImage: `url("../images/technology-banner/GCC Banner.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // backgroundColor: "#eb3d01",
          backgroundSize: "cover",
        }}>
        <div className="container" id="contact">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
              <div className="hero-text">
                {/* <img src="/images/microsoft-365.png" width={180} /> */}
                {/* <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/microsoft-logo-new.png" width={180} /> */}
                <h1 className="text-white achive">
                  SAT - Your Partner for Global Capability Centers in India: Bridging Excellence with Innovation. {" "}
                  {/* <br />
                  (formerly Office 365)
                  <span>
                    {" "}
                    <br />
                    (Get Upto 20% OFF* on any License Type)
                  </span> */}
                </h1>
                {/* <a
                  href="#ms-plans"
                  className="custom-btn btn-bg btn mt-3 scroll-btn smoothScroll see-plans">
                  See plans
                </a> */}
              </div>
            </div>
            <div className="col-lg-5 offset-md-1 col-12" id="form">
              <div id="zf_div_C24oeqXLgeckBAaWoP8bgt1tTvq_JpbaQRUBTLATWDw"></div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <div className="GCCJourney">
        <div className="container">
          <div className="row ptb-100 align-items-center">
            <div className="col-lg-9 col-md-9">
              <h2 className="align-items-center"
                style={{
                  textAlign: "right",
                }}
              >Explore Our GCC Service Model, Connect with Our GCC Experts Today! </h2>
            </div>
            <div className="col-lg-3 col-md-3"
              style={{
                textAlign: "left",
              }}
            >
              <Link href="#contact" className="btn btn-primary">
                Connect our GCC Expert
              </Link>
            </div>

          </div>
        </div>
      </div>

      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Join Hands with SAT for a Future-Ready Approach </h3>
              <p>
                {" "}
                At SA Technologies, we're dedicated to making your vision a reality. Explore our GCC services and redefine
                how your business addresses major projects. Let's journey together towards innovation, efficiency, and
                unmatched success.
              </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/GCC Side image .jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="services-details-area">
        <div className="container">
          <div className="row m-0 align-items-center services-details-image">

            <div className="section-title">
              <h2>The survey explores five core areas shaping GCCs' future vision</h2>
            </div>
            <img
              src="/images/services-details/GCCppc.png"
              alt="image"
              style={{
                width: "55%",
                margin: "auto"
              }}
            />
          </div>
        </div>
      </div>

      <section className="services-area pt-100 pb-110">
        <div className="container">
          <div className="section-title">
            <h2>Meet our GCC Team</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className=" single-team-box">
                <div className="image">
                  <img src="/images/team/abhay.jpg" alt="Abhay Bhan" />
                </div>
                <div className="content">
                  <Link href="/abhay/" >
                    <h5 style={{ marginTop: "15px", marginBottom: "0", }}>Abhay Bhan</h5>
                    <p>Director Client Engagement <br /> (Europe)</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/Sonal.png" alt="Sonal Sinha" />
                </div>
                <div className="content">
                  <Link href="/sonal-sinha/" >
                    <h5 style={{ marginTop: "15px", marginBottom: "0", }}>Sonal Sinha</h5>
                    <p>Director HR & Operations <br /><br /></p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/sudha.jpg" alt="Vasudha Kanade" />
                </div>
                <div className="content">
                  <Link href="/vasudha-kanade/" >
                    <h5 style={{ marginTop: "15px", marginBottom: "0", }}>Vasudha Kanade</h5>
                    <p>Director Finance & Compliance <br /><br /></p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/amita.jpg" alt="Amita Bhosale" />
                </div>
                <div className="content">
                  <Link href="/amita/" >
                    <h5 style={{ marginTop: "15px", marginBottom: "0", }}>Amita Bhosale</h5>
                    <p>Director Client Engagement <br /> (North America) </p>
                  </Link>
                </div>
              </div>
            </div>

          </div>
          <div className="row" style={{ marginTop: "20px", }}>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/Malay.png" alt="Malay Soni" />
                </div>
                <div className="content">
                  <Link href="/malay/" >
                    <h5 style={{ marginTop: "15px", marginBottom: "0", }}>Malay Soni</h5>
                    <p>Director Talent Acquisition</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/Jitendra.png" alt="Jitendra Khairnar" />
                </div>
                <div className="content">
                  <Link href="/jitendra/" >
                    <h5 style={{ marginTop: "15px", marginBottom: "0", }}>Jitendra Khairnar</h5>
                    <p>Head Workspace & Infrastructure</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/Trishita.png" alt="Trishita Bhattacharya" />
                </div>
                <div className="content">
                  <Link href="/trishita/">
                    <h5 style={{ marginTop: "15px", marginBottom: "0", }}>Trishita Bhattacharya</h5>
                    <p>Head Client Engagement (APAC)</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/kanak-02.png" alt="Kanak Sahoo" />
                </div>
                <div className="content">
                  <Link href="/kanak/">
                    <h5 style={{ marginTop: "15px", marginBottom: "0", }}>Kanak Sahoo</h5>
                    <p>Marketing Manager</p>
                  </Link>
                </div>
              </div>
            </div>



          </div>

        </div>

        <div className="GCCJourney">
          <div className="container">
            <div className="row ptb-100 align-items-center">
              <div className="col-lg-6 col-md-6">
                <h2 className="align-items-center"
                  style={{
                    textAlign: "right",
                  }}
                >Ready to Begin Your GCC Journey?</h2>
              </div>
              <div className="col-lg-5 col-md-5"
                style={{
                  textAlign: "left",
                }}
              >
                <Link href="#contact" className="btn btn-primary">
                  Join us Today !
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>


      <Testimonials />



      <section className="section-enterprise section-enterprise_new">
        <div className="container">


          <div className="webinar-area ptb-110 pricing-area">
            <div className="container">
              <div className="webinar-inner" style={{ paddingTop: "5rem" }}>
                <div className="row m-0 align-items-center">
                  <div className="col-lg-12 col-md-12 p-0">
                    <div className="content section-title">
                      <h2 style={{ fontSize: "30px" }}>
                        Transform Your Business with Our GCC Expertise Now!
                      </h2>
                      {/* <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                        Get Upto 20% OFF* on any License Type
                      </p> */}

                      <a class="btn btn-primary" href="#contact">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <React.Fragment>
        {useScript(
          "https://salesiq.zoho.in/widget",
          "siqbc99886751295e349328d05a1c71d630259e368f4e58c64e8cca3d1c5c4fb1f7a660b0e30ad13b107811bd740587e549"
        )}
      </React.Fragment>
      <Link
        href="https://api.whatsapp.com/send/?phone=%2B9170581%2088896&text=Hello,%20I%20am%20interested%20in%20%20buying%20O365%20licenses"
        target="_blank"
        className="floatWhatsApp">
        <img src="/images/icons/whatsApp.svg" alt="whatsapp" />
      </Link>
    </>
  );
};

export default ContactFormContent;
