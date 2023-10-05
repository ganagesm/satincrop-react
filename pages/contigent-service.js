import React from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServiceDetailsContent from "../components/Services/ServiceDetailsContent";
import ContingentOverview from "../components/Live/ContingentOverview";
import Testimonials from "../components/Live/Testimonials";
import PartnerContent from "../components/Live/PartnerContent";
import OurIndustry from "../components/Common/OurIndustry";
import ContactForm from "../components/Contact/ContactForm";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import Footer from "../components/Live/Footer";
import ContactFormContent from "../components/Common/ContactFormContent";
import Link from "next/link";
import Head from 'next/head';

const ServiceDetails = () => {
  return (
    <>
    <Head>
        <title>Optimize Your Workforce with Contingent Staffing | SA Technologies  </title>
        <meta property="og:title" content="Optimize Your Workforce with Contingent Staffing | SA Technologies " key="title" />
        <meta name="description" content="Explore SA Technologies contingent workforce solutions. Scale your workforce efficiently with our staffing expertise." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Elevate Your Talent Game with Tailored Contingent Solutions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contingent"
        bgImgClass="item-bg8"
      />
      <ContingentOverview />

        <div className="col-lg-12 col-md-12">
          <div className="ai-all-services-btn ptb-50">
            <Link href="/contact-us/" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>

      <PartnerContent />
      <OurIndustry />
      {/* <ServiceDetailsContent /> */}
      <Testimonials />
      <BlogPostSlider />
      <ContactFormContent />

      <Footer />
    </>
  );
};

export default ServiceDetails;
