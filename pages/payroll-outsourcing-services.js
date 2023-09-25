import React from "react";
import Navbar from "../components/Live/Navbar";
import OnsitePageBanner from "../components/Live/OnsitePageBanner";
import Testimonials from "../components/Live/Testimonials";
import PayrolloutsourcingServices from "../components/Live/PayrolloutsourcingServices"
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
        <title>Simplify Payroll Management with SA Technologies Services </title>
        <meta property="og:title" content="Simplify Payroll Management with SA Technologies Services " key="title" />
        <meta name="description" content=" Achieve payroll accuracy and compliance with SA Technologies payroll outsourcing services. Focus on your core business." key="description" />
      </Head>

      <Navbar />
      <OnsitePageBanner
        pageTitle="Streamlined Payrolls, Amplified Results:
        SA Technologies at Your Service"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Payroll Outsourcing Services"
        bgImgClass="item-bg11"
      />
      <PayrolloutsourcingServices />


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
