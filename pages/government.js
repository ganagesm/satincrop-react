import React from "react";
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import FunFacts from "../components/Education/FunFacts";
import MainBanner from "../components/Government/MainBanner";
import TopFeaturedSolutions from "../components/Government/TopFeaturedSolutions";
import AboutAI from "../components/Government/AboutAI";
import Services from "../components/Government/Services";
import ComputerVisionAI from "../components/Government/ComputerVisionAI";
import ContactFormContent from "../components/Common/ContactFormContent";
import BlogPostSlider from "../components/Live/BlogPostSlider";

const Government = () => {
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
export default Government;