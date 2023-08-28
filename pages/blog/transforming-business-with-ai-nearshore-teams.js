import React from "react";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentTransformingBusinessOperationsAI from "../../components/Blog/BlogDetailsContentTransformingBusinessOperationsAI";
import Footer from "../../components/Live/Footer";

const BlogDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Transforming Business Operations with AI-Trained Nearshore Software Development Teams"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentTransformingBusinessOperationsAI />
      <Footer />
    </>
  );
};

export default BlogDetails;
