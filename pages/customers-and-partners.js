import React, { Component } from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CustomersAndPartnersContent from "../components/Live/CustomersAndPartnersContent";
import Footer from "../components/Live/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Featured Customers & Partners"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Customers & Partners"
        bgImgClass="item-bg1"
      />

      {/* <AboutContact /> */}

      <CustomersAndPartnersContent />

      <Footer />
    </>
  );
};

export default About;
