import React from "react";
import Navbar from "../components/Live/Navbar";
import GenerativeAIPageBanner from "../components/CaseStudies/GenerativeAIPageBanner";
import GenerativeAIBlogDetailsContent from "../components/CaseStudies/GenerativeAIBlogDetailsContent";
import Footer from "../components/Live/Footer";

const BlogDetails = () => {
  return (
    <>
      <Navbar />

      <GenerativeAIPageBanner
        pageTitle="Harnessing Generative AI in Custom Development Environments"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Case Studies"
        bgImgClass="item-bg3"
      />

      <GenerativeAIBlogDetailsContent />

      <Footer />
    </>
  );
};

export default BlogDetails;
