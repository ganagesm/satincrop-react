import React from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BlogDetailsContent from "../components/Blog/BlogDetailsContent";
import Footer from "../components/Live/Footer";

const BlogDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        bgImgClass="item-bg3"
      />

      <BlogDetailsContent />

      <Footer />
    </>
  );
};

export default BlogDetails;
