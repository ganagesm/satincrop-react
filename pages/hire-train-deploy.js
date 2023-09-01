import React from "react";
import Navbar from "../components/Live/Navbar";
import OnsitePageBanner from "../components/Live/OnsitePageBanner";
import HiretraindeployServices from "../components/Live/HiretraindeployServices";
import NearshoringTestimonials from "../components/Live/NearshoringTestimonials";
import Link from "next/link";
import PartnerContent from "../components/Live/PartnerContent";
import OurIndustry from "../components/Common/OurIndustry";
import ContactForm from "../components/Contact/ContactForm";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import Footer from "../components/Live/Footer";

const ServiceDetails = () => {
  return (
    <>
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

      <NearshoringTestimonials />

      <BlogPostSlider />
      <section className="contact-area pb-100">
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
