
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
        <title>Scale New Heights with AWS Services: SA Technologies Expertise  </title>
        <meta property="og:title" content="Scale New Heights with AWS Services: SA Technologies Expertise " key="title" />
        <meta name="description" content="Explore SA Technologies AWS services for secure, scalable, and flexible cloud solutions. Navigate the cloud confidently with AWS." key="description" />
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
          <Link href="/contact-us/" className="btn btn-primary">
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