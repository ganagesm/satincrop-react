import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/HomeThree/Services";
import ComputerVisionAI from "../components/GooglecloudNew/ComputerVisionAI";
import PageBanner from "../components/GooglecloudNew/PageBanner";
import TechDetailsContent from "../components/GooglecloudNew/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/GooglecloudNew/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import CaseStudiesGooglePost from "../components/Live/CaseStudiesGooglePost";
import Link from "next/link";
import Head from "next/head";

const GoogleCloudNew = () => {
  return (
    <>
      <Head>
        <title>
          Get Google Cloud Migration Services and Custom Solutions | SA
          Technologies
        </title>
        <meta
          property="og:title"
          content="Get Google Cloud Migration Services and Custom Solutions | SA Technologies "
          key="title"
        />
        <meta
          name="description"
          content="SA Technologies harnesses the power of Google technologies for business transformation. Explore our Google solutions."
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Business Solutions using
        Google Cloud"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Google"
        bgImgClass="item-bg35"
      />

      {/* <TechDetailsContent /> */}
      <ComputerVisionAI />
      <Services />
      <MainServices />
      <CaseStudiesGooglePost />
      <BlogPostSlider />
      <ContactFormContent />
      <Footer />
    </>
  );
};
export default GoogleCloudNew;
