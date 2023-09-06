import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Industries from "../components/Live/Industries";
import Testimonials from "../components/Live/Testimonials";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import HeroBanner from "../components/cloud-nfrastructure-services/HeroBanner";
import WhyTriosource from "../components/cloud-nfrastructure-services/WhyTriosource";
import ComputerVisionAI from "../components/cloud-nfrastructure-services/ComputerVisionAI";
import TechDetailsContent from "../components/cloud-nfrastructure-services/TechDetailsContent";
import OurIndustry from "../components/Common/OurIndustry";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import WhyChooseSAT from "../components/cloud-nfrastructure-services/WhyChooseSAT";
import Services from "../components/cloud-nfrastructure-services/Services";

import Head from "next/Head";

const Index = () => {
  return (
    <>
     <head>
        <title>AI-Powered Cloud Solutions | SA Technologies Inc.  </title>
        <meta property="og:title" content="AI-Powered Cloud Solutions | SA Technologies Inc. " key="title" />
        <meta name="description" content="Elevate your business with AI-enhanced cloud services from SA Technologies. Harness the power of AI for flexible, efficient, and secure cloud solutions. Transform your digital landscape. " key="description" />
      </head>

      <Navbar />
      <HeroBanner />
      {/* <ComputerVisionAI /> */}
      <TechDetailsContent />
      <Services />
      <WhyChooseSAT />
      <OurIndustry />
      <CaseStudiesSlider />
      <Testimonials />
      <BlogPostSlider />
      <CaseStudiesPost />
      <Footer />
    </>
  )
}
export default Index;