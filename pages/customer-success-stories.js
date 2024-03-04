import React from "react";
import Head from "next/head";
import Footer from "../components/Live/Footer";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BlogThreeGrid from "../components/Blog/BlogThreeGrid";
import CustomerStoryGrid from "../components/Blog/CustomerStoryGrid";

const Blog = () => {
  return (
    <>
      <Head>
        <title>
          Customer Success Stories: SA Technology Triumphs in Driving Business
          Excellence
        </title>
        <meta
          property="og:title"
          content="Customer Success Stories: SA Technology Triumphs in Driving Business Excellence"
          key="title"
        />
        <meta
          name="description"
          content="Explore SA Technologies customer success stories and witness the transformative impact of our solutions. From enhanced efficiency to accelerated growth, discover how we empower businesses to achieve their goals and exceed expectations."
          key=""
        />
      </Head>
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
