import React from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Live/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Privacy Policy"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Privacy Policy"
      />

      <div className="text-container ptb-110">
        <div className="container">
          <p>
            <h3>Overview</h3>
            <p>
              TrioSource (TS) has designed this current Privacy Policy to
              showcase our commitment to safeguarding privacy and personal data.
              This Privacy Policy pertains to and applies to the personal
              information of website visitors or users that might get collected
              via TrioSource. This could include collecting names, emails,
              telephone numbers, and any other information that can authenticate
              an individual's identity and could be used for business purposes.
              By agreeing to this Privacy Policy and continuing to use this
              website you are accepting the terms and conditions of this policy.
            </p>

            <h3>Information We Collect and How We Use It</h3>
            <p>
              Like most websites, we collect user information to provide better
              services. We gather personal information like a computer's
              Internet Protocol (IP) address, browser type, browser version,
              visited pages of our site, time and date of each visit, the time
              spent on specific pages, and other relevant statistics of users
              using our site. Similar data is collected when you interact with
              us by commenting on a blog, through our contact form, applying to
              our jobs or chatbot. The purpose of collecting this data is to
              offer our clients enhanced usability, troubleshooting, site
              maintenance, and to analyze the most visited parts of the website
              and its frequency. This helps us to evaluate audience response to
              TrioSource and make improvements wherever necessary.
            </p>

            <h3>Information Security</h3>
            <p>
              TS recognizes the sensitivity of protecting personal information
              and we aim to keep it secure. TrioSource strictly refrains from
              sharing your personal information with any third party without
              your consent. We adhere to a comprehensive procedure that involves
              administrative, physical security, and technical controls to
              protect your private information. Occasionally, we may use
              third-party tools and plugins. These might also assimilate the
              information necessary to offer improved services. These
              third-party tools and plugins follow their own set of privacy
              policies. We recommend that you inquire about these policies from
              the providers for a clear understanding.
            </p>

            <h3>Cookies</h3>
            <p>
              Cookies are small text files placed on your device by the sites
              you visit. Websites can read these files and recognize you when
              you return to a website. Like most websites, we automatically
              gather certain information and store it in log files. Also, when
              you visit our website, we may automatically collect certain
              information from your device. This information may include
              internet protocol (IP) addresses, browser type, internet service
              provider (ISP), referring/exit pages, operating system, date/time
              stamp, clickstream data, landing page, and referring URL. To
              collect this information, a cookie may be set on your computer or
              device when you visit our Services. Cookies contain a small amount
              of information that allows our web servers to recognize you. We
              store information that we collect through cookies, log files,
              and/or clear gifs to record your preferences. We may also
              automatically collect information about your use of features of
              our Services, about the functionality of our Services, frequency
              of visits, and other information related to your interactions with
              the Services. We may track your use across different websites and
              services. Session cookies are deleted as soon as you leave the
              page or close the web browser.
            </p>

            <h3>Cookie Functions</h3>
            <p>
              Session Cookies: A Session cookie remains as long as your browser
              session is active. These cookies aim to help you avoid any
              browsing inconvenience during an active session. These cookies
              allow websites to link with user actions during a browsing session
              and expire when the session ends. Session cookies assist the user
              while navigating sites, and allow the user to connect with secure
              webpage parts when logged in.
            </p>

            <h3>Privacy Policy Changes</h3>
            <p>
              This policy is effective and will remain so concerning any
              alterations in its provision in the future. This will take effect
              quickly after updating on this page. We reserve the right to
              modify or update this privacy policy at any time, and we suggest
              you check them frequently. Your continued use of this webpage,
              even after changes to the privacy policy, will be considered as
              your acknowledgment and consent to the newly formed Privacy
              Policy.
            </p>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
