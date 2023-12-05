import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Industries from "../components/Live/Industries";
import HeroBanner from "../components/software-quality-assurance/HeroBanner";
import WhyTriosource from "../components/software-quality-assurance/WhyTriosource";
// import Testimonials from "../components/software-quality-assurance/Testimonials";
import BlogPost from "../components/software-quality-assurance/BlogPost";
import ComputerVisionAI from "../components/software-quality-assurance/ComputerVisionAI";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import TechDetailsContent from "../components/software-quality-assurance/TechDetailsContent";
import WhyChooseSAT from "../components/software-quality-assurance/WhyChooseSAT";
import Services from "../components/software-quality-assurance/Services";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import BlogPostSlider from "../components/software-quality-assurance/BlogPostSlider";

import Head from 'next/head';

const Index = () => {
  return (
    <>

<Head>
        <title>Ensure Excellence quality with SA Technologies Software QA </title>
        <meta property="og:title" content="Ensure Excellence quality with SA Technologies Software QA" key="title" />
        <meta name="description" content="SA Technologies is a leading provider of AI-powered QA services. We can help you to develop and implement AI-powered QA solutions that will help you to achieve your software development goals and gain a competitive edge in the marketplace." key="description" />
      </Head>

      <Navbar />
      <HeroBanner />
      {/* <ComputerVisionAI /> */}
      <TechDetailsContent />
      <Services/>
      <WhyChooseSAT/>
      <OurIndustry/>
      <Testimonials />
      <BlogPostSlider />
      <CaseStudiesPost />
      <Footer />
    </>
  )
}
export default Index;