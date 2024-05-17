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
            <strong>
              We don't share your information with third-party entities.
            </strong>
          </p>
          <p>
            <h3>Overview</h3>
            <p>
              {" "}
              SA Technologies (SAT) have crafted this existing Privacy Policy to
              analyze our commitment to securing privacy and personal data. This
              Privacy Policy is in reference and applies to the personal
              information of website visitors or users that might get collected
              via SA Technologies. This may involve collecting names, emails,
              telephone numbers and any other information that can prove a
              person’s individuality and could be used for business. By agreeing
              to this Privacy Policy and continuing to use this website you will
              be accepting the terms and conditions of this policy.
            </p>

            <h3>Information we gather and its utilization </h3>
            <p>
              {" "}
              Like every other website, we gather the user’s information to
              offer them better service. We collect the personal information
              like computers internet protocol (IP) address, browser type,
              browser version, visited pages of our site, time and date of every
              individual visit, the time spent on specific pages and other
              relevant statistics of the users using our site. This similar data
              is collected when you interact with us by commenting on blog,
              through contact us, apply to our job or chatbot. The intention of
              collecting this data is to offer our clients with enhanced
              usability, troubleshooting, site maintenance, and to study mostly
              visited parts of the website and its frequency. With this, we can
              study audience response to SA Technologies and improve wherever we
              can.
            </p>

            <h3>Information Security</h3>
            <p>
              {" "}
              SAT understands how sensitive it is when it comes to preventing
              one’s personal information and we intend to keep it secure. SA
              Technologies strictly refrain from sharing your personal
              information to any third party without your consent. We follow a
              thorough procedure that involves administrative, physical
              security, and technical controls to protect your private
              information. It is possible that from time-to-time we may indulge
              in using 3rd party tools and plugins. These might also assimilate
              the information essential to offer improved services. These 3rd
              party tools and plugins follow their own set of privacy policies.
              It is suggested that you inquire about these policies of providers
              for a clear understanding.
            </p>

            <h3>Cookies</h3>
            <p>
              Cookies are tiny text files, placed on your device by the sites
              you visit. The websites can read these files and recognize you
              when you return to a website. As is true of most websites, we
              gather certain information automatically and store it in log
              files. In addition, when you visit our website, we may collect
              certain information automatically from your device. This
              information may include internet protocol (IP) addresses, browser
              type, internet service provider (ISP), referring/exit pages,
              operating system, date/time stamp, clickstream data, landing page,
              and referring URL. To collect this information, a cookie may be
              set on your computer or device when you visit our Services.
              Cookies contain a small amount of information that allows our web
              servers to recognize you. We store information that we collect
              through cookies, log files, and/or clear gifs to record your
              preferences. We may also automatically collect information about
              your use of features of our Services, about the functionality of
              our Services, frequency of visits, and other information related
              to your interactions with the Services. We may track your use
              across different websites and services. Session cookies are
              deleted as soon as you leave the page or close web browser.
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
