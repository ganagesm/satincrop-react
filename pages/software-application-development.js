import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Industries from "../components/Live/Industries";
// import Testimonials from "../components/Live/Testimonials";
import HeroBanner from "../components/software-application-development/HeroBanner";
import WhyTriosource from "../components/software-application-development/WhyTriosource";
// import Testimonials from "../components/software-application-development/Testimonials";
import BlogPost from "../components/software-application-development/BlogPost";
import ComputerVisionAI from "../components/software-application-development/ComputerVisionAI";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import TechDetailsContent from "../components/software-application-development/TechDetailsContent";
import Services from "../components/software-application-development/Services";
import WhyChooseSAT from "../components/software-application-development/WhyChooseSAT";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import BlogPostSlider from "../components/Live/BlogPostSlider";

import Head from 'next/head';

const Index = () => {
  return (
    <>

      <Head>
        <title>AI-Enhanced Software Development | SA Technologies Inc.    </title>
        <meta property="og:title" content="AI-Enhanced Software Development | SA Technologies Inc.   " key="title" />
        <meta name="description" content="Elevate your software with AI-powered development from SA Technologies. Our expert team creates user-centric, responsive, and secure solutions tailored to your needs. " key="description" />
      </Head>

      <Navbar />
      <HeroBanner />
      <ComputerVisionAI />
      <TechDetailsContent />
      {/* <Services /> */}
      <WhyChooseSAT />
      <OurIndustry />
      {/* <Industries /> */}
      {/* <WhyTriosource /> */}
      {/* <BlogPost /> */}
      <BlogPostSlider />
      <Testimonials />
      <Footer />
    </>
  )
}
export default Index;