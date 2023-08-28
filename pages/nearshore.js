import React from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServiceDetailsContent from "../components/Services/ServiceDetailsContent";
import NearshoringServices from "../components/Live/NearshoringServices";
import NearshoringTestimonials from "../components/Live/NearshoringTestimonials";
import Footer from "../components/Live/Footer";

const ServiceDetails = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Nearshore Development Teams - Talent in your time zone"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Nearshore"
        bgImgClass="item-bg2"
      />
      <NearshoringServices />
      <ServiceDetailsContent />
      <NearshoringTestimonials />
      <Footer />
    </>
  );
};

export default ServiceDetails;
