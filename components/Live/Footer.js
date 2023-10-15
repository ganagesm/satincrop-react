import React, { Component, useEffect } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

const Footer = () => {
  const location = useRouter();

  // Check if the current route is the career page
  const isCareerPage = location.pathname === '/careers';

  // Conditionally render the script based on the route

  //Zoho Sales Iq Script:
  const useScript = (url, widgetCode) => {
    useEffect(() => {
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

  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <img
                      src="/images/f_sa-logo.svg"
                      alt="triosource logo"
                      width={80}
                    />
                  </Link>
                  <img alt="cmmi5" src="./images/ca-cmmi_logo.jpeg" width={50} style={{ marginLeft: "10px", }} />
                  <p> SA Technologies Inc is a California based IT Consulting & Offshore Company headquartered at Santa Monica with offices in US, Canada, Singapore & India.</p>
                </div>

                <ul className="social">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/sa-technologies-inc-/"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/satincorp" target="_blank" rel="noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/SatechGlobal" target="_blank" rel="noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h3>Quick Links</h3>

                <ul className="footer-services-list">
                  {/* <li>
                    <Link href="/nearshore">News</Link>
                  </li>
                  <li>
                    <Link href="/offshore">Blog</Link>
                  </li> */}
                  <li>
                    <Link href="/careers">Careers </Link>
                    {/* <Link href="https://jobs.satincorp.com/jobs/Careers" target="_blank">Careers</Link> */}
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blogs</Link>
                  </li>
                  <li>
                    <Link href="/news-and-events">News and Events</Link>
                  </li>
                  <li>
                    <Link href="/customer-success-stories">Customer Success Stories</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <h3>Technologies</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/microsoft">  Microsoft </Link>
                  </li>
                  <li>
                    <Link href="/google-cloud">Google</Link>
                  </li>
                  <li>
                    <Link href="/oracle">Oracle</Link>
                  </li>
                  <li>
                    <Link href="/aws-services">AWS</Link>
                  </li>
                  <li>
                    <Link href="/salesforce">Salesforce</Link>
                  </li>
                  <li>
                    <Link href="/servicenow">Service Now</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <h3>Contact</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Address:</span>
                    3031 Tisch Way, 110 Plaza West, <br /> San Jose, CA 95128
                  </li>
                  <li>
                    <span>Email:</span> <a href="mailto:sales@satincorp.com">sales@satincorp.com</a>
                  </li>
                  <li>
                    <span>Phone:</span> <a href="tel:+917823025808">India : +91 78757 87550</a>
                    {/* <span>Phone:</span> <a href="tel:+917823025808">India : +91-7823025808</a> */}
                  </li>
                  <li>
                    <span>Phone:</span> <a href="tel:(408) 495-5822">US : (408) 495-5822</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p> Copyright &copy;{currentYear} SA Technologies. All Rights Reserved. </p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <img src="/images/circle-map.png" alt="image" />
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <Link href="https://api.whatsapp.com/send/?phone=%2B9107875787550&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?" target="_blank" className="floatWhatsApp">
          <img src="/images/icons/whatsApp.svg" alt="whatsapp" />
        </Link>
      </footer>

      {/* <React.Fragment>
        {useScript('https://salesiq.zoho.in/widget', 'siqf0be5ba9aefe176393dfbe591c77fef43f5283d3b627b4cd0b623da1760ed2e4117e8194377283a5ded1bc7509f07a7f')}
      </React.Fragment> */}

      <React.Fragment>
        {isCareerPage ? (
          // Load the script on the career page
          useScript('https://salesiq.zoho.in/widget', 'siqb6893c10dd1c1c4c4cdd0150c0fb02c9b296e864dc452fbee73744582c509b00')
        ) : (
          // Render something else for other pages
          useScript('https://salesiq.zoho.in/widget', 'siqf0be5ba9aefe176393dfbe591c77fef43f5283d3b627b4cd0b623da1760ed2e4117e8194377283a5ded1bc7509f07a7f')
        )}
      </React.Fragment>
    </>
  );
};

export default Footer;
