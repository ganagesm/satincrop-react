import React, { useEffect } from "react";
import Link from "next/link";
import Head from 'next/head';
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import MainBanner from "../components/EmployeeSelfService/MainBanner";
import AboutContact from "../components/EmployeeSelfService/AboutContent";

const ContactFormContent = () => {
  const executeFunction = () => {
    try {
      var f = document.createElement("iframe");
      f.src = 'https://forms.zohopublic.in/satechsoftwareipvtltd/form/MicrosoftOffice365LicensesPPC/formperma/C24oeqXLgeckBAaWoP8bgt1tTvq_JpbaQRUBTLATWDw?zf_rszfm=1';
      f.style.border = "none";
      f.style.height = "571px";
      f.style.width = "90%";
      f.style.transition = "all 0.5s ease";

      var d = document.getElementById("zf_div_C24oeqXLgeckBAaWoP8bgt1tTvq_JpbaQRUBTLATWDw");
      d.appendChild(f);
      window.addEventListener('message', function () {
        var evntData = event.data;
        if (evntData && evntData.constructor == String) {
          var zf_ifrm_data = evntData.split("|");
          if (zf_ifrm_data.length == 2) {
            var zf_perma = zf_ifrm_data[0];
            var zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
            var iframe = document.getElementById("zf_div_C24oeqXLgeckBAaWoP8bgt1tTvq_JpbaQRUBTLATWDw").getElementsByTagName("iframe")[0];
            if ((iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0) {
              var prevIframeHeight = iframe.style.height;
              if (prevIframeHeight != zf_ifrm_ht_nw) {
                iframe.style.height = zf_ifrm_ht_nw;
              }
            }
          }
        }
      }, false);
    } catch (e) { }
  }
  //Zoho Sales Iq Script:
  const useScript = (url, widgetCode) => {
    useEffect(() => {
      executeFunction();
      const script = document.createElement('script');
      script.setAttribute("type", "text/javascript");

      let code = `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "${widgetCode}", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="${url}";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.innerHTML = "<div id='zsiqwidget'></div>";`

      script.appendChild(document.createTextNode(code));
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      }
    }, [url]);
  };

  return (
    <>
      <Head>
        <title>SAT Self-Service Desk - Your Ultimate SAT Guide</title>
        <meta property="og:title" content="SAT Self-Service Desk - Your Ultimate SAT Guide" key="title" />
        <meta name="description" content="Unlock success on the SAT with our comprehensive self-service desk! From registration to test strategies, find answers and resources for every SAT question. Start your journey today! " key="description" />

      </Head>
      <Navbar />
      <MainBanner />
      <AboutContact />
      <Footer />
    </>
  );
};

export default ContactFormContent;
