import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/HomeThree/Services";
import ComputerVisionAI from "../components/Mendix/ComputerVisionAI";
import PageBanner from "../components/Mendix/PageBanner";
import TechDetailsContent from "../components/Mendix/TechDetailsContent";
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
          Achieve Rapid App Development with SA Technologies Mendix Expertise{" "}
        </title>
        <meta
          property="og:title"
          content="Achieve Rapid App Development with SA Technologies Mendix Expertise "
          key="title"
        />
        <meta
          name="description"
          content="Experience accelerated app development with SA Technologies Mendix services. Empower your business with innovative, low-code solutions."
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Dive Deep with Mendix's Low-Code Revolution"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Mendix"
        bgImgClass="item-bg13"
      />

      <TechDetailsContent />
      <ComputerVisionAI />

      {/* <Services /> */}

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
