import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Industries from "../components/Live/Industries";
import HeroBanner from "../components/software-quality-assurance/HeroBanner";
import WhyTriosource from "../components/software-quality-assurance/WhyTriosource";
// import Testimonials from "../components/software-quality-assurance/Testimonials";
import BlogPost from "../components/software-quality-assurance/BlogPost";
import ComputerVisionAI from "../components/software-quality-assurance/ComputerVisionAI";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import TechDetailsContent from "../components/software-quality-assurance/TechDetailsContent";
import WhyChooseSAT from "../components/software-quality-assurance/WhyChooseSAT";
import Services from "../components/software-quality-assurance/Services";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import BlogPostSlider from "../components/Live/BlogPostSlider";

import Head from 'next/Head';

const Index = () => {
  return (
    <>

<Head>
        <title>AI-Driven Software Quality Assurance | SA Technologies Inc. </title>
        <meta property="og:title" content="AI-Driven Software Quality Assurance | SA Technologies Inc." key="title" />
        <meta name="description" content="Elevate software quality with AI-powered quality assurance services from SA Technologies. Comprehensive QA solutions for innovation and seamless user experiences." key="description" />
      </Head>

      <Navbar />
      <HeroBanner />
      {/* <ComputerVisionAI /> */}
      <TechDetailsContent />
      <Services/>
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