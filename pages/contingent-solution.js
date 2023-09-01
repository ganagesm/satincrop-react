import React from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServiceDetailsContent from "../components/Services/ServiceDetailsContent";
import ContingentOverview from "../components/Live/ContingentOverview";
import NearshoringTestimonials from "../components/Live/NearshoringTestimonials";
import PartnerContent from "../components/Live/PartnerContent";
import OurIndustry from "../components/Common/OurIndustry";
import ContactForm from "../components/Contact/ContactForm";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import Footer from "../components/Live/Footer";
import Link from "next/link";

const ServiceDetails = () => {
  return (
    <>
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
            <Link href="#contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>

      <PartnerContent />
      <OurIndustry />
      {/* <ServiceDetailsContent /> */}
      <NearshoringTestimonials />
      <BlogPostSlider />
      <section className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Connect With Us</h2>
          </div>

          <div className="contact-form">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="contact-image">
                  <img src="/images/footer-img.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <ContactForm />
              </div>
            </div>
          </div>          
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServiceDetails;
