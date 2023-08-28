import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/flaticon.css";
import "../styles/fontawesome.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import ReactGA from 'react-ga';
import Script from 'next/script'

// Global Styles
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";

// Initialize Google Analytics

ReactGA.initialize('UA-91820466-2');

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    AOS.init();
    // Track pageview using Google Analytics
    // ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.pageview('/');
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Triosource - Technology Consulting & Outsourcing Company</title>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LM3FMPTWHX" />
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=UA-91820466-2" /> */}
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-LM3FMPTWHX');
        `}
        </Script>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LM3FMPTWHX"></Script>
        <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LM3FMPTWHX');
          `}
        </Script>
        
        {/* Using analytics.js (legacy)
        If you are using the analytics.js script to add analytics: */}
        {/* <Script id="google-analytics">
        {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
 
          ga('create', 'UA-XXXXX-Y', 'auto');
          ga('send', 'pageview');
        `}
      </Script> */}
      </Head>

      <Component {...pageProps} />

      {/* Go Top Button */}
      <GoTop scrollStepInPx="50" delayInMs="10.50" />
    </>
  );
}

export default MyApp;
