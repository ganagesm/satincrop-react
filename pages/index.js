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
import AboutContact from "../components/Live/AboutContent";
import CEOCorner from "../components/Live/CEOCorner";
import Offices from "../components/Live/Offices";
import MainServices from "../components/Live/MainServices";
import Script from 'next/script';
import Head from "next/Head";


const Index = () => {
  return (
    <>
      <Head>
        <title>SA Technologies &#8211; IT Consulting Company | Technology Partners | SA Technologies</title>
        <meta property="og:title" content="SA Technologies &#8211; IT Consulting Company | Technology Partners | SA Technologies" key="title" />
        <meta name="description" content="" key="description" />
      </Head>

      <Navbar />
      <HeroBanner />
      <AboutContact />
      <PartnerContent />
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