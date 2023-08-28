import React from "react";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentFutureSoftwareDevelopment from "../../components/Blog/BlogDetailsContentFutureSoftwareDevelopment";
import Footer from "../../components/Live/Footer";

const BlogDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="The Future of Software Development: Benefits of AI-Trained Nearshore Teams"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentFutureSoftwareDevelopment />
      <Footer />
    </>
  );
};

export default BlogDetails;
