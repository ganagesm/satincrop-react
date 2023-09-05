import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/AIDrivenIoT/HeroBanner";
import Industries from "../components/Live/Industries";
import Testimonials from "../components/Live/Testimonials";
import AboutUs from "../components/AIDrivenIoT/AboutUs";
import WhyChooseUs from "../components/AIDrivenIoT/WhyChooseUs";
import OurIndustry from "../components/Common/OurIndustry";
// import Testimonials from "../components/AIDrivenIoT/Testimonials";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import WhyTriosource from "../components/AIDrivenIoT/WhyTriosource";
import ComputerVisionAI from "../components/AIDrivenIoT/ComputerVisionAI";
import TechDetailsContent from "../components/AIDrivenIoT/TechDetailsContent";
import Services from "../components/AIDrivenIoT/Services";
import WhyChooseSAT from "../components/AIDrivenIoT/WhyChooseSAT";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      {/* <ComputerVisionAI /> */}
      <TechDetailsContent />
      <Services />
      {/* <AboutUs /> */}
      <WhyChooseSAT />
      <OurIndustry />
      <CaseStudiesSlider />
      <Testimonials />
      <Footer />
    </>
  )
}
export default Index;