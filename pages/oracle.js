import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/net/Services";
import ComputerVisionAI from "../components/net/ComputerVisionAI";
import PageBanner from "../components/net/PageBanner";
import TechDetailsContent from "../components/net/TechDetailsContent";
import MainIndustry from "../components/Live/MainIndustry";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import Link from "next/link";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>
          Maximizing Potential with Oracle Solutions by SA Technologies{" "}
        </title>
        <meta
          property="og:title"
          content="Maximizing Potential with Oracle Solutions by SA Technologies   "
          key="title"
        />
        <meta
          name="description"
          content="SA Technologies delivers Oracle solutions for optimized operations. Elevate your business with Oracle robust technology."
          key="description"
        />
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
          <Link href="/contact-us/" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
      <MainIndustry />
      <BlogPostSlider />

      <ContactFormContent />
      <Footer />
    </>
  );
};
export default Index;
