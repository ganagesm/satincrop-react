import React from "react";
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import FunFacts from "../components/Education/FunFacts";
import MainBanner from "../components/Retail/MainBanner";
import TopFeaturedSolutions from "../components/Retail/TopFeaturedSolutions";
import AboutAI from "../components/Retail/AboutAI";
import Services from "../components/Retail/Services";
import ComputerVisionAI from "../components/Retail/ComputerVisionAI";
import ContactFormContent from "../components/Common/ContactFormContent";
import BlogPostSlider from "../components/Live/BlogPostSlider";

const Retail = () => {
  return (
    <>
      {/* <TopHeader /> */}

      <Navbar />

      <MainBanner />

      {/* <FunFacts /> */}

      <TopFeaturedSolutions />

      <AboutAI />

      <Services />

      <ComputerVisionAI />

      {/* <PricingPlan /> */}

      <BlogPostSlider />
      
      {/* <LatestBlog />  */}
       <ContactFormContent />
      {/* <Newsletter /> */}

      <Footer />

    </>
  );
};
export default Retail;