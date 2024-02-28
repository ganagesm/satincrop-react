import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/kubernetes/Services";
import ComputerVisionAI from "../components/kubernetes/ComputerVisionAI";
import PageBanner from "../components/kubernetes/PageBanner";
import TechDetailsContent from "../components/kubernetes/TechDetailsContent";
import MainIndustry from "../components/Live/MainIndustry";
import BlogPostSlider from "../components/kubernetes/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import Link from "next/link";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>
          Empower Business with Microsoft D365 Solutions by SA Technologies{" "}
        </title>
        <meta
          property="og:title"
          content="Empower Business with Microsoft D365 Solutions by SA Technologies "
          key="title"
        />
        <meta
          name="description"
          content="SA Technologies offers Microsoft solutions for enhanced productivity and innovation. Unleash the potential of Microsoft technologies."
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Redefining Horizons with Microsoft Cloud Evolution"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Microsoft"
        bgImgClass="item-bg2"
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

      {/* <ContactFormContent /> */}
      <Footer />
    </>
  );
};
export default Index;
