import React from "react";
import Navbar from "../components/Live/Navbar";
import SwiftlyPageBanner from "../components/CaseStudies/SwiftlyPageBanner";
import BlogDetailsContent from "../components/CaseStudies/BlogDetailsContent";
import Footer from "../components/Live/Footer";

const BlogDetails = () => {
  return (
    <>
      <Navbar />

      <SwiftlyPageBanner
        pageTitle="Triosource's Successful Near Shoring Services for Swiftly"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Case Studies"
        bgImgClass="item-bg3"
      />

      <BlogDetailsContent />

      <Footer />
    </>
  );
};

export default BlogDetails;
