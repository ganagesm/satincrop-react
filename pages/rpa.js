import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/rpa/HeroBanner";
import Industries from "../components/Live/Industries";
// import Testimonials from "../components/rpa/Testimonials";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import WhyTriosource from "../components/rpa/WhyTriosource";
import ComputerVisionAI from "../components/rpa/ComputerVisionAI";
import TechDetailsContent from "../components/rpa/TechDetailsContent";
import Services from "../components/rpa/Services";
import WhyChooseSAT from "../components/rpa/WhyChooseSAT";
import Head from 'next/head';

const Index = () => {
  return (
    <>
     <Head>
        <title>Robotic Process Automation (RPA): The Future of Business Automation  </title>
        <meta property="og:title" content="Robotic Process Automation (RPA): The Future of Business Automation " key="title" />
        <meta name="description" content="SA Technologies RPA solutions can help you achieve operational excellence by streamlining processes, eliminating errors, and improving productivity. " key="description" />
      </Head>
      <Navbar />
      <HeroBanner />
      {/* <ComputerVisionAI /> */}
      <TechDetailsContent />
      <Services />
      {/* <Industries /> */}
      <WhyChooseSAT/>
      <OurIndustry />
      {/* <WhyTriosource /> */}
      <Testimonials />
      <CaseStudiesPost />
      <Footer />
    </>
  )
}
export default Index;