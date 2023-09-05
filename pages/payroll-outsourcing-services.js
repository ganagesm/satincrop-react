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

const ServiceDetails = () => {
  return (
    <>
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
      <ContactFormContent/>
      <Footer />
    </>
  );
};

export default ServiceDetails;
