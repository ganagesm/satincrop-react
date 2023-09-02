import React from "react";
import Navbar from "../components/Live/Navbar";
import OnsitePageBanner from "../components/Live/OnsitePageBanner";
import OnsiteServiceDetailsContent from "../components/Live/OnsiteServiceDetailsContent";
import OnsiteServices from "../components/Live/OnsiteServices";
import NearshoringTestimonials from "../components/Live/NearshoringTestimonials";
import Footer from "../components/Live/Footer";
import Testimonials from "../components/Live/Testimonials";

const ServiceDetails = () => {
  return (
    <>
      <Navbar />
      <OnsitePageBanner
        pageTitle="Onsite Teams - Proximity and Collaboration"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Onsite"
        bgImgClass="item-bg2"
      />
      <OnsiteServices />
      <OnsiteServiceDetailsContent />
      <Testimonials />
      <Footer />
    </>
  );
};

export default ServiceDetails;
