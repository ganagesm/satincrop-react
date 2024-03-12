import React from "react";
import Navbar from "../components/Live/Navbar";
import SwiftlyPageBanner from "../components/CaseStudies/SwiftlyPageBanner";
import BlogDetailsContent from "../components/CaseStudies/BlogDetailsContent";
import Footer from "../components/Live/Footer";
import Head from "next/head";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>Swiftly: SA Technologies Case Studies Unveiled</title>
        <meta
          property="og:title"
          content="Swiftly: SA Technologies Case Studies Unveiled"
          key="title"
        />
        <meta
          name="description"
          content="Explore Swiftly SA Technologies case studies offer insights into our tailored solutions and their impact on client outcomes. Explore our success stories and see how we empower businesses"
          key=""
        />
      </Head>

      <Navbar />
      <SwiftlyPageBanner
        pageTitle="Triosource's Successful Near Shoring Services for Swiftly"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Case Studies"
        bgImgClass="item-bg3"
      />

      <BlogDetailsContent />

      <Footer />
    </>
  );
};

export default BlogDetails;
