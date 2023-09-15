import React from "react";
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import FunFacts from "../components/Education/FunFacts";
import MainBanner from "../components/MediaEntertainment/MainBanner";
import TopFeaturedSolutions from "../components/MediaEntertainment/TopFeaturedSolutions";
import AboutAI from "../components/MediaEntertainment/AboutAI";
import Services from "../components/MediaEntertainment/Services";
import ComputerVisionAI from "../components/MediaEntertainment/ComputerVisionAI";
import ContactFormContent from "../components/Common/ContactFormContent";
import BlogPostSlider from "../components/Live/BlogPostSlider";

const Healthcare = () => {
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
export default Healthcare;