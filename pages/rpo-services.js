import React from "react";
import Navbar from "../components/Live/Navbar";
import OffshorePageBanner from "../components/Live/OffshorePageBanner";
import RpoServiceDetailsContent from "../components/Live/RpoServiceDetailsContent";
import RpoServices from "../components/Live/RpoServices";
import Testimonials from "../components/Live/Testimonials";
import Footer from "../components/Live/Footer";
import Link from "next/link";
import PartnerContent from "../components/Live/PartnerContent";
import OurIndustry from "../components/Common/OurIndustry";
import ContactForm from "../components/Contact/ContactForm";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import Head from 'next/head';

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>RPO Services | Talent Acquisition Solutions | SA Technologies   </title>
        <meta property="og:title" content="RPO Services | Talent Acquisition Solutions | SA Technologies  " key="title" />
        <meta name="description" content="Discover SA Technologies' comprehensive RPO services, from End-to-End RPO to Project RPO. Elevate your talent acquisition with cost-effective, technology-driven solutions. " key="description" />
      </Head>

      <Navbar />
      <OffshorePageBanner
        pageTitle="SA Technologies: Crafting Future Workforces through RPO Excellence"
        homePageUrl="/"
        homePageText="Home"
        activePageText="RPO"
        bgImgClass="item-bg9"
      />
      <RpoServices />
      {/* <RpoServiceDetailsContent /> */}
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
