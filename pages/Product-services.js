import React from "react";
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import FunFacts from "../components/Education/FunFacts";
import MainBanner from "../components/ItproductServices/MainBanner";
import TopFeaturedSolutions from "../components/ItproductServices/TopFeaturedSolutions";
import AboutAI from "../components/ItproductServices/AboutAI";
import Services from "../components/ItproductServices/Services";
import ComputerVisionAI from "../components/ItproductServices/ComputerVisionAI";
import ContactFormContent from "../components/Common/ContactFormContent";
import BlogPostSlider from "../components/Live/BlogPostSlider";

const ItproductServices = () => {
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
export default ItproductServices;