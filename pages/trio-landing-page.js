import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Live/Footer"; s
import Script from "next/script";
import Services from "../components/TrioLanding/Services";
import WorkBox from "../components/TrioLanding/WorkBox";
import Testimonials from "../components/TrioLanding/Testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

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
                <h1 className="text-white achive">
                  Nearshore Software Development{" "}
                </h1>
                <p className="text-white">Boost your software development journey with our dedicated nearshore team.
                  Expedite project timelines and leverage extensive expertise for unparalleled outcomes.</p>
              </div>
            </div>
            <div className="col-lg-5 offset-md-1 col-12" id="form">
              <div id="zf_div_C24oeqXLgeckBAaWoP8bgt1tTvq_JpbaQRUBTLATWDw"></div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>Our Services</h2>
            <p>Personalized Software Development: Solutions crafted exclusively for your business's unique demands.</p>
          </div>
          <div className="services-details-overview">

            <div className="services-details-desc mb-30">
              <h3>Generative Ai Development Services</h3>
              <p>
                {" "}
                Dive into the future with our Generative AI Services transforming business with custom content and
                automated design. Harness AI to innovate, boost efficiency, and elevate customer experiences. Join us
                for a journey into digital excellence.
              </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/GCC Side image .jpg"
                alt="image"
              />
            </div>
          </div>


          <div className="services-details-overview">
            <div className="services-details-image">
              <img
                src="/images/services-details/GCC Side image .jpg"
                alt="image"
              />
            </div>
            <div className="services-details-desc mb-30">
              <h3>Mobile App Development</h3>
              <p>
                {" "}
                TrioSource specializes in delivering customized mobile app and AI-driven solutions across multiple
                industries. With our broad expertise and experienced professionals, we've successfully partnered
                with clients in various sectors, crafting solutions that meet the unique demands of each industry.
              </p>
            </div>


          </div>




          <div className="services-details-overview">

            <div className="services-details-desc mb-30">
              <h3>Front-End Development</h3>
              <p>
                {" "}
                Triosource holds the conviction that exceptional front-end development is crucial for the triumph
                of any website or web app. Therefore, we provide an extensive range of front-end development services, encompassing everything from design and wireframing to programming and quality assurance.
              </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/GCC Side image .jpg"
                alt="image"
              />
            </div>
          </div>


          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h1>About us</h1>
              <p>
                {" "}
                Our mission is to empower IT service companies, software development teams, technology advisors, and
                business executives worldwide by linking them with exceptional nearshore technical expertise.

                Our recruitment specialists in IT and technology staffing are dedicated to establishing genuine,
                professional connections with our clients. By fully grasping your specific needs, obstacles, and
                operational procedures, we aim to facilitate the seamless integration of the perfect talent into your
                projects. Whether you're looking to enhance your IT capabilities on a short-term basis or require a
                comprehensive assessment for a long-term initiative, our team at Triosource is equipped to provide
                you with the necessary hiring and managerial support, all within your local time zone and free from
                the burdens of extensive recruitment processes and HR management.

                We value transparency, promptness, and open communication as the foundation of our partnership approach.
                To ensure continual alignment with your objectives, we regularly conduct performance reviews and maintain
                open lines of communication. Triosource is committed to helping you efficiently scale your team and
                achieve more, regardless of the size of your project or the number of developers needed.
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

      <WorkBox />



      {/* <Testimonials /> */}

      <section className="section-enterprise section-enterprise_new">
        <div className="container">
          <div className="webinar-area ptb-110 pricing-area">
            <div className="container">
              <div className="webinar-inner" style={{ paddingTop: "5rem" }}>
                <div className="row m-0 align-items-center">
                  <div className="col-lg-12 col-md-12 p-0">
                    <div className="content section-title">
                      <h2 style={{ fontSize: "55px" }}>
                        Ready to get started?
                      </h2>
                      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                        Stay connected and get the latest updates on our services
                      </p>
                      <div className="input-counter">
                        <input className="input-newsletter" type="text" placeholder="Enter Email-id"
                          style={{
                            width: "50%",
                            padding: "12px",
                            borderRadius: "50px"
                          }}
                        />

                        <a class="btn btn-primary" href="#contact" style={{ marginLeft: "15px" }}>
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
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
