import React, { useEffect } from "react";
import Link from "next/link";
import Head from 'next/head';

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
  useEffect(() => {
    executeFunction();
  }, []);
  return (
    <>
    <Head>
        <title>Enable Your Remote Team to Work Efficiently with  Microsoft 365(formerly Office 365)(Get Upto 20% OFF* on any License Type) </title>
        <meta property="og:title" content="Enable Your Remote Team to Work Efficiently with  Microsoft 365(formerly Office 365)(Get Upto 20% OFF* on any License Type) " key="title" />
        <meta name="description" content="Experience accelerated app development with SA Technologies Mendix services. Empower your business with innovative, low-code solutions." key="description" />
        <link rel="stylesheet" href="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/style.css?ver=20190507" />
      </Head>

      <section className="hero hero-bg d-flex justify-content-center align-items-center" style={{
        backgroundColor: "red",
        backgroundImage: `url('https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/hero-background.jpeg')`,
        backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#eb3d01',
      backgroundSize: '80% !important',
      }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="hero-text">
              <h1 className="text-white achive">Enable Your Remote Team to Work Efficiently with  Microsoft 365(formerly Office 365)<span>(Get Upto 20% OFF* on any License Type)</span></h1>
              <a href="#ms-plans" className="custom-btn btn-bg btn mt-3 scroll-btn smoothScroll see-plans">See plans</a>
            </div>
          </div>
          <div className="col-lg-5 offset-md-1 col-12" id="form">
            <div id="zf_div_C24oeqXLgeckBAaWoP8bgt1tTvq_JpbaQRUBTLATWDw"></div>
          </div>
        </div>
      </div>
    </section >
      <section class="outer-sec-ban" id="ms-plans">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="office-business">
                Microsoft O365 Business
              </h2>
              <p class="guranteed">Guranteed Low Price in the Market.</p>
            </div>
            <div class="col-lg-4">
              <div class="office-business-1">
                <h3 class="text-center">Microsoft 365 Business Basic</h3>

                <div role="presentation" aria-hidden="true">
                  <div class="x-weight-semibold">
                    <span class="price-value " itemprop="price">₹ 125.00 <sup class="price-recurrence">user/month</sup></span>
                  </div>
                  <div class="text-center">
                    <span class="price-commitment">(annual commitment)</span>
                    <span class="d-block f-size">GST extra as applicable</span>
                  </div>
                </div>

                <div class="text-center">
                  <a href="#form" class="smoothScroll scroll-btn discount-btn">Get Upto 20% OFF</a>
                </div>

                <div class="content-para">
                  <p>This plan is suitable for organizations that need easy remote solutions, secure cloud
                    storage, Microsoft Teams and Office online
                    (without the desktop versions).</p>
                </div>

                <div class="text-center ttl-2">
                  <h3>Premium office apps included</h3>
                </div>

                <div class="content-para">
                  <p>Web and mobile versions of Word, Excel, and PowerPoint included.3</p>
                </div>

                <div class="text-center ttl-2">
                  <h3>Secure cloud services included</h3>
                </div>

                <div class="space-bottom">
                  <ul class="ow-icons">
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/45a960.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>Exchange</span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/693c70.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>OneDrive</span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/203ea2.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>SharePoint</span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/b4ded9.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>Teams</span>
                    </li>
                  </ul>
                </div>
                <a href="#form"
                  class="btn btn-danger buy-now mt-5 scroll-btn smoothScroll d-block text-center w-50 mx-auto basic-plans">
                  Buy Now</a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="office-business-1">
                <h3>Microsoft 365 Business Standard</h3>

                <div role="presentation" aria-hidden="true">
                  <div class="x-weight-semibold">
                    <span class="price-value " itemprop="price">₹ 660.00 <sup class="price-recurrence">user/month</sup></span>
                  </div>
                  <div class="text-center">
                    <span class="price-commitment">(annual commitment)</span>
                    <span class="d-block f-size">GST extra as applicable</span>
                  </div>
                </div>

                <div class="text-center">
                  <a href="#form" class="smoothScroll scroll-btn discount-btn">Get Upto 20% OFF</a>
                </div>

                <div class="content-para">
                  <p>This plan is suitable for organizations that require complete remote work and
                    collaboration tools including Microsoft Teams,
                    business email, secure cloud storage, and premium Office applications across multiple
                    devices.</p>
                </div>

                <div class="text-center ttl-2">
                  <h3>Premium office apps included</h3>
                </div>

                <div class="">
                  <ul class="ow-icons">
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/outlook.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>Outlook</span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/word.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>Word</span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/excel.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>Excel</span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/power-point.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>PowerPoint</span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/publisher.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>Publisher
                        <span>(PC only)</span></span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/access.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>Access
                        <span>(PC only)</span></span>
                    </li>

                  </ul>

                </div>

                <div class="text-center ttl-2">
                  <h3>Secure cloud services included</h3>
                </div>

                <div class="space-bottom">
                  <ul class="ow-icons">
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/45a960.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>Exchange</span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/693c70.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>OneDrive</span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/203ea2.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>SharePoint</span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/b4ded9.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>Teams</span>
                    </li>
                  </ul>
                </div>
                <a href="#form" class="btn btn-danger buy-now mt-5 scroll-btn smoothScroll d-block text-center w-50 mx-auto">
                  Buy Now</a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="office-business-1">
                <h3>Microsoft 365 Business Premium</h3>

                <div role="presentation" aria-hidden="true">
                  <div class="x-weight-semibold">
                    <span class="price-value " itemprop="price">₹ 1,320.00 <sup
                      class="price-recurrence">user/month</sup></span>
                  </div>
                  <div class="text-center">
                    <span class="price-commitment">(annual commitment)</span>
                    <span class="d-block f-size">GST extra as applicable</span>
                  </div>
                </div>

                <div class="text-center">
                  <a href="#form" class="smoothScroll scroll-btn discount-btn">Get Upto 20% OFF</a>
                </div>

                <div class="content-para">
                  <p>This plan is suitable for organizations that need secure, remote work solutions with
                    everything included in Business Standard plan,
                    device management, and advanced cyberthreat protection.</p>
                </div>

                <div class="text-center ttl-2">
                  <h3>Premium office apps included</h3>
                </div>

                <div class="">
                  <ul class="ow-icons">
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/outlook.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>Outlook</span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/word.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>Word</span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/excel.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>Excel</span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/power-point.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>PowerPoint</span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/publisher.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>Publisher
                        <span>(PC only)</span></span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/access.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>Access
                        <span>(PC only)</span></span>
                    </li>

                  </ul>

                </div>

                <div class="text-center ttl-2">
                  <h3>Secure cloud services included</h3>
                </div>

                <div class="space-bottom">
                  <ul class="ow-icons">
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/45a960.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>Exchange</span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/693c70.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>OneDrive</span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/203ea2.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>SharePoint</span>
                    </li>
                    <li class="">
                      <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-icon/b4ded9.svg" />
                      <span class="icon-name"> <span class="x-screen-reader">Microsoft</span>Teams</span>
                    </li>
                  </ul>
                </div>

                <a href="#form" class="btn btn-danger buy-now mt-5 scroll-btn smoothScroll d-block text-center w-50 mx-auto ">
                  Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="project mb-4 offer-banner d-flex justify-content-center align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ytFYdZV1lgE"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-lg-6 middle-scroll offer-content  d-flex flex-column justify-content-center align-items-center">
              <h2 class=""> Buy Microsoft 365 Business Plans</h2>
              <span class="free-six"> at Discounted Price</span>

              <a href="#form" class=" scroll-btn smoothScroll">Contact Now</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section-enterprise">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-12">
              <h2 class="office-enterprise">
                Why Choose Microsoft 365 Business?
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb-30">
              <div class="main-business text-center">
                <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/icon-1.png" />
                <h5>Enable secure remote access and protect identity</h5>
              </div>
            </div>
            <div class="col-md-3 mb-30">
              <div class="main-business text-center">
                <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/icon-2.png" />
                <h5>Secure personal and company owned devices</h5>
              </div>
            </div>
            <div class="col-md-3 mb-30">
              <div class="main-business text-center">
                <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/icon-3.png" />
                <h5>Safeguard confidential business and customer data</h5>
              </div>
            </div>
            <div class="col-md-3 mb-30">
              <div class="main-business text-center">
                <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/icon-4.png" />
                <h5>Access and co-author via cloud file storage</h5>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section class="section-enterprise section-enterprise_new">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-12">
              <h4 class="office-enterprise_new">
                Choose SA Technologies for Licencing Microsoft 365 and Advance your Business with Digitalized
                Workspace
              </h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb-30">
              <div class="main-business text-center">
                <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/price-tag.svg" />
                <h3>Choosing the right Plan </h3>
                <h5>We offer you curated plans to cater to specific business needs along with help and
                  consutancy in choosing the right plan for you.</h5>
              </div>
            </div>
            <div class="col-md-3 mb-30">
              <div class="main-business text-center">
                <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/settings.svg" />
                <h3>Setup & Deployment </h3>
                <h5>We have a team of Microsoft experts who are going to take care of the setup and configuring
                  of O365 solutions as per your requiremnets.</h5>
              </div>
            </div>
            <div class="col-md-3 mb-30">
              <div class="main-business text-center">
                <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/file-sharing.svg" />
                <h3>Data Migration </h3>
                <h5>We help in effective data migration from current workspace to Microsoft 365 easily in a
                  safe and secure manner.</h5>
              </div>
            </div>
            <div class="col-md-3 mb-30">
              <div class="main-business text-center">
                <img src="https://dev1.satincorp.com/microsoft-office-365-licenses/wp-content/themes/microsoft-office-365-licenses-wp-themes-19032021/images/online-support.svg" />
                <h3>Robust Support </h3>
                <h5>We are ready to help and assist whenever you need us with our 24*7*365 support. We will be
                  with you on every step of the journey.</h5>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ContactFormContent;
