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
        <title>IT Consulting Company | Your Digital Transformation Partner | SA Technologies Inc. USA</title>
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-LM3FMPTWHX" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-LM3FMPTWHX');
        `}
        </Script> */}
        {/* <!-- Google tag (gtag.js) --> */}
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LM3FMPTWHX"></Script>
        <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LM3FMPTWHX');
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
