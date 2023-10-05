import React, { useEffect } from "react";
import ContactForm from "./ContactForm";

const ContactFormContent = () => {
  const executeFunction = () => {
    try{
      var f = document.createElement("iframe");
      f.src = 'https://forms.zohopublic.in/satechsoftwareipvtltd/form/Satincropwebsite1/formperma/gx3HYtgM2Bt5t0O-W-GD22aen9GH11mV3mk-CF5dsLM?zf_rszfm=1';
      f.style.border="none";
      f.style.height="571px";
      f.style.width="90%";
      f.style.transition="all 0.5s ease";
      
      var d = document.getElementById("zf_div_gx3HYtgM2Bt5t0O-W-GD22aen9GH11mV3mk-CF5dsLM");
      d.appendChild(f);
      window.addEventListener('message', function (){
      var evntData = event.data;
      if( evntData && evntData.constructor == String ){
      var zf_ifrm_data = evntData.split("|");
      if ( zf_ifrm_data.length == 2 ) {
      var zf_perma = zf_ifrm_data[0];
      var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
      var iframe = document.getElementById("zf_div_gx3HYtgM2Bt5t0O-W-GD22aen9GH11mV3mk-CF5dsLM").getElementsByTagName("iframe")[0];
      if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
      var prevIframeHeight = iframe.style.height;
      if ( prevIframeHeight != zf_ifrm_ht_nw ) {
      iframe.style.height = zf_ifrm_ht_nw;
      }
      }
      }
      }
      }, false);
      }catch(e){}
  }
  useEffect(()=>{
    executeFunction();
  }, []);
  return (
    <>
      <section className="contact-area ptb-110">
        <div className="container">
          <div className="section-title">
            <span>Message Us</span>
            <h2>Drop us a Message with any inquiry</h2>
            <p>
              Thank you for your interest in SA Technologies. We’d like to ask you a few questions to get to know you and your requirements better.
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
                {/* <ContactForm /> */}
                <div id="zf_div_gx3HYtgM2Bt5t0O-W-GD22aen9GH11mV3mk-CF5dsLM"></div>
                
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="contact-info">
            <div className="contact-info-content">
              <h3>Contact us by Phone Number or Email Address</h3>
              <h2>
                <span className="number">India : <a href="tel:+917875787550">+91 78757 87550</a></span>
                <span className="number">&nbsp;</span>
                <span className="number">US : <a href="tel:(408)-495-5822">(408)-495-5822</a></span>
                <span className="or">OR</span>
                <span className="email"><a href="mailto:sales@satincorp.com">sales@satincorp.com</a></span>
              </h2>

              {/* <ul className="social">
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactFormContent;
