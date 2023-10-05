import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/Live/HeroBanner";
import Services from "../components/Live/Services";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import FunFacts from "../components/Live/FunFacts";
import PartnerContent from "../components/Live/PartnerContent";
import Testimonials from "../components/Live/Testimonials";
import TechSlider from "../components/Live/TechSlider";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import NewsPostSlider from "../components/Live/NewsPostSlider";
import AboutContact from "../components/Live/AboutContent";
import CEOCorner from "../components/Live/CEOCorner";
import Offices from "../components/Live/Offices";
import MainServices from "../components/Live/MainServices";
import Script from 'next/script';
import Head from 'next/head';


const Index = () => {
  return (
    <>
      <Head>
        <title>SA Technologies | Leading IT Consulting: AI Solutions, Digital Engineering, Enterprise Modernization</title>
        <meta property="og:title" content="SA Technologies | Leading IT Consulting: AI Solutions, Digital Engineering, Enterprise Modernization" key="title" />
        <meta name="description" content="SA Technologies - Your Trusted IT Consulting and Offshore Partner with 20+ years of experience, serving 500+ clients. Elevate your business with AI Solutions, Digital Engineering, and Enterprise Modernization Services." key="" />
      </Head>

      <Navbar />
      <HeroBanner />
      <AboutContact />
      <PartnerContent />
      <NewsPostSlider />
      <Services />
      {/* <MainServices /> */}
      <TechSlider />
      <CEOCorner />
      <Offices />
      <Testimonials />
      <CaseStudiesPost />
      <BlogPostSlider />
      <Footer />

    </>
  )
}
export default Index;