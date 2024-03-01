import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import MainServices from "../components/Live/MainServices";
import ContactFormContent from "../components/Common/ContactFormContent";
import BlogPostSlider from "../components/GoogleFMCD/BlogPostSlider";
import PageBanner from "../components/GoogleFMCD/PageBanner";
import TechDetailsContent from "../components/GoogleFMCD/TechDetailsContent";
import Cta from "../components/GoogleFMCD/Cta";
import WhyChooseSAT from "../components/GoogleFMCD/WhyChooseSAT";
import ServicesBox from "../components/GoogleFMCD/ServicesBox";
import IntegratingGoogle from "../components/GoogleFMCD/IntegratingGoogle";
import CaseStudiesGooglePost from "../components/Live/CaseStudiesGooglePost";
import Link from "next/link";
import Head from "next/head";

const GoogleFMCD = () => {
  return (
    <>
      <Head>
        <title>
          FMCD Industry Solutions | SA Technologies - Elevate Your Business
        </title>
        <meta
          property="og:title"
          content="FMCD Industry Solutions | SA Technologies - Elevate Your Business"
          key="title"
        />
        <meta
          name="description"
          content="Discover cutting-edge FMCD solutions at SA Technologies. From market analysis to supply chain optimization, we offer technology-driven services to boost your business efficiency and market reach. Partner with us for innovative FMCD strategies."
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Elevate Your FMCD Business with Strategic SAT Solutions"
        homePageUrl="/"
        homePageText="Technology"
        activePageText=" Google Cloud for FMCD"
        bgImgClass="item-bg27 "
      />

      <TechDetailsContent />
      <ServicesBox />
      {/* <Cta /> */}
      <WhyChooseSAT />
      <CaseStudiesGooglePost />
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

      <ContactFormContent />
      <Footer />
    </>
  );
};
export default GoogleFMCD;
