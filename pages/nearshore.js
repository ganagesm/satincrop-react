import React from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServiceDetailsContent from "../components/Services/ServiceDetailsContent";
import NearshoringServices from "../components/Live/NearshoringServices";
import NearshoringTestimonials from "../components/Live/NearshoringTestimonials";
import Footer from "../components/Live/Footer";
import Testimonials from "../components/Live/Testimonials";

const ServiceDetails = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Nearshore Development Squads - Skilled Experts Aligned with Your Time Zone"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Nearshore"
        bgImgClass="item-bg2"
      />
      <NearshoringServices />
      <ServiceDetailsContent />
      <Testimonials />
      <Footer />
    </>
  );
};

export default ServiceDetails;
