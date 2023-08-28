import React from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CaseStudiesGrid from "../components/Live/CaseStudiesGrid";
import Footer from "../components/Live/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Case Studies"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Case Studies"
        bgImgClass="item-bg2"
      />

      <CaseStudiesGrid />

      <Footer />
    </>
  );
};

export default Blog;
