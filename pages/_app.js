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

import Head from 'next/Head';
import GoTop from "../components/Shared/GoTop";

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-EFJWZ4P8SR`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EFJWZ4P8SR');
                `}
      </Script>
      <head>
        <meta
          name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* <meta name="google-site-verification" content="1k17_ncXg0fFoTw6047xFIUVipBebzMVIu-LcCvVBY0" /> */}
        <meta name="google-site-verification" content="0QxII35pwwkB8U9eMWfYKXQ2WOg1tVNPkBzHqpDP1Bo" />
        <title>IT Consulting Company | Your Digital Transformation Partner | SA Technologies Inc. USA</title>

        <Script id="google-analytics">
          {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-XXXXX-Y', 'auto');
          ga('send', 'pageview');
        `}
        </Script>
        <Script src="https://www.google-analytics.com/analytics.js" />
      </head>

      <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M73DP9H"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
      <Component {...pageProps} />


      {/* Go Top Button */}
      <GoTop scrollStepInPx="50" delayInMs="10.50" />
    </>
  );
}

export default MyApp;
