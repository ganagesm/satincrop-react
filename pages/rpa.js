import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/rpa/HeroBanner";
import Industries from "../components/Live/Industries";
// import Testimonials from "../components/rpa/Testimonials";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import CaseStudiesSlider from "../components/Common/CaseStudiesSlider";
import WhyTriosource from "../components/rpa/WhyTriosource";
import ComputerVisionAI from "../components/rpa/ComputerVisionAI";
import TechDetailsContent from "../components/rpa/TechDetailsContent";
import Services from "../components/rpa/Services";
import WhyChooseSAT from "../components/rpa/WhyChooseSAT";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      {/* <ComputerVisionAI /> */}
      <TechDetailsContent />
      <Services />
      {/* <Industries /> */}
      <WhyChooseSAT/>
      <OurIndustry />
      {/* <WhyTriosource /> */}
      <CaseStudiesSlider />
      <Testimonials />
      <Footer />
    </>
  )
}
export default Index;