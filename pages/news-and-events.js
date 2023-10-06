import React from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BlogThreeGrid from "../components/Blog/BlogThreeGrid";
import NewsGrid from "../components/Blog/NewsGrid";
import Footer from "../components/Live/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="News And Events"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News And Events"
        bgImgClass="item-bg2"
      />

      {/* <BlogThreeGrid /> */}
      <NewsGrid />

      <Footer />
    </>
  );
};

export default Blog;
