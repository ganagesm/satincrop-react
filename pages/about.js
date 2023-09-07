import React, { Component } from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutContact from "../components/About/AboutContent";
import PartnerContent from "../components/Live/PartnerContent";
import Testimonials from "../components/Live/Testimonials";
import Footer from "../components/Live/Footer";
import Services from "../components/About/Services";
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About &#8211; SA Technologies   </title>
        <meta property="og:title" content="About &#8211; SA Technologies  " key="title" />
        <meta name="description" content="Achieve Sarbanes-Oxley (SOX) compliance with SA Technologies. Our internal audit solutions simplify the process, reduce costs, and improve efficiency for your organization." key="description" />
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
        bgImgClass="item-bg1"
      />

      <AboutContact />
      <PartnerContent />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
};

export default About;
