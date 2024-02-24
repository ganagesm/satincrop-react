import React, { useEffect } from "react";
// import ContactForm from "./ContactForm";
import Link from "next/link";

const ContactFormContent = () => {
  // const executeFunction = () => {
  //   try {
  //     var f = document.createElement("iframe");
  //     f.src =
  //       "https://forms.zohopublic.in/satechsoftwareipvtltd/form/Satincropwebsite1/formperma/gx3HYtgM2Bt5t0O-W-GD22aen9GH11mV3mk-CF5dsLM?zf_rszfm=1";
  //     f.style.border = "none";
  //     f.style.height = "571px";
  //     f.style.width = "90%";
  //     f.style.transition = "all 0.5s ease";

  //     var d = document.getElementById(
  //       "zf_div_gx3HYtgM2Bt5t0O-W-GD22aen9GH11mV3mk-CF5dsLM"
  //     );
  //     d.appendChild(f);
  //     window.addEventListener(
  //       "message",
  //       function () {
  //         var evntData = event.data;
  //         if (evntData && evntData.constructor == String) {
  //           var zf_ifrm_data = evntData.split("|");
  //           if (zf_ifrm_data.length == 2) {
  //             var zf_perma = zf_ifrm_data[0];
  //             var zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";
  //             var iframe = document
  //               .getElementById(
  //                 "zf_div_gx3HYtgM2Bt5t0O-W-GD22aen9GH11mV3mk-CF5dsLM"
  //               )
  //               .getElementsByTagName("iframe")[0];
  //             if (
  //               iframe.src.indexOf("formperma") > 0 &&
  //               iframe.src.indexOf(zf_perma) > 0
  //             ) {
  //               var prevIframeHeight = iframe.style.height;
  //               if (prevIframeHeight != zf_ifrm_ht_nw) {
  //                 iframe.style.height = zf_ifrm_ht_nw;
  //               }
  //             }
  //           }
  //         }
  //       },
  //       false
  //     );
  //   } catch (e) {}
  // };
  // useEffect(() => {
  //   executeFunction();
  // }, []);
  return (
    <>
      {/* <section className="contact-area ptb-70" id="contact">
        <div className="container">
          <div className="section-title">
            <span>Message Us</span>
            <h2>Drop us a Message with any inquiry</h2>
            <p>
              Thank you for your interest in SAT. We’d like to ask you a few questions to get to know you and your requirements better.
            </p>
          </div>

          <div className="contact-form">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="contact-image">
                  <img src="/images/contact.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div id="zf_div_gx3HYtgM2Bt5t0O-W-GD22aen9GH11mV3mk-CF5dsLM"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="contact-area ptb-110 bg-f2f6f9">
        <div className="container">
          <div className="section-title" style={{ marginBottom: "20px" }}>
            <span>Message Us</span>
            <h3>Contact us by Phone Number or Email Address</h3>
          </div>

          {/* Contact info */}
          <div className="contact-info">
            <div className="contact-info-content">
              {/* <h2 style={{ marginBottom: "20px" }}>
                Contact us by Phone Number or Email Address
              </h2> */}
              <h5>Click on the chatbot to connect with our Expert</h5>
              <h5>
                Contact us by WhatsApp with
                <Link
                  href="https://api.whatsapp.com/send/?phone=%2B9107875787550&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?"
                  target="_blank"
                  className="">
                  <img
                    src="/images/icon/whatsApp-logo.svg"
                    width={"80px"}
                    alt="whatsapp"
                  />
                </Link>
              </h5>
              <h2 style={{ padding: "10px 0" }}>
                <span className="number">
                  USA : <a href="tel:(408)-495-5822">(408)-495-5822</a>
                </span>
                <span className="number">&nbsp;&nbsp;&nbsp;</span>
                <span className="number">
                  India : <a href="tel:+917875787550">+91 78757 87550</a>
                </span>
              </h2>
              <h2>
                <span className="email">
                  <a href="mailto:sales@satincorp.com">sales@satincorp.com</a>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactFormContent;
