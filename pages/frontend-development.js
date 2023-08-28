import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/frontendDevelopment/HeroBanner";
import AboutUs from "../components/frontendDevelopment/AboutUs";
import Industries from "../components/Live/Industries";
import Testimonials from "../components/Live/Testimonials";
// import Testimonials from "../components/frontendDevelopment/Testimonials";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import WhyTriosource from "../components/frontendDevelopment/WhyTriosource";
import ComputerVisionAI from "../components/frontendDevelopment/ComputerVisionAI";
import TechDetailsContent from "../components/frontendDevelopment/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <ComputerVisionAI />
      <TechDetailsContent />
      {/* <AboutUs /> */}
      <Industries />
      <WhyTriosource />
      <CaseStudiesSlider />
      <Testimonials />
      <Footer />
    </>
  )
}
export default Index;