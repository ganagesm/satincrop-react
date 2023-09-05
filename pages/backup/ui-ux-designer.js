import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Industries from "../components/Live/Industries";
// import Testimonials from "../components/Live/Testimonials";
import HeroBanner from "../components/uiux/HeroBanner";
import WhyTriosource from "../components/uiux/WhyTriosource";
// import Testimonials from "../components/uiux/Testimonials";
import BlogPost from "../components/uiux/BlogPost";
import ComputerVisionAI from "../components/uiux/ComputerVisionAI";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import TechDetailsContent from "../components/uiux/TechDetailsContent";
import Services from "../components/uiux/Services";
import WhyChooseSAT from "../components/uiux/WhyChooseSAT";
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
      {/* <TechDetailsContent /> */}
      <Services />
      {/* <Industries /> */}
      <WhyChooseSAT/>
      <OurIndustry/>
      {/* <BlogPost /> */}
      <CaseStudiesSlider />
      {/* <CaseStudiesPost /> */}
      <BlogPostSlider />
      <Testimonials />
      <Footer />
    </>
  )
}
export default Index;