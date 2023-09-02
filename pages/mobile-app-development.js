import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/mobile-app-development/HeroBanner";
import WhyTriosource from "../components/mobile-app-development/WhyTriosource";
// import Testimonials from "../components/mobile-app-development/Testimonials";
import BlogPost from "../components/mobile-app-development/BlogPost";
import ComputerVisionAI from "../components/mobile-app-development/ComputerVisionAI";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import TechDetailsContent from "../components/mobile-app-development/TechDetailsContent";

import WhyChooseSAT from "../components/mobile-app-development/WhyChooseSAT";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import BlogPostSlider from "../components/Live/BlogPostSlider";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <ComputerVisionAI />
      <TechDetailsContent />
      <WhyChooseSAT/>
      <OurIndustry/>
      <BlogPostSlider />
      <CaseStudiesSlider />
      <Testimonials />
      <Footer />
    </>
  )
}
export default Index;