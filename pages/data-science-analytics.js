import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/data-science/HeroBanner";
import Industries from "../components/Live/Industries";
// import Testimonials from "../components/data-science/Testimonials";
import CaseStudiesSlider from "../components/data-science/CaseStudiesSlider";
import WhyTriosource from "../components/data-science/WhyTriosource";
import ComputerVisionAI from "../components/data-science/ComputerVisionAI";
import TechDetailsContent from "../components/data-science/TechDetailsContent";
import Services from "../components/data-science/Services";
import WhyChooseSAT from "../components/data-science/WhyChooseSAT";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import Head from 'next/head';

const Index = () => {
  return (
    <>

      <Head>
        <title>Elevate Insights with SA Technologies Data Science & Analytics  </title>
        <meta property="og:title" content="Elevate Insights with SA Technologies Data Science & Analytics " key="title" />
        <meta name="description" content="Harness the power of data with SAT Data Analytics Services. Let us turn your data into actionable insights." key="description" />
      </Head>

      <Navbar />
      <HeroBanner />
      {/* <ComputerVisionAI /> */}
      <TechDetailsContent />
      <Services />
      {/* <Industries /> */}
      <WhyChooseSAT />
      <OurIndustry />
      {/* <WhyTriosource /> */}
      <CaseStudiesPost />
      <BlogPostSlider />
      <Testimonials />
      <Footer />
    </>
  )
}
export default Index;