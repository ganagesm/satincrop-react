import React from "react";
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import MainBanner from "../components/Careers/MainBanner";
import FunFacts from "../components/Careers/FunFacts";
import TopFeaturedSolutions from "../components/Careers/TopFeaturedSolutions";
import AboutAI from "../components/Careers/AboutAI";
import Services from "../components/Careers/Services";
import ComputerVisionAI from "../components/Careers/ComputerVisionAI";
import ContactFormContent from "../components/Common/ContactFormContent";
import Team from "../components/Careers/Team";
import Award from "../components/Careers/Award";
import GoGlobal from "../components/Careers/GoGlobal";
import Cta from "../components/Careers/Cta";
import Rating from "../components/Careers/Rating";

const Careers = () => {
  return (
    <>
      {/* <TopHeader /> */}

      <Navbar />

      <MainBanner />

      {/* <FunFacts /> */}

      <TopFeaturedSolutions />

      <AboutAI />

      <Services />

      <GoGlobal />

      <Cta />

      <Team />

      <Award />

      <Rating />
     
      {/* <ComputerVisionAI /> */}

      {/* <PricingPlan /> */}

      {/* <BlogPostSlider /> */}
      
      {/* <LatestBlog />  */}
       <ContactFormContent />
      {/* <Newsletter /> */}

      <Footer />

    </>
  );
};
export default Careers;