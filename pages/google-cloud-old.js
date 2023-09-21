import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/reactjs/Services";
import ComputerVisionAI from "../components/reactjs/ComputerVisionAI";
import PageBanner from "../components/reactjs/PageBanner";
import TechDetailsContent from "../components/reactjs/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import Link from "next/link";
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Google Cloud Services for Business | SA Technologies Inc.  </title>
        <meta property="og:title" content="Google Cloud Services for Business | SA Technologies Inc. " key="title" />
        <meta name="description" content="Unlock innovation with Google Cloud Services. Scale, automate, and harness data insights for digital transformation and enhanced efficiency." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Business Solutions using
        Google Cloud"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Google"
        bgImgClass="item-bg10"
      />

      <TechDetailsContent />
      <ComputerVisionAI />
        <div className="col-lg-12 col-md-12">
          <div className="ai-all-services-btn ptb-50">
            <Link href="#contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      <MainServices />
      <BlogPostSlider />

   <ContactFormContent />
      <Footer />
    </>
  );
};
export default Index;
