
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/net/Services";
import ComputerVisionAI from "../components/net/ComputerVisionAI";
import PageBanner from "../components/net/PageBanner";
import TechDetailsContent from "../components/net/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import Link from "next/link";
import Head from 'next/head';

const Index = () => {
  return (
    <>

      <Head>
        <title>Oracle Cloud Services | SA Technologies Inc.    </title>
        <meta property="og:title" content="Oracle Cloud Services | SA Technologies Inc.   " key="title" />
        <meta name="description" content="Unlock digital transformation with Oracle Cloud Services. Modernize IT infrastructure, drive innovation, and optimize operations with our comprehensive solutions. " key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Empowering Futures: Your Oracle Cloud Consulting Ally"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Oracle"
        bgImgClass="item-bg4"
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