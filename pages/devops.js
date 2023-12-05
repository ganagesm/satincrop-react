import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Testimonials from "../components/Live/Testimonials";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import HeroBanner from "../components/devops/HeroBanner";
import TechDetailsContent from "../components/devops/TechDetailsContent";
import OurIndustry from "../components/Common/OurIndustry";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import WhyChooseSAT from "../components/devops/WhyChooseSAT";
import Services from "../components/devops/Services";

import Head from 'next/head';

const Index = () => {
  return (
    <>
    <Head>
        <title>Drive Efficiency with SA Technologies DevOps Services   </title>
        <meta property="og:title" content="Drive Efficiency with SA Technologies DevOps Services  " key="title" />
        <meta name="description" content="Elevate your organizational performance with AI-driven DevOps solutions from SA Technologies. Improve collaboration, reduce costs, and accelerate digital transformation. " key="description" />
      </Head>

      <Navbar />
      <HeroBanner />
      {/* <ComputerVisionAI /> */}
      <TechDetailsContent />
      <Services />
      <WhyChooseSAT />
      <OurIndustry />
      {/* <CaseStudiesSlider /> */}
      <Testimonials />
      <BlogPostSlider />
      <CaseStudiesPost />
      <Footer />
    </>
  )
}
export default Index;