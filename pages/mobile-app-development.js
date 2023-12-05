import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/mobile-app-development/HeroBanner";
import WhyTriosource from "../components/mobile-app-development/WhyTriosource";
// import Testimonials from "../components/mobile-app-development/Testimonials";
import BlogPost from "../components/mobile-app-development/BlogPost";
import ComputerVisionAI from "../components/mobile-app-development/ComputerVisionAI";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import TechDetailsContent from "../components/mobile-app-development/TechDetailsContent";

import WhyChooseSAT from "../components/mobile-app-development/WhyChooseSAT";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import BlogPostSlider from "../components/Live/BlogPostSlider";

import Head from 'next/head';

const Index = () => {
  return (
    <>

      <Head>
        <title>AI-Enhanced Mobile App Development: The Key to Customer Satisfaction </title>
        <meta property="og:title" content="AI-Enhanced Mobile App Development: The Key to Customer Satisfaction   " key="title" />
        <meta name="description" content="SA Technologies is a leading provider of AI-powered mobile app development services. We can help you to develop and implement AI-powered mobile app solutions that will help you to achieve your business goals and gain a competitive edge in the digital age." key="description" />
      </Head>

      <Navbar />
      <HeroBanner />
      <ComputerVisionAI />
      <TechDetailsContent />
      <WhyChooseSAT />
      <OurIndustry />
      <Testimonials />
      <BlogPostSlider />
      <CaseStudiesPost />
      <Footer />
    </>
  )
}
export default Index;