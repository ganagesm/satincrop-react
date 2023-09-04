import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/GCC/HeroBanner";
import Industries from "../components/GCC/Industries";
// import Testimonials from "../components/InternalAudit/Testimonials";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/GCC/Testimonials";
import CaseStudiesSlider from "../components/Common/CaseStudiesSlider";
import WhyTriosource from "../components/GCC/WhyTriosource";
import ComputerVisionAI from "../components/GCC/ComputerVisionAI";
import TechDetailsContent from "../components/GCC/TechDetailsContent";
import Services from "../components/GCC/Services";
import WhyChooseSAT from "../components/GCC/WhyChooseSAT";
import BlogPostSlider from "../components/Live/BlogPostSlider";


const Index = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <TechDetailsContent />
        
       {/* <Services />  */}
       <Industries /> 
      <WhyChooseSAT/>
      {/* <OurIndustry /> */}
      {/* <WhyTriosource /> */}
      {/* <CaseStudiesSlider /> */}
      <BlogPostSlider />
      <Testimonials />
      <Footer />
    </>
  )
}
export default Index;