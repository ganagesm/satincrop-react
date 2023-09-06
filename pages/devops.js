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

import Head from 'next/Head';

const Index = () => {
  return (
    <>
    <Head>
        <title>AI-Enhanced DevOps Solutions | SA Technologies Inc.  </title>
        <meta property="og:title" content="AI-Enhanced DevOps Solutions | SA Technologies Inc. " key="title" />
        <meta name="description" content="Elevate organizational agility with AI-infused DevOps solutions from SA Technologies. Achieving rapid software output, streamlined operations, and accelerated innovation. Transform your future with advanced DevOps strategies " key="description" />
      </Head>

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