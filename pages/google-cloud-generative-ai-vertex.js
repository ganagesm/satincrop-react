import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/GooglecloudGenai/Services";
import ComputerVisionAI from "../components/GooglecloudGenai/ComputerVisionAI";
import PageBanner from "../components/GooglecloudGenai/PageBanner";
import TechDetailsContent from "../components/GooglecloudGenai/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/GooglecloudGenai/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import Cta from "../components/GooglecloudGenai/Cta";
import ServicesBox from "../components/GooglecloudGenai/ServicesBox";
import Link from "next/link";
import Head from "next/head";

const GooglecloudGenai = () => {
  return (
    <>
      <Head>
        <title>
          Get Google Cloud Migration Services and Custom Solutions | SA
          Technologies{" "}
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
        pageTitle="SA Technologies can help you transform your business with generative AI on Google Cloud"
        homePageUrl="/"
        homePageText="Technology"
        activePageText=" Google Cloud Generative AI"
        bgImgClass="item-bg18"
      />

      <div className=" ptb-50">
        <div className="section-title">
          <h3>Generative AI is transforming every business vertical. </h3>
          <p>
            {" "}
            We can help you build ai into your products and bring ai to all your
            internal teams all perfectly aligned with your company mission and
            values.{" "}
          </p>
        </div>
      </div>

      <TechDetailsContent />
      <Cta />
      <Services />
      <ServicesBox />

      <div className="GCCJourney">
        <div className="container">
          <div className="row ptb-100 pb-100 align-items-center">
            <div className="col-lg-8 col-md-8">
              {/* <h2
                className="align-items-center"
                style={{
                  textAlign: "",
                }}>
                Free engineering help from the SAT team to quickly transition to
                vertex AI and $350k in GCP credits
              </h2> */}
              <h2
                className="align-items-center"
                style={{
                  textAlign: "",
                }}>
                Start Your Cloud Journey with Free GCP Credits: Empower Your
                Projects on Google Cloud Platform!
              </h2>
            </div>
            <div
              className="col-lg-4 col-md-4"
              style={{
                textAlign: "left",
              }}>
              <Link href="/contact-us/" className="btn btn-primary">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MainServices />
      <BlogPostSlider />
      <ContactFormContent />
      <Footer />
    </>
  );
};
export default GooglecloudGenai;
