import React from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactFormContent from "../components/Contact/ContactFormContent";
import Services from "../components/Contact/Services";
import Footer from "../components/Live/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        bgImgClass="item-bg12"
      />

      <ContactFormContent />
      <Services />

      <Footer />
    </>
  );
};

export default Contact;
