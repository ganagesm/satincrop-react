import React from "react";
import Navbar from "../components/Live/Navbar";
import SwiftlyPageBanner from "../components/CaseStudies/SwiftlyPageBanner";
import SuperchargesBlogDetailsContent from "../components/CaseStudies/SuperchargesBlogDetailsContent";
import Footer from "../components/Live/Footer";

const BlogDetails = () => {
  return (
    <>
      <Navbar />

      <SwiftlyPageBanner
        pageTitle="Triosource Supercharges Sharpz's React Native App Development"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Case Studies"
        bgImgClass="item-bg3"
      />

      <SuperchargesBlogDetailsContent />

      <Footer />
    </>
  );
};

export default BlogDetails;
