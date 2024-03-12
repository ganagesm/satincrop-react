import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
// import $ from 'jquery';

const ContactFormContent = () => {
  const executeFunction = () => {
    try {
      var f = document.createElement("iframe");
      f.src =
        "https://forms.zohopublic.in/satechsoftwareipvtltd/form/BuyGoogleWorkspace/formperma/PBwlz1PfEQXqz-nEuTIOHtHVoEiYTReIHigAw4TVy9o?zf_rszfm=1";
      f.style.border = "none";
      f.style.height = "668px";
      f.style.width = "90%";
      f.style.transition = "all 0.5s ease";
      var d = document.getElementById(
        "zf_div_PBwlz1PfEQXqz-nEuTIOHtHVoEiYTReIHigAw4TVy9o"
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
                  "zf_div_PBwlz1PfEQXqz-nEuTIOHtHVoEiYTReIHigAw4TVy9o"
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
        <title>
          Effectively Collaborate with Remote Teams Using Google Workspace{" "}
        </title>
        <meta
          property="og:title"
          content="Effectively Collaborate with Remote Teams Using Google Workspace "
          key="title"
        />
        <meta
          name="description"
          content="Experience accelerated app development with SA Technologies Mendix services. Empower your business with innovative, low-code solutions."
          key="description"
        />
        <link
          rel="stylesheet"
          href="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/style.css?ver=20190507"
        />

        <script
          type="text/javascript"
          src="https://dev1.satincorp.com/buy-google-workspace/wp-includes/js/jquery/jquery.min.js?ver=3.7.0"
          id="jquery-core-js"></script>
        <script
          type="text/javascript"
          src="https://dev1.satincorp.com/buy-google-workspace/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1"
          id="jquery-migrate-js"></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-817476777"></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-817476777');
        `}
        </script>
        {/* pagesense */}
        <script src="https://cdn-in.pagesense.io/js/satechsoftwareipvtltd/822f45f0a67a4db2987c07de7a5090d1.js"></script>
        {/* End pagesense */}

        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-817476777"
        />
        <script
          type="text/javascript"
          src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/vendor/bootstrap/js/bootstrap.bundle.min.js?ver=6.3.2"
          id="buy_google_scripts_bootstrap-js"></script>
        <Script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-817476777'); `,
          }}
        />
        <style>
          {`
          .embed-responsive {
            position: relative;
          display: block;
          width: 100%;
          padding: 0;
          overflow: hidden;
}

          .embed-responsive-23by9::before {
            content: '';
          padding-top: 43.4783%; /* 9 / 23 * 100% */
          display: block;
}

          .embed-responsive-item {
            position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          border: 0;
}
      .navbar-brand, .navbar-brand > img {
        width: 5rem;
      }
      .navbar-area {
        padding: 16px;
        text-align: right;
    }
    .collapse.navbar-collapse.mean-menu {
      display: block;
      padding-bottom: 0;
  }

`}
        </style>
      </Head>

      <main id="content" role="main" className="overflow-hidden">
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
                      <a href="tel:+9170582228997"> +91 7058 22 2899</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-light" style={{ height: "70vh" }}>
          <div className="container space-bottom-2">
            <div className="row align-items-lg-center">
              <div className="col-lg-5 mb-7 mb-lg-0">
                <img
                  src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/img/banners/Google-cloud-partners-new.png"
                  width={180}
                />
                <div className="mb-4">
                  <h1>
                    {" "}
                    Effectively Collaborate with Remote Teams Using Google
                    Workspace{" "}
                  </h1>
                </div>
                <a
                  className="js-go-to position-static btn btn-primary transition-3d-hover"
                  href="#contact">
                  Get 14 Days Free Trial
                </a>
              </div>
              <div className="col-lg-6 offset-md-1">
                {/* <div className="w-md-80 w-lg-80 text-center mx-md-auto mt-5">
                  <h2> Request a call back </h2>
                </div> */}
                <div className="bg-white" id="contact">
                  <div>
                    {/* <div id="zf_div_PBwlz1PfEQXqz-nEuTIOHtHVoEiYTReIHigAw4TVy9o"></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container space-2">
            <div className="row justify-content-lg-between align-items-lg-center">
              <div className="col-lg-6 col-xl-5">
                <div
                  className="min-h-300rem mx-auto"
                  style={{ maxwidth: "28rem" }}>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/00vRcdvQcWA?rel=0"></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-9 mb-lg-0">
                <p>
                  {" "}
                  To stand out in today’s digital infrastructure, enterprises
                  are constantly equipping their teams with the right,
                  future-proof skills and advanced, prolific tools. Google
                  Workspace is a collaboration and productivity tool useful for
                  organizations of all sizes. It unlocks your organization’s
                  full potential for innovation. Google Workspace opens modern
                  ways of collaboration so that you can achieve more with your
                  remote teams. Google Workspace gives businesses a better way
                  to collaborate remotely, leading to increased productivity
                  across teams and organizations.
                </p>

                <div className="mt-4">
                  <a
                    className="js-go-to position-static btn btn-primary transition-3d-hover"
                    href="#contact">
                    Let's Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden" id="plans">
            <div className="space-1">
              <div className="w-md-80 w-lg-80 text-center mx-auto mb-5">
                <h2> Get 14 Days Free Trial </h2>
                <a href="#contact">
                  <span className="js-go-to position-static btn text-white btn btn-primary transition-3d-hover py-sm-2 px-sm-3 mt-3 mb-4">
                    Contact For FREE Trial{" "}
                  </span>
                </a>
                <p className="lead text-dark"> Every plan includes </p>
                <img
                  src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/svg/clients-logo/google-workspace-strip.svg "
                  className="img-fluid w-65"
                />
              </div>

              <div className="container space-2">
                <div className="table-responsive-lg w-100 mx-lg-auto">
                  <table className="table table-striped table-borderless">
                    <thead className="text-center">
                      <tr>
                        <th scope="col" className="w-25"></th>
                        <th scope="col" className="w-20">
                          <span className="text-dark"> Business Starter </span>
                          <small className="d-block text-body">
                            <span className="font-size-2">₹</span>
                            <span className="font-size-3 font-weight-bold  text-dark">
                              136<sup style={{ marginleft: "-5px" }}>*</sup>
                            </span>{" "}
                            <strike>₹ 230</strike>/ user / month{" "}
                          </small>
                          <a
                            className="js-go-to position-static btn btn-danger text-white transition-3d-hover mt-3 mb-3 btn-sm"
                            href="#contact">
                            Select Plan
                          </a>
                          <div className="badge bg-navy text-white badge-pill py-sm-2 px-sm-3 mb-0">
                            {" "}
                            Assured Additional Discount
                          </div>
                          <p className="text-danger text-highlight-danger font-size-1 mt-2">
                            {" "}
                            Limited Period Offer{" "}
                          </p>
                        </th>
                        <th
                          scope="col"
                          className="w-30 border-left border-right">
                          <span className="text-dark"> Business Standard </span>
                          <span className="badge badge-warning badge-pill ml-1">
                            Hot
                          </span>
                          <small className="d-block text-body">
                            <span className="font-size-2">₹</span>
                            <span className="font-size-3 font-weight-bold  text-dark">
                              736<sup style={{ marginleft: "-5px" }}>*</sup>
                            </span>
                            <strike>₹ 920 </strike> / user / month{" "}
                          </small>
                          <div>
                            <a
                              className="js-go-to position-static btn btn-danger text-white transition-3d-hover mt-3 mb-3 btn-sm"
                              href="#contact">
                              Select Plan
                            </a>
                          </div>
                          <div className="badge bg-navy text-white badge-pill py-sm-2 px-sm-3 mb-0">
                            Assured Additional Discount
                          </div>
                          <p className="text-danger text-highlight-danger font-size-1 mt-2">
                            {" "}
                            Limited Period Offer{" "}
                          </p>
                        </th>
                        <th scope="col" className="w-25">
                          <span className="text-dark"> Business Plus </span>
                          <small className="d-block text-body">
                            <span className="font-size-2">₹</span>
                            <span className="font-size-3 font-weight-bold text-dark">
                              1380
                            </span>{" "}
                            / user / month{" "}
                          </small>
                          <div>
                            <a
                              className="js-go-to position-static btn btn-danger text-white transition-3d-hover mt-3 mb-3 btn-sm"
                              href="#contact">
                              Select Plan
                            </a>
                          </div>
                          <div className="badge bg-navy text-white badge-pill py-sm-2 px-sm-3 mb-0">
                            Assured Additional Discount
                          </div>
                          <p className="text-danger text-highlight-danger font-size-1 mt-2">
                            {" "}
                            Limited Period Offer{" "}
                          </p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="font-size-1 py-3 px-4">
                          {" "}
                          Custom and secure business email{" "}
                        </th>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3 font-size-1">
                          Additional eDiscovery, retention
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="font-size-1 py-3 px-4">
                          Participant video meetings
                        </th>
                        <td className="text-center text-body p-3 font-size-1">
                          100 participant video meetings
                        </td>
                        <td className="text-center border-left border-right p-3 font-size-1">
                          150 participant video meetings + recording
                        </td>
                        <td className="text-center p-3 font-size-1">
                          250 participant video meetings + recording, attendance
                          tracking
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="font-size-1 py-3 px-4">
                          {" "}
                          Cloud storage per user
                        </th>
                        <td className="text-center text-body py-3 px-4 font-size-1">
                          30 GB
                        </td>
                        <td className="text-center text-body border-left border-right py-3 px-4 font-size-1">
                          2 TB
                        </td>
                        <td className="text-center p-3 font-size-1">5 TB</td>
                      </tr>
                      <tr>
                        <th scope="row" className="font-size-1 py-3 px-4">
                          Security and management controls
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center text-body border-left border-right py-3 px-4">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3 font-size-1">
                          Enhanced security and management controls, including
                          Vault and advanced endpoint management
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="font-size-1 py-3 px-4"></th>
                        <td className="text-center text-body p-3 font-size-1">
                          Standard Support
                        </td>
                        <td className="text-center text-body border-left border-right py-3 px-4 font-size-1">
                          Standard Support (paid upgrade to Enhanced Support)
                        </td>
                        <td className="text-center p-3 font-size-1">
                          Standard Support (paid upgrade to Enhanced Support)
                        </td>
                      </tr>

                      <tr className="border-dark border-bottom">
                        <th
                          scope="row"
                          className="bg-white text-dark pt-5 pb-3 px-4 mb-0 h4">
                          {" "}
                          Productivity &amp; Collaboration{" "}
                        </th>
                        <td className="bg-white"></td>
                        <td className="bg-white border-left border-right"></td>
                        <td className="bg-white"></td>
                      </tr>

                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="icon icon-xs mt-0 mr-2">
                              <img
                                src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/svg/clients-logo/new-mail.svg"
                                className="img-fluid"
                              />
                            </span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Gmail Business email{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>

                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Custom email for your business{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>

                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Phishing and spam protection that blocks more
                                than 99.9% of attacks{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>

                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Ad-free email experience{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="icon icon-xs mt-0 mr-2">
                              <img
                                src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/svg/clients-logo/new-meet.svg"
                                className="img-fluid"
                              />
                            </span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Meet Video and voice conferencing{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          100 participants
                        </td>
                        <td className="text-center border-left border-right p-3">
                          150 participants
                        </td>
                        <td className="text-center p-3">250 participants</td>
                      </tr>

                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>

                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Meeting length (maximum){" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">24 hours</td>
                        <td className="text-center border-left border-right p-3">
                          24 hours
                        </td>
                        <td className="text-center p-3">24 hours</td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>

                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                US or international dial-in phone numbers{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <a
                            className="link link-collapse small font-size-1 font-weight-bold pt-1"
                            data-toggle="collapse"
                            href="#collapseDescriptionSection"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseDescriptionSection">
                            <span className="link-collapse-default text-dark">
                              See more features
                            </span>
                            <span className="link-collapse-active">
                              see less features
                            </span>
                            <span className="link-icon ml-1">+</span>
                          </a>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr className="collapse" id="collapseDescriptionSection">
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Digital whiteboarding{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>

                      <tr className="collapse" id="collapseDescriptionSection">
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Meeting recordings saved to Google Drive{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3"></td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr className="collapse" id="collapseDescriptionSection">
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Polling and Q&amp;A{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3"></td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>

                      <tr className="collapse" id="collapseDescriptionSection">
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Noise cancellation{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3"></td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>

                      <tr className="collapse" id="collapseDescriptionSection">
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Moderation controls{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3"></td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr className="collapse" id="collapseDescriptionSection">
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Hand raising{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3"></td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr className="collapse" id="collapseDescriptionSection">
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Breakout rooms{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3"></td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr
                        className="collapse border-dark border-bottom"
                        id="collapseDescriptionSection">
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Attendance tracking{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3"></td>
                        <td className="text-center border-left border-right p-3"></td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="icon icon-xs mt-0 mr-2">
                              <img
                                src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/svg/clients-logo/new-drive.svg"
                                className="img-fluid"
                              />
                            </span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Drive Secure cloud storage{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3 font-size-1">
                          30 GB per user
                        </td>
                        <td className="text-center border-left border-right p-3 font-size-1">
                          2 TB per user
                        </td>
                        <td className="text-center p-3 font-size-1">
                          5 TB per user
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>

                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Drive File Stream{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>

                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Support for over 100 file types{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Shared drives for your team{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3"></td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Target audience sharing{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3"></td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="icon icon-xs mt-0 mr-2">
                              <img
                                src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/svg/clients-logo/new-chat.svg"
                                className="img-fluid"
                              />
                            </span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Chat Team messaging{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>

                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Turn history on or off by default{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Auto-accept invitations{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                One-to-one external chat
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                Advanced chat rooms, including threaded rooms
                                and guest access
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3"></td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="icon icon-xs mt-0 mr-2">
                              <img
                                src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/svg/clients-logo/new-calender.svg"
                                className="img-fluid"
                              />
                            </span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Calendar Shared calendars{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Browse and reserve conference rooms{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Appointment booking pages{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3"></td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="icon icon-xs mt-0 mr-2">
                              <img
                                src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/svg/clients-logo/docs_48dp.png"
                                className="img-fluid"
                              />
                            </span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Docs, Sheets, Slides Collaborative content
                                creation
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Keep Shared Notes{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Sites website builder{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <a
                            className="link link-collapse small font-size-1 font-weight-bold pt-1"
                            data-toggle="collapse"
                            href="#collapseCalender"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseCalender">
                            <span className="link-collapse-default text-dark">
                              See more features
                            </span>
                            <span className="link-collapse-active">
                              see less features
                            </span>
                            <span className="link-icon ml-1">+</span>
                          </a>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>

                      <tr className="collapse" id="collapseCalender">
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Forms survey builder{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr className="collapse" id="collapseCalender">
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Interoperability with Office files{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr className="collapse" id="collapseCalender">
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Easier analysis with Smart Fill, Smart Cleanup,
                                and Answers{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr className="collapse" id="collapseCalender">
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Writing assistance with Smart Compose, grammar
                                suggestions, and spelling autocorrect{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr className="collapse" id="collapseCalender">
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Connected sheets
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          Fundamental
                        </td>
                        <td className="text-center border-left border-right p-3">
                          Fundamental
                        </td>
                        <td className="text-center p-3">Fundamental</td>
                      </tr>
                      <tr className="collapse" id="collapseCalender">
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Custom branding for document and form templates{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3"></td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="icon icon-xs mt-0 mr-2">
                              <img
                                src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/svg/clients-logo/currents_48dp.png"
                                className="img-fluid"
                              />
                            </span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Currents Engage employees{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="mr-3">—</span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Browse and reserve conference rooms{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <span className="icon icon-xs mt-0 mr-2">
                              <img
                                src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/svg/clients-logo/google_cloud_search_48dp.png"
                                className="img-fluid"
                              />
                            </span>
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Cloud Search Smart search{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3"></td>
                        <td className="text-center border-left border-right p-3">
                          1st party data
                        </td>
                        <td className="text-center p-3">1st party data</td>
                      </tr>

                      <tr className="border-dark border-bottom">
                        <th
                          scope="row"
                          className="bg-soft-success text-dark pt-5 pb-3 px-4 mb-0 h4">
                          {" "}
                          Security &amp; Management
                        </th>
                        <td className="bg-soft-success"></td>
                        <td className="bg-soft-success border-left border-right"></td>
                        <td className="bg-soft-success"></td>
                      </tr>

                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                2-step verification{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Group-based policy controls{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Advanced Protection Program{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center border-left border-right p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Endpoint management{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3">
                          Fundamental
                        </td>
                        <td className="text-center border-left border-right p-3">
                          Fundamental
                        </td>
                        <td className="text-center p-3">Advanced</td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Vault - Retain, archive, and search data{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3"></td>
                        <td className="text-center border-left border-right p-3"></td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-3 px-4">
                          <div className="media">
                            <div className="media-body">
                              <h4 className="text-dark mb-1 font-size-1">
                                {" "}
                                Secure LDAP{" "}
                              </h4>
                            </div>
                          </div>
                        </th>
                        <td className="text-center text-body p-3"></td>
                        <td className="text-center border-left border-right p-3"></td>
                        <td className="text-center p-3">
                          <i className="fas fa-check-circle text-success mr-2"></i>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row" className="bg-white p-3"></th>
                        <td className="bg-white text-center p-3">
                          <div className="card-footer border-0 pt-0">
                            <small className="d-block text-body">
                              <span className="font-size-2">₹</span>
                              <span className="font-size-3 font-weight-bold text-dark">
                                136
                              </span>
                              / user/ mon{" "}
                            </small>
                            <a
                              className="js-go-to position-static btn d-block btn-danger text-white transition-3d-hover"
                              href="#contact">
                              Buy Starter
                            </a>
                            <span className="small text-center d-block mt-2">
                              {" "}
                              Offer for limited period{" "}
                            </span>
                          </div>
                        </td>
                        <td className="bg-white text-center border-left border-right p-3">
                          <div className="card-footer border-0 pt-0">
                            <small className="d-block text-body">
                              <span className="font-size-2">₹</span>
                              <span className="font-size-3 font-weight-bold text-dark">
                                736
                              </span>{" "}
                              / user / mon{" "}
                            </small>
                            <a
                              className="js-go-to position-static btn btn-danger d-block text-white transition-3d-hover"
                              href="#contact">
                              Buy Standard
                            </a>
                            <span className="small text-center d-block mt-2">
                              {" "}
                              Offer for limited period{" "}
                            </span>
                          </div>
                        </td>
                        <td className="bg-white text-center p-3">
                          <div className="card-footer border-0 pt-0">
                            <small className="d-block text-body">
                              <span className="font-size-2">₹</span>
                              <span className="font-size-3 font-weight-bold text-dark">
                                1380
                              </span>{" "}
                              / user / mon{" "}
                            </small>
                            <a
                              className="js-go-to position-static btn btn-danger d-block text-white transition-3d-hover"
                              href="#contact">
                              Buy Plus
                            </a>
                            <span className="small text-center d-block mt-2">
                              {" "}
                              Offer for limited period{" "}
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="container ">
                <p className="small text-dark">
                  {" "}
                  Business Starter, Business Standard, and Business Plus plans
                  can be purchased for a maximum of 300 users. There is no
                  minimum or maximum user limit for Enterprise plans.{" "}
                </p>
                <p className="small text-dark">
                  <span className="text-danger">*</span> Offer available to new
                  Google Workspace customers only. This introductory price is
                  only available for the first 20 users added, for 12 months.
                  Standard pricing will apply to all users after 12 months.
                  Customers may cancel at any time.
                </p>
              </div>
            </div>
          </div>

          <div
            className="container space-bottom-2 "
            style={{ paddingTop: "1rem !important" }}>
            <div className="w-md-80 w-lg-60 text-center mx-md-auto mb-5 mb-md-9">
              <h2>Benefits of Google Workspace</h2>
            </div>

            <div className="row mb-5">
              <div className="col-md-6 col-lg-4 mb-3 mb-lg-0">
                <a
                  className="card card-bg-light h-100 shadow-none overflow-hidden transition-3d-hover"
                  href="#">
                  <div className="row align-items-center">
                    <div className="col-9 col-md-7">
                      <div className="py-4 pl-4">
                        <h2 className="h4">
                          {" "}
                          High-quality video meetings up to 250{" "}
                        </h2>
                      </div>
                    </div>
                    <div className="col-3 col-md-5 h-100">
                      <img
                        className="position-absolute top-0 right-0 w-100 h-100"
                        src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/svg/illustrations/video-conferencing.svg"
                        alt="SVG"
                      />
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-6 col-lg-4 mb-3 mb-lg-0">
                <a
                  className="card card-bg-light h-100 shadow-none overflow-hidden transition-3d-hover"
                  href="#">
                  <div className="row align-items-center">
                    <div className="col-8 col-md-6">
                      <div className="py-4 pl-4">
                        <h2 className="h4">Real-Time Collaboration</h2>
                      </div>
                    </div>
                    <div className="col-4 col-md-6 h-100">
                      <img
                        className="position-absolute top-0 right-0 w-100 h-100"
                        src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/svg/illustrations/cloud-computing.svg"
                        alt="SVG"
                      />
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-6 col-lg-4">
                <a
                  className="card card-bg-light h-100 shadow-none overflow-hidden transition-3d-hover"
                  href="#">
                  <div className="row align-items-center">
                    <div className="col-8 col-md-6">
                      <div className="py-4 pl-4">
                        <h2 className="h4">Enhance Productivity </h2>
                      </div>
                    </div>
                    <div className="col-4 col-md-6 h-100">
                      <img
                        className="position-absolute top-0 right-0 w-100 h-100"
                        src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/svg/illustrations/medal.svg"
                        alt="SVG"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="row mx-n2">
              <div className="col-md-6 col-lg-4 mb-3 mb-lg-0">
                <a
                  className="card card-bg-light h-100 shadow-none overflow-hidden transition-3d-hover"
                  href="#">
                  <div className="row align-items-center">
                    <div className="col-9 col-md-7">
                      <div className="py-4 pl-4">
                        <h2 className="h4">Unlimited Storage </h2>
                      </div>
                    </div>
                    <div className="col-3 col-md-5 h-100">
                      <img
                        className="position-absolute top-0 right-0 w-100 h-100"
                        src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/svg/illustrations/drag-n-drop.svg"
                        alt="SVG"
                      />
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-6 col-lg-4 mb-3 mb-lg-0">
                <a
                  className="card card-bg-light h-100 shadow-none overflow-hidden transition-3d-hover"
                  href="#">
                  <div className="row align-items-center">
                    <div className="col-8 col-md-6">
                      <div className="py-4 pl-4">
                        <h2 className="h4">Easy Data Migration</h2>
                      </div>
                    </div>
                    <div className="col-4 col-md-6 h-100">
                      <img
                        className="position-absolute top-0 right-0 w-100 h-100"
                        src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/svg/illustrations/person-with-gallery.svg"
                        alt="SVG"
                      />
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-6 col-lg-4">
                <a
                  className="card card-bg-light h-100 shadow-none overflow-hidden transition-3d-hover"
                  href="#">
                  <div className="row align-items-center">
                    <div className="col-8 col-md-6">
                      <div className="py-4 pl-4">
                        <h2 className="h4"> Dedicated Support </h2>
                      </div>
                    </div>
                    <div className="col-4 col-md-6 h-100">
                      <img
                        className="position-absolute top-0 right-0 w-100 h-100"
                        src="https://dev1.satincorp.com/buy-google-workspace/wp-content/themes/buy-google-workspace-wp-themes-19032021/assets/svg/illustrations/support-man.svg"
                        alt="SVG"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="webinar-area ptb-110 pricing-area">
            <div className="container">
              <div className="webinar-inner" style={{ paddingTop: "5rem" }}>
                <div className="row m-0 align-items-center">
                  <div className="col-lg-12 col-md-12 p-0">
                    <div className="content section-title">
                      <h2>Try Google Workspace Free</h2>
                      <p>
                        See why millions of businesses love and rely on Google
                        Workspace for their business needs.
                      </p>
                      <a class="btn btn-primary" href="#contact">
                        Start Free Trial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <React.Fragment>
        {useScript(
          "https://salesiq.zoho.in/widget",
          "siqd501e20f5ff83957af2415d36330a0344fef3b83965c959b579f4a9444020527"
        )}
      </React.Fragment>
      <Link
        href="https://api.whatsapp.com/send/?phone=%2B917058222899&text=Hello,%20I%20am%20interested%20in%20%20buying%20Google%20Workspace%20licenses"
        target="_blank"
        className="floatWhatsApp">
        <img src="/images/icons/whatsApp.svg" alt="whatsapp" />
      </Link>
    </>
  );
};

export default ContactFormContent;
