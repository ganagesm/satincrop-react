import React, { Component } from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutContact from "../components/About/AboutContent";
import PartnerContent from "../components/Live/PartnerContent";
import NearshoringTestimonials from "../components/Live/NearshoringTestimonials";
import Footer from "../components/Live/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
        bgImgClass="item-bg1"
      />

      <AboutContact />
      <PartnerContent />
      <NearshoringTestimonials />
      <Footer />
    </>
  );
};

export default About;
