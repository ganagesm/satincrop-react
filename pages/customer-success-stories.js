import React from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BlogThreeGrid from "../components/Blog/BlogThreeGrid";
import CustomerStoryGrid from "../components/Blog/CustomerStoryGrid";
import Footer from "../components/Live/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Customer Success Stories"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Customer Success Stories"
        bgImgClass="item-bg2"
      />

      {/* <BlogThreeGrid /> */}
      <CustomerStoryGrid />

      <Footer />
    </>
  );
};

export default Blog;
