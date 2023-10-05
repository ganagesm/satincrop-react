import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/HomeThree/Services";
import ComputerVisionAI from "../components/GooglecloudNew/ComputerVisionAI";
import PageBanner from "../components/GooglecloudNew/PageBanner";
import TechDetailsContent from "../components/GooglecloudNew/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import Link from "next/link";
import Head from "next/head";

const GoogleCloudNew = () => {
  return (
    <>
      <Head>
        <title>Get Google Cloud Migration Services and Custom Solutions | SA Technologies  </title>
        <meta property="og:title" content="Get Google Cloud Migration Services and Custom Solutions | SA Technologies " key="title" />
        <meta name="description" content="SA Technologies harnesses the power of Google technologies for business transformation. Explore our Google solutions." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Business Solutions using
        Google Cloud"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Google"
        bgImgClass="item-bg9"
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

      <Services />

      <MainServices />
      <BlogPostSlider />
      <ContactFormContent />
      <Footer />
    </>
  );
};
export default GoogleCloudNew;
