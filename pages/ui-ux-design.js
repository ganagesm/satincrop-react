
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

import Head from 'next/head';

const Index = () => {
  return (
    <>
    <Head>
        <title>AI-Enhanced UI/UX Design | SA Technologies Inc.   </title>
        <meta property="og:title" content="AI-Enhanced UI/UX Design | SA Technologies Inc.  " key="title" />
        <meta name="description" content="Elevate user engagement with AI-powered UI/UX design solutions from SA Technologies. Our innovative approach combines aesthetics and functionality, delivering exceptional digital experiences." key="description" />
      </Head>

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