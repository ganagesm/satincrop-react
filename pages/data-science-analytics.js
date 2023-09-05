import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/data-science/HeroBanner";
import Industries from "../components/Live/Industries";
// import Testimonials from "../components/data-science/Testimonials";
import CaseStudiesSlider from "../components/data-science/CaseStudiesSlider";
import WhyTriosource from "../components/data-science/WhyTriosource";
import ComputerVisionAI from "../components/data-science/ComputerVisionAI";
import TechDetailsContent from "../components/data-science/TechDetailsContent";
import Services from "../components/data-science/Services";
import WhyChooseSAT from "../components/data-science/WhyChooseSAT";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";

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
      <OurIndustry/>
      {/* <WhyTriosource /> */}
      <CaseStudiesPost />
      <BlogPostSlider />
      <Testimonials />
      <Footer />
    </>
  )
}
export default Index;