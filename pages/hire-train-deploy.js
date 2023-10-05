import React from "react";
import Navbar from "../components/Live/Navbar";
import OnsitePageBanner from "../components/Live/OnsitePageBanner";
import HiretraindeployServices from "../components/Live/HiretraindeployServices";
import Testimonials from "../components/Live/Testimonials";
import Link from "next/link";
import PartnerContent from "../components/Live/PartnerContent";
import OurIndustry from "../components/Common/OurIndustry";
import ContactForm from "../components/Contact/ContactForm";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import Footer from "../components/Live/Footer";
import ContactFormContent from "../components/Common/ContactFormContent";
import Head from 'next/head';

const ServiceDetails = () => {
  return (
    <>
    <Head>
        <title>End-to-End Workforce Solutions with Hire Train Deploy | SA Technologies  </title>
        <meta property="og:title" content="End-to-End Workforce Solutions with Hire Train Deploy | SA Technologies " key="title" />
        <meta name="description" content="Embrace the future with SA Technologies HTD model. Transform your workforce with our next-gen staffing approach." key="description" />
      </Head>

      <Navbar />
      <OnsitePageBanner
        pageTitle="Hire, Train, deploy: Nurturing Talent from Start to Success."
        homePageUrl="/"
        homePageText="Home"
        activePageText="Hire, Train, deploy"
        bgImgClass="item-bg10"
      />
      <HiretraindeployServices />
      

      <div className="col-lg-12 col-md-12">
          <div className="ai-all-services-btn ptb-50">
            <Link href="/contact-us/" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>

      <PartnerContent />

      <OurIndustry />

      <Testimonials />

      <BlogPostSlider />
      <ContactFormContent />
      <Footer />
    </>
  );
};

export default ServiceDetails;
