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
import ReactGA from "react-ga";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";
import CldImage from "../utils/cloudinary"; // Adjust path as needed

// Global Styles
// import "../styles/style.css";
import "../styles/style.min.css";
import "../styles/responsive.css";

import GoTop from "../components/Shared/GoTop";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // Check if the current route is the microsoft-office-365-licenses page
  const isMicrosoftO365Licenses =
    router.pathname === "/microsoft-office-365-licenses";

  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {isMicrosoftO365Licenses ? (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=AW-817476777`}
          />
          <Script strategy="lazyOnload">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-817476777');
                `}
          </Script>
        </>
      ) : (
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
        </>
      )}
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <meta name="google-site-verification" content="1k17_ncXg0fFoTw6047xFIUVipBebzMVIu-LcCvVBY0" /> */}
        <meta
          name="google-site-verification"
          content="0QxII35pwwkB8U9eMWfYKXQ2WOg1tVNPkBzHqpDP1Bo"
        />
        <title>
          IT Consulting Company | Your Digital Transformation Partner | SA
          Technologies Inc. USA
        </title>

        <Script id="google-analytics">
          {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-XXXXX-Y', 'auto');
          ga('send', 'pageview');
        `}
        </Script>
        <Script src="https://www.google-analytics.com/analytics.js" />
        {/* ZOho Code 01/03/2024 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var w=window;
              var p = w.location.protocol;
              if(p.indexOf("http") < 0){p = "http"+":";}
              var d = document;
              var f = d.getElementsByTagName('script')[0],s = d.createElement('script');
              s.type = 'text/javascript'; s.async = false;
              if (s.readyState){
                s.onreadystatechange = function(){
                  if (s.readyState=="loaded"||s.readyState == "complete"){
                    s.onreadystatechange = null;
                    try{
                      loadwaprops("3zb3629bd0ee5d5d8303f8ec75914e3816","3zff858e9853183a7d4f680e1b9484843d","3z39a66442af13c2e9545a2f86e2dc74e8fd0810ac6c1d48f81b6170078680ba1c","3ze1a87b159057988c1bf6ad26580ffc7a","0.0");
                    }catch(e){}
                  }
                };
              }else {
                s.onload = function(){
                  try{
                    loadwaprops("3zb3629bd0ee5d5d8303f8ec75914e3816","3zff858e9853183a7d4f680e1b9484843d","3z39a66442af13c2e9545a2f86e2dc74e8fd0810ac6c1d48f81b6170078680ba1c","3ze1a87b159057988c1bf6ad26580ffc7a","0.0");
                  }catch(e){}
                };
              }
              s.src = p + "//ma.zoho.in/hub/js/WebsiteAutomation.js";
              f.parentNode.insertBefore(s, f);
            `,
          }}
        />
      </Head>

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M73DP9H"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}></noscript>
      <Component {...pageProps} />

      {/* <CldImage
        src="dpoxq3jcb"
        width={200}
        alt=""
        height={200}
        publicid="dpoxq3jcb"
      /> */}
      {/* Go Top Button */}
      <GoTop scrollStepInPx="50" delayInMs="10.50" />
    </>
  );
}

export default MyApp;
