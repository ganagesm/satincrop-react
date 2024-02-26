import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/PowerbiPlatform/Services";
import WhyChooseSAT from "../components/PowerbiPlatform/WhyChooseSAT";
import PageBanner from "../components/PowerbiPlatform/PageBanner";
import TechDetailsContent from "../components/PowerbiPlatform/TechDetailsContent";
import MainIndustry from "../components/Live/MainIndustry";
import BlogPostSlider from "../components/PowerbiPlatform/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import AboutAI from "../components/PowerbiPlatform/AboutAI";
import ServicesBox from "../components/PowerbiPlatform/ServicesBox";
import Link from "next/link";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Power BI Consulting Services | SA Technologies</title>
        <meta
          property="og:title"
          content="Power BI Consulting Services | SA Technologies"
          key="title"
        />
        <meta
          name="description"
          content="SA Technologies Power BI Consulting in the Bay Area, USA, aids businesses in overcoming challenges. Elevate your enterprise with expert Power BI assistance"
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Transform your Data with Power BI Consulting Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Power-BI-Platform"
        bgImgClass="item-bg19"
      />

      <TechDetailsContent />

      <AboutAI />

      <ServicesBox />

      <div className="">
        <div className="container">
          <div className="row ptb-100 pb-100 align-items-center">
            <div className="col-lg-7 col-md-7">
              <h2
                className="align-items-center"
                style={{
                  textAlign: "right",
                }}>
                Connect with our Expert now
              </h2>
            </div>
            <div
              className="col-lg-5 col-md-5"
              style={{
                textAlign: "left",
              }}>
              <Link href="/contact-us/" className="btn btn-primary">
                Talk to our Microsoft Expert
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <ComputerVisionAI /> */}

      <Services />

      <div className="col-lg-12 col-md-12">
        <div className="ai-all-services-btn ptb-50">
          <Link href="/contact-us/" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>

      {/* <WhyChooseSAT />   */}

      <MainIndustry />
      <BlogPostSlider />

      {/* <section className="contact-area pb-100">
        <div className="container">
          <div className="section-title">
            <h2>Connect With Us</h2>
          </div>

          <div className="contact-form">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="contact-image">
                  <img src="/images/footer-img.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <ContactForm />
              </div>
            </div>
          </div>          
        </div>
      </section> */}

      <ContactFormContent />
      <Footer />
    </>
  );
};
export default Index;
