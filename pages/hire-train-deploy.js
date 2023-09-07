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
        <title>Hire-Train-Deploy Model for Digital Transformation | SA Technologies Inc. </title>
        <meta property="og:title" content="Hire-Train-Deploy Model for Digital Transformation | SA Technologies Inc." key="title" />
        <meta name="description" content="Experience the cutting-edge Hire-Train-Deploy model, streamlining recruitment, skills training, and seamless integration into client operations, yielding cost and time savings. " key="description" />
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
            <Link href="#contact" className="btn btn-primary">
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
