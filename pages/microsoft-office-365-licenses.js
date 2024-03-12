import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

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
        className="hero hero-bg d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "red",
          backgroundImage: `url('https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/hero-background.jpeg')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#eb3d01",
          backgroundSize: "80% !important",
        }}>
        <div className="container pt-50" id="contact" style={{ height: "70vh" }}>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 d-flex flex-column">
              <div className="hero-text">
                <img src="/images/microsoft-365.png" width={180} />
                {/* <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/microsoft-logo-new.png" width={180} /> */}
                <h1 className="text-white achive" style={{ marginTop: "20px" }}>
                  Enable Your Remote Team to Work Efficiently with Microsoft 365{" "}

                  (formerly Office 365)
                  <span>
                    {" "}
                    <br />
                    (Get Upto 20% OFF* on any License Type)
                  </span>
                </h1>
                <a
                  href="#ms-plans"
                  className="custom-btn btn-bg btn mt-3 scroll-btn smoothScroll see-plans">
                  See plans
                </a>
              </div>
            </div>
            <div className="col-lg-5 offset-md-1 col-12" id="form">
              {/* <div id="zf_div_C24oeqXLgeckBAaWoP8bgt1tTvq_JpbaQRUBTLATWDw"></div> */}
            </div>
          </div>
        </div>
      </section>



      <section className="contactPageSupport bg-f2f6f9 pt-50">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>Contact Us</h2>
            <h3>Simplifying Your Reach: Expert Help Just a Click Away.</h3>
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
                      +91 7058188896
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >




      <section className="outer-sec-ban" id="ms-plans">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="office-business">Microsoft 365 Business</h2>
              <p className="guranteed">Guranteed Low Price in the Market.</p>
            </div>
            <div className="col-lg-4">
              <div className="office-business-1">
                <h3 className="text-center">Microsoft 365 Business Basic</h3>

                <div role="presentation" aria-hidden="true">
                  <div className="x-weight-semibold">
                    <span className="price-value " itemProp="price">
                      ₹ 125.00{" "}
                      <sup className="price-recurrence">user/month</sup>
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="price-commitment">
                      (annual commitment)
                    </span>
                    <span className="d-block f-size">
                      GST extra as applicable
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="#form"
                    className="smoothScroll scroll-btn discount-btn"
                    style={{ backgroundColor: "#0078d4" }}>
                    Get Upto 20% OFF
                  </a>
                </div>

                <div className="content-para">
                  <p>
                    This plan is suitable for organizations that need easy
                    remote solutions, secure cloud storage, Microsoft Teams and
                    Office online (without the desktop versions).
                  </p>
                </div>

                <div className="text-center ttl-2">
                  <h3>Premium office apps included</h3>
                </div>

                <div className="content-para">
                  <p>
                    Web and mobile versions of Word, Excel, and PowerPoint
                    included.3
                  </p>
                </div>

                <div className="text-center ttl-2">
                  <h3>Secure cloud services included</h3>
                </div>

                <div className="space-bottom">
                  <ul className="ow-icons">
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/45a960.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>
                        Exchange
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/693c70.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>
                        OneDrive
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/203ea2.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>
                        SharePoint
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/b4ded9.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>Teams
                      </span>
                    </li>
                  </ul>
                </div>
                <a
                  href="#form"
                  className="btn btn-danger buy-now mt-5 scroll-btn smoothScroll d-block text-center w-50 mx-auto basic-plans"
                  style={{ backgroundColor: "#0078d4" }}>
                  Buy Now
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="office-business-1">
                <h3>Microsoft 365 Business Standard</h3>

                <div role="presentation" aria-hidden="true">
                  <div className="x-weight-semibold">
                    <span className="price-value " itemProp="price">
                      ₹ 660.00{" "}
                      <sup className="price-recurrence">user/month</sup>
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="price-commitment">
                      (annual commitment)
                    </span>
                    <span className="d-block f-size">
                      GST extra as applicable
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="#form"
                    className="smoothScroll scroll-btn discount-btn"
                    style={{ backgroundColor: "#0078d4" }}>
                    Get Upto 20% OFF
                  </a>
                </div>

                <div className="content-para">
                  <p>
                    This plan is suitable for organizations that require
                    complete remote work and collaboration tools including
                    Microsoft Teams, business email, secure cloud storage, and
                    premium Office applications across multiple devices.
                  </p>
                </div>

                <div className="text-center ttl-2">
                  <h3>Premium office apps included</h3>
                </div>

                <div className="">
                  <ul className="ow-icons">
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/outlook.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>
                        Outlook
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/word.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>Word
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/excel.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>Excel
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/power-point.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>
                        PowerPoint
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/publisher.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>
                        Publisher
                        <span>(PC only)</span>
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/access.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>Access
                        <span>(PC only)</span>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="text-center ttl-2">
                  <h3>Secure cloud services included</h3>
                </div>

                <div className="space-bottom">
                  <ul className="ow-icons">
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/45a960.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>
                        Exchange
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/693c70.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>
                        OneDrive
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/203ea2.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>
                        SharePoint
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/b4ded9.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>Teams
                      </span>
                    </li>
                  </ul>
                </div>
                <a
                  href="#form"
                  className="btn btn-danger buy-now mt-5 scroll-btn smoothScroll d-block text-center w-50 mx-auto"
                  style={{ backgroundColor: "#0078d4" }}>
                  Buy Now
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="office-business-1">
                <h3>Microsoft 365 Business Premium</h3>

                <div role="presentation" aria-hidden="true">
                  <div className="x-weight-semibold">
                    <span className="price-value " itemProp="price">
                      ₹ 1,320.00{" "}
                      <sup className="price-recurrence">user/month</sup>
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="price-commitment">
                      (annual commitment)
                    </span>
                    <span className="d-block f-size">
                      GST extra as applicable
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="#form"
                    className="smoothScroll scroll-btn discount-btn"
                    style={{ backgroundColor: "#0078d4" }}>
                    Get Upto 20% OFF
                  </a>
                </div>

                <div className="content-para">
                  <p>
                    This plan is suitable for organizations that need secure,
                    remote work solutions with everything included in Business
                    Standard plan, device management, and advanced cyberthreat
                    protection.
                  </p>
                </div>

                <div className="text-center ttl-2">
                  <h3>Premium office apps included</h3>
                </div>

                <div className="">
                  <ul className="ow-icons">
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/outlook.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>
                        Outlook
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/word.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>Word
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/excel.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>Excel
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/power-point.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>
                        PowerPoint
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/publisher.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>
                        Publisher
                        <span>(PC only)</span>
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/access.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>Access
                        <span>(PC only)</span>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="text-center ttl-2">
                  <h3>Secure cloud services included</h3>
                </div>

                <div className="space-bottom">
                  <ul className="ow-icons">
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/45a960.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>
                        Exchange
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/693c70.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>
                        OneDrive
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/203ea2.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>
                        SharePoint
                      </span>
                    </li>
                    <li className="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/b4ded9.svg" />
                      <span className="icon-name">
                        {" "}
                        <span className="x-screen-reader">Microsoft</span>Teams
                      </span>
                    </li>
                  </ul>
                </div>

                <a
                  href="#form"
                  className="btn btn-danger buy-now mt-5 scroll-btn smoothScroll d-block text-center w-50 mx-auto"
                  style={{ backgroundColor: "#0078d4" }}>
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project mb-4 offer-banner d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="embed-responsive embed-responsive-23by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/ytFYdZV1lgE"
                  title="YouTube video player"
                  width="300"
                  height="315"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            </div>
            <div className="col-lg-6 middle-scroll offer-content  d-flex flex-column justify-content-center align-items-center">
              <h2 className=""> Buy Microsoft 365 Business Plans</h2>
              <span className="free-six"> at Discounted Price</span>

              <a
                href="#form"
                className=" scroll-btn smoothScroll"
                style={{ backgroundColor: "#0078d4 !important" }}>
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-enterprise">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h2 className="office-enterprise">
                Why Choose Microsoft 365 Business?
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-30">
              <div className="main-business text-center">
                <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/icon-1.png" />
                <h5>Enable secure remote access and protect identity</h5>
              </div>
            </div>
            <div className="col-md-3 mb-30">
              <div className="main-business text-center">
                <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/icon-2.png" />
                <h5>Secure personal and company owned devices</h5>
              </div>
            </div>
            <div className="col-md-3 mb-30">
              <div className="main-business text-center">
                <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/icon-3.png" />
                <h5>Safeguard confidential business and customer data</h5>
              </div>
            </div>
            <div className="col-md-3 mb-30">
              <div className="main-business text-center">
                <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/icon-4.png" />
                <h5>Access and co-author via cloud file storage</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-enterprise section-enterprise_new">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h4 className="office-enterprise_new">
                Choose SA Technologies for Licencing Microsoft 365 and Advance
                your Business with Digitalized Workspace
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-30">
              <div className="main-business text-center">
                <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-tag.svg" />
                <h3>Choosing the right Plan </h3>
                <h5>
                  We offer you curated plans to cater to specific business needs
                  along with help and consutancy in choosing the right plan for
                  you.
                </h5>
              </div>
            </div>
            <div className="col-md-3 mb-30">
              <div className="main-business text-center">
                <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/settings.svg" />
                <h3>Setup & Deployment </h3>
                <h5>
                  We have a team of Microsoft experts who are going to take care
                  of the setup and configuring of 365 solutions as per your
                  requiremnets.
                </h5>
              </div>
            </div>
            <div className="col-md-3 mb-30">
              <div className="main-business text-center">
                <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/file-sharing.svg" />
                <h3>Data Migration </h3>
                <h5>
                  We help in effective data migration from current workspace to
                  Microsoft 365 easily in a safe and secure manner.
                </h5>
              </div>
            </div>
            <div className="col-md-3 mb-30">
              <div className="main-business text-center">
                <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/online-support.svg" />
                <h3>Robust Support </h3>
                <h5>
                  We are ready to help and assist whenever you need us with our
                  24*7*365 support. We will be with you on every step of the
                  journey.
                </h5>
              </div>
            </div>
          </div>

          <div className="webinar-area ptb-110 pricing-area">
            <div className="container">
              <div className="webinar-inner" style={{ paddingTop: "5rem" }}>
                <div className="row m-0 align-items-center">
                  <div className="col-lg-12 col-md-12 p-0">
                    <div className="content section-title">
                      <h2 style={{ fontSize: "30px" }}>
                        Supercharge your remote team with Microsoft 365.
                        <br /> work anywhere, work smarter!
                      </h2>
                      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                        Get Upto 20% OFF* on any License Type
                      </p>

                      <a class="btn btn-primary" href="#contact">
                        Claim This Offer Now
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
