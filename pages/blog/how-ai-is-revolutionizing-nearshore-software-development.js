import React from "react";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentHowAIRevolutionizingNearshoreSoftware from "../../components/Blog/BlogDetailsContentHowAIRevolutionizingNearshoreSoftware";
import Footer from "../../components/Live/Footer";

const BlogDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="How AI is Revolutionizing Nearshore Software Development: A Deep Dive"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentHowAIRevolutionizingNearshoreSoftware />
      <Footer />
    </>
  );
};

export default BlogDetails;
