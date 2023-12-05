
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
        <title>Elevate User Engagement With AI-Powered UI/UX Design | SAT    </title>
        <meta property="og:title" content="Elevate User Engagement With AI-Powered UI/UX Design | SAT   " key="title" />
        <meta name="description" content="Experience the next-generation of UI/UX design with AI-powered solutions from SA Technologies." key="description" />
      </Head>

      <Navbar />
      <HeroBanner />
       <TechDetailsContent />
      <Services />
      <WhyChooseSAT />
      <OurIndustry />
      {/* <FunFacts /> */}
      <Testimonials />
      <BlogPostSlider />
      <CaseStudiesPost />
      <Footer />
    </>
  )
}
export default Index;