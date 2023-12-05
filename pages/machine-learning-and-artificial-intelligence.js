import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Industries from "../components/Live/Industries";
import Testimonials from "../components/Live/Testimonials";
import HeroBanner from "../components/ai-machine-learning-services/HeroBanner";
import WhyTriosource from "../components/ai-machine-learning-services/WhyTriosource";
// import Testimonials from "../components/ai-machine-learning-services/Testimonials";
import ComputerVisionAI from "../components/ai-machine-learning-services/ComputerVisionAI";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import TechDetailsContent from "../components/ai-machine-learning-services/TechDetailsContent";
import Services from "../components/ai-machine-learning-services/Services";
import WhyChooseSAT from "../components/ai-machine-learning-services/WhyChooseSAT";
import OurIndustry from "../components/Common/OurIndustry";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import BlogPostSlider from "../components/ai-machine-learning-services/BlogPostSlider";
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>AI & Machine Learning Solutions | SA Technologies Inc. </title>
        <meta property="og:title" content="AI & Machine Learning Solutions | SA Technologies Inc." key="title" />
        <meta name="description" content="Elevate your business with AI and Machine Learning solutions from SA Technologies. Customized AI-powered solutions for innovation, efficiency, and data-driven decisions." key="description" />
      </Head>
      <Navbar />
      <HeroBanner />
      {/* <ComputerVisionAI /> */}
      <TechDetailsContent />
      <Services />
      {/* <Industries /> */}
      <WhyChooseSAT />
      <OurIndustry />
      {/* <CaseStudiesSlider /> */}
      <Testimonials />
      <BlogPostSlider/>
      <CaseStudiesPost />
      <Footer />
    </>
  )
}
export default Index;