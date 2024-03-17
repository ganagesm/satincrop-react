import React, { useEffect, useState } from "react";
import Document, { Html, Main, NextScript } from "next/document";
import Link from "next/link";
import Head from "next/head";

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

  // starups
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        const response = await fetch(
          "https://dev1.satincorp.com/wp-json/wp/v2/pages/19630"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch page content");
        }
        const data = await response.json();
        setPageContent(data);
      } catch (error) {
        console.error("Error fetching page content:", error);
      }
    };

    fetchPageContent();
  }, []);
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
        {pageContent && (
          <>
            <link rel="stylesheet" href={pageContent.stylesheetUrl} />

            <script src={pageContent.scriptUrl} />
          </>
        )}
        <link
          rel="stylesheet"
          id="redux-extendify-styles-css"
          href="https://dev1.satincorp.com/wp-content/plugins/redux-framework/redux-core/assets/css/extendify-utilities.css?ver=4.4.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="menu-image-css"
          href="https://dev1.satincorp.com/wp-content/plugins/menu-image/includes/css/menu-image.css?ver=3.10"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="dashicons-css"
          href="https://dev1.satincorp.com/wp-includes/css/dashicons.min.css?ver=34dda934ed3de6d8801cc9dc2cc2155d"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="c4wp-public-css"
          href="https://dev1.satincorp.com/wp-content/plugins/wp-captcha//assets/css/c4wp-public.css?ver=34dda934ed3de6d8801cc9dc2cc2155d"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wpforms-classic-full-css"
          href="https://dev1.satincorp.com/wp-content/plugins/wpforms-lite/assets/css/frontend/classic/wpforms-full.min.css?ver=1.8.2.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="chld_thm_cfg_separate-css"
          href="https://dev1.satincorp.com/wp-content/themes/front-child/ctc-style.css?ver=34dda934ed3de6d8801cc9dc2cc2155d"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="fontawesome-css"
          href="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/font-awesome/css/fontawesome-all.min.css?ver=1.1.9"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="animate-css"
          href="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/animate.css/animate.min.css?ver=1.1.9"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="megamenu-css"
          href="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/hs-megamenu/src/hs.megamenu.css?ver=1.1.9"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="jquery-mCustomScrollbar-css"
          href="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css?ver=1.1.9"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="bootstrap-select-css"
          href="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css?ver=1.1.9"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="bootstrap-tagsinput-css"
          href="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/bootstrap-tagsinput/css/bootstrap-tagsinput.css?ver=1.1.9"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="jquery-fancybox-css"
          href="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/fancybox/jquery.fancybox.css?ver=1.1.9"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="dzsparallaxer-css"
          href="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/dzsparallaxer/dzsparallaxer.css?ver=1.1.9"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="slick-carousel-css"
          href="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/slick-carousel/slick/slick.css?ver=1.1.9"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ion-rangeslider-css"
          href="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/ion-rangeslider/css/ion.rangeSlider.css?ver=1.1.9"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="custombox-css"
          href="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/custombox/dist/custombox.min.css?ver=1.1.9"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="bg-video-css"
          href="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/hs-bg-video/hs-bg-video.css?ver=1.1.9"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="cubeportfolio-css"
          href="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/cubeportfolio/css/cubeportfolio.min.css?ver=1.1.9"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="chartist-css"
          href="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/chartist/dist/chartist.min.css?ver=1.1.9"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="chartist-tooltip-css"
          href="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/chartist-js-tooltip/chartist-plugin-tooltip.css?ver=1.1.9"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="front-style-css"
          href="https://dev1.satincorp.com/wp-content/themes/front/style.css?ver=1.1.9"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="front-color-css"
          href="https://dev1.satincorp.com/wp-content/themes/front/assets/css/colors/blue.css?ver=1.1.9"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="front-fonts-css"
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&#038;subset=latin%2Clatin-ext"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="front-child-style-css"
          href="https://dev1.satincorp.com/wp-content/themes/front-child/style.css?ver=1.1.4.1641557060"
          type="text/css"
          media="all"
        />
        <script src="https://dev1.satincorp.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1"></script>
        <script src="https://dev1.satincorp.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1"></script>
        <script src="https://dev1.satincorp.com/wp-content/plugins/front-gutenberg-blocks/dist/frontend_blocks.js?ver=1.1.9"></script>
        <script src="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/bootstrap/bootstrap.min.js?ver=1.1.9"></script>
        <script src="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/slick-carousel/slick/slick.js?ver=1.1.9"></script>
        <script src="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/svg-injector/dist/svg-injector.min.js?ver=1.1.9"></script>
        <script src="https://dev1.satincorp.com/wp-content/themes/front/assets/js/hs.core.js?ver=1.1.9"></script>
        <script src="https://dev1.satincorp.com/wp-content/themes/front/assets/js/components/hs.unfold.js?ver=1.1.9"></script>
        <script src="https://dev1.satincorp.com/wp-content/themes/front/assets/js/components/hs.slick-carousel.js?ver=1.1.9"></script>
        <script src="https://dev1.satincorp.com/wp-content/themes/front/assets/js/components/hs.svg-injector.js?ver=1.1.9"></script>
        <script src="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/appear.js?ver=1.1.9"></script>
        <script src="https://dev1.satincorp.com/wp-content/themes/front/assets/vendor/typed.js/lib/typed.min.js?ver=1.1.9"></script>
        <script src="https://dev1.satincorp.com/wp-content/themes/front/assets/js/front.js?ver=1.1.9"></script>
        <script src="https://dev1.satincorp.com/wp-content/themes/front/assets/js/hs.core.js?ver=1.1.9"></script>
        <style>
          {`
                        .testimonial-carousel-simple, .section-block.default.container.space-top-2, .lookingForJobCTA, .hero-form-1{
                            display: none;
                        }
                        img[src$=".svg"].js-svg-injector:not(.injected-svg) {
                          opacity: 1;
                          transition: opacity 0.4s ease-in;
                      }
                    `}
        </style>
      </Head>

      <div>
        {pageContent ? (
          <div>
            <h1>{pageContent.title.rendered}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: pageContent.content.rendered }}
            />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

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
      </main>

      <MainBanner />
      <Services />
      <ComputerVisionAI />

      <AboutAI />

      <TopFeaturedSolutions />

      <CustomerSuccess /> */}

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
