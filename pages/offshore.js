import React from "react";
import Navbar from "../components/Live/Navbar";
import OffshorePageBanner from "../components/Live/OffshorePageBanner";
import OffshoreServiceDetailsContent from "../components/Live/OffshoreServiceDetailsContent";
import OffshoreServices from "../components/Live/OffshoreServices";
import NearshoringTestimonials from "../components/Live/NearshoringTestimonials";
import Footer from "../components/Live/Footer";

const ServiceDetails = () => {
  return (
    <>
      <Navbar />
      <OffshorePageBanner
        pageTitle="Offshore Teams - Cost Savings and Global Talent Pool"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Offshore"
        bgImgClass="item-bg2"
      />
      <OffshoreServices />
      <OffshoreServiceDetailsContent />
      <NearshoringTestimonials />
      <Footer />
    </>
  );
};

export default ServiceDetails;
