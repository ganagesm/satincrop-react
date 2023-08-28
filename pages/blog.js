import React from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BlogThreeGrid from "../components/Blog/BlogThreeGrid";
import Footer from "../components/Live/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
        bgImgClass="item-bg2"
      />

      <BlogThreeGrid />

      <Footer />
    </>
  );
};

export default Blog;
