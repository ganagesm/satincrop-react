import React from "react";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentAITrainedNearshoreSoftware from "../../components/Blog/BlogDetailsContentAITrainedNearshoreSoftware";
import Footer from "../../components/Live/Footer";

const BlogDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Ultimate Guide to AI-Trained Nearshore Software Development | TrioSource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentAITrainedNearshoreSoftware />
      <Footer />
    </>
  );
};

export default BlogDetails;
