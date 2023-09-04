
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import WhyChooseSAT from "../components/UIUXSolutions/WhyChooseSAT";
import Services from "../components/UIUXSolutions/Services";
import HeroBanner from "../components/UIUXSolutions/HeroBanner";
import FunFacts from "../components/Live/FunFacts";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import TechDetailsContent from "../components/UIUXSolutions/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
       <TechDetailsContent />
      <Services />
      <WhyChooseSAT />
      <OurIndustry />
      <FunFacts />
      <Testimonials />
      <BlogPostSlider />
      <CaseStudiesPost />
      <Footer />
    </>
  )
}
export default Index;