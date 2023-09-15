import React from "react";
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import FunFacts from "../components/Education/FunFacts";
import MainBanner from "../components/Semiconductor/MainBanner";
import TopFeaturedSolutions from "../components/Semiconductor/TopFeaturedSolutions";
import AboutAI from "../components/Semiconductor/AboutAI";
import Services from "../components/Semiconductor/Services";
import ComputerVisionAI from "../components/Semiconductor/ComputerVisionAI";
import ContactFormContent from "../components/Common/ContactFormContent";
import BlogPostSlider from "../components/Live/BlogPostSlider";

const Semiconductor = () => {
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
export default Semiconductor;