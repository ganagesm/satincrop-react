import React from "react";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentChoosingRightAITrainedNearshore from "../../components/Blog/BlogDetailsContentChoosingRightAITrainedNearshore";
import Footer from "../../components/Live/Footer";

const BlogDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Choosing the Right AI-Trained Nearshore Software Development Team: A Comprehensive Guide"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentChoosingRightAITrainedNearshore />
      <Footer />
    </>
  );
};

export default BlogDetails;
