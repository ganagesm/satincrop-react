import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/data-science/HeroBanner";
import Industries from "../components/Live/Industries";
// import Testimonials from "../components/data-science/Testimonials";
import Testimonials from "../components/Live/Testimonials";
import CaseStudiesSlider from "../components/data-science/CaseStudiesSlider";
import WhyTriosource from "../components/data-science/WhyTriosource";
import ComputerVisionAI from "../components/data-science/ComputerVisionAI";
import TechDetailsContent from "../components/data-science/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <ComputerVisionAI />
      <TechDetailsContent />
      <Industries />
      <WhyTriosource />
      <CaseStudiesSlider />
      <Testimonials />
      <Footer />
    </>
  )
}
export default Index;