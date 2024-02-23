import React from "react";
import Head from 'next/head';
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactFormContent from "../components/Contact/ContactFormContent";
import Services from "../components/Contact/Services";
import Footer from "../components/Live/Footer";

const Contact = () => {
  return (
    <>
    <Head>
        <title>Get in Touch with SA Technologies Experts | Contact Us Today </title>
        <meta property="og:title" content="Get in Touch with SA Technologies Experts | Contact Us Today" key="title" />
        <meta name="description" content="Have questions or need assistance? Contact SA Technologies today. We're here to help you achieve your business goals." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        bgImgClass="item-bg12"
      />

      <ContactFormContent />
      <Services />

      <Footer />
    </>
  );
};

export default Contact;
