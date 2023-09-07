
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import WhyChooseSAT from "../components/GenerativeAi/WhyChooseSAT";
import Services from "../components/GenerativeAi/Services";
import HeroBanner from "../components/GenerativeAi/HeroBanner";
import TechDetailsContent from "../components/GenerativeAi/TechDetailsContent";
import FunFacts from "../components/Live/FunFacts";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Generative AI Services | SA Technologies Inc. </title>
        <meta property="og:title" content="Generative AI Services | SA Technologies Inc." key="title" />
        <meta name="description" content="Experience limitless innovation with Generative AI services from SA Technologies. Transform content creation, automate code generation, enhance testing, and more. Discover the future of AI. " key="description" />
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