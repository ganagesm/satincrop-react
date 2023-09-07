
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/python/Services";
import BlogPost from "../components/Common/BlogPost";

import ComputerVisionAI from "../components/python/ComputerVisionAI";
import PageBanner from "../components/Live/PageBanner";
import TechDetailsContent from "../components/python/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import Link from "next/link";
import Head from 'next/head';

const Index = () => {
  return (
    <>

      <Head>
        <title>AWS Services | SA Technologies Inc.     </title>
        <meta property="og:title" content="AWS Services | SA Technologies Inc.    " key="title" />
        <meta name="description" content="Discover the power of AWS services for your business. Scale, innovate, and accelerate digital transformation with our comprehensive cloud solutions. " key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Bringing AWS Innovations to the Forefront of Your Business"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="AWS"
        bgImgClass="item-bg5"
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
  )
}
export default Index;