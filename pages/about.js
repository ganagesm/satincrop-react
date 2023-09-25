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
        <title>Discover SA Technologies: Your Trusted Technology Partner   </title>
        <meta property="og:title" content="Discover SA Technologies: Your Trusted Technology Partner  " key="title" />
        <meta name="description" content="Learn about SA Technologies mission, expertise, and commitment to innovation. Join us in shaping the future of technology." key="description" />
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
