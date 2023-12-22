import React from "react";
import Head from 'next/head';
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/Faq/FaqContent";

const Investors = () => {
  return (
    <>
      <Head>
        <title>SA Technologies | Leading IT Consulting: AI Solutions, Digital Engineering, Enterprise Modernization</title>
        <meta property="og:title" content="SA Technologies | Leading IT Consulting: AI Solutions, Digital Engineering, Enterprise Modernization" key="title" />
        <meta name="description" content="SA Technologies - Your Trusted IT Consulting and Offshore Partner with 20+ years of experience, serving 500+ clients. Elevate your business with AI Solutions, Digital Engineering, and Enterprise Modernization Services." key="" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Investors"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Investors"
        bgImgClass="item-bg1"
      />

      <FaqContent />

      <Footer />
    </>
  );
};

export default Investors;