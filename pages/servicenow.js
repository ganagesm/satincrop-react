
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/rails/Services";
import ComputerVisionAI from "../components/rails/ComputerVisionAI";
import PageBanner from "../components/rails/PageBanner";
import TechDetailsContent from "../components/rails/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import Link from "next/link";
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>ServiceNow Offerings | SA Technologies Inc. </title>
        <meta property="og:title" content="ServiceNow Offerings | SA Technologies Inc." key="title" />
        <meta name="description" content="Explore ServiceNow's IT service management, customer service, and HR service management solutions. Partner with us for ServiceNow consulting and implementation." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="ServiceNow Consulting and Implementation Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="ServiceNow"
        bgImgClass="item-bg7"
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

      {/*<Services />
       <BlogPost /> */}

      <Footer />
    </>
  )
}
export default Index;