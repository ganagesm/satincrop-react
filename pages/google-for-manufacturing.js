import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import MainServices from "../components/Live/MainServices";
import ContactFormContent from "../components/Common/ContactFormContent";
import BlogPostSlider from "../components/GoogleforManufacturing/BlogPostSlider";
import PageBanner from "../components/GoogleforManufacturing/PageBanner";
import TechDetailsContent from "../components/GoogleforManufacturing/TechDetailsContent";
import Cta from "../components/GoogleforManufacturing/Cta";
import WhyChooseSAT from "../components/GoogleforManufacturing/WhyChooseSAT";
import ServicesBox from "../components/GoogleforManufacturing/ServicesBox";
import IntegratingGoogle from "../components/GoogleforManufacturing/IntegratingGoogle";
import CaseStudiesGooglePost from "../components/Live/CaseStudiesGooglePost";
import Link from "next/link";
import Head from "next/head";

const GoogleforManufacturing = () => {
  return (
    <>
      <Head>
        <title>Revolutionize Manufacturing with Google Services - SAT</title>
        <meta
          property="og:title"
          content="Revolutionize Manufacturing with Google Services - SAT"
          key="title"
        />
        <meta
          name="description"
          content="Empower your manufacturing operations with SAT’s Google services. Streamline, optimize, and innovate for efficiency and growth."
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Transform Your Manufacturing Landscape with Google's Cutting-Edge Technologies"
        homePageUrl="/"
        homePageText="Technology"
        activePageText=" Google Cloud for Manufacturing"
        bgImgClass="item-bg30"
      />

      <TechDetailsContent />
      <ServicesBox />
      {/* <Cta /> */}
      <WhyChooseSAT />
      <Cta />

      {/* <div className="GCCJourney">
        <div className="container">
          <div className="row ptb-100 pb-100 align-items-center">
            <div className="col-lg-7 col-md-8">
              <h2 className="align-items-center">
                Let’s Work Together, Elevate Your Educational Environment with
                us.
              </h2>
            </div>
            <div
              className="col-lg-5 col-md-4"
              style={{
                textAlign: "left",
              }}>
              <Link href="/contact-us/" className="btn btn-primary">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="section-title pt-100">
        <h4>
          Connect and empower your school community with Google for Education.
          Select the edition that best fits your educational needs and start
          transforming the way you teach and learn.{" "}
        </h4>
        <p> Explore your industry with SAT & learn how organizations are digitally transforming with 
          industry solutions. </p>
      </div> */}

      {/* <IntegratingGoogle /> */}

      {/* <MainServices /> */}
      <BlogPostSlider />
      <CaseStudiesGooglePost />
      <ContactFormContent />
      <Footer />
    </>
  );
};
export default GoogleforManufacturing;
