import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import MainServices from "../components/Live/MainServices";
import ContactFormContent from "../components/Common/ContactFormContent";
import BlogPostSlider from "../components/GoogleEducation/BlogPostSlider";
import PageBanner from "../components/GoogleEducation/PageBanner";
import TechDetailsContent from "../components/GoogleEducation/TechDetailsContent";
import Cta from "../components/GoogleEducation/Cta";
import WhyChooseSAT from "../components/GoogleEducation/WhyChooseSAT";
import ServicesBox from "../components/GoogleEducation/ServicesBox";
import IntegratingGoogle from "../components/GoogleEducation/IntegratingGoogle";
import CaseStudiesGooglePost from "../components/Live/CaseStudiesGooglePost";
import Link from "next/link";
import Head from "next/head";

const GoogleEducation = () => {
  return (
    <>
      <Head>
        <title>
          Upgrade Your Education System With Google for Education by SAT
        </title>
        <meta
          property="og:title"
          content="Upgrade Your Education System With Google for Education by SAT"
          key="title"
        />
        <meta
          name="description"
          content="Google for Education is a suite specially for Education environments that helps upgrade your digital environment with advanced, security, and productivity tools."
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Empowering Education with Google Cloud: Transform Teaching and Learning"
        homePageUrl="/"
        homePageText="Technology"
        activePageText=" Google Cloud for Education"
        bgImgClass="item-bg24"
      />

      <TechDetailsContent />
      <ServicesBox />
      <Cta />
      <WhyChooseSAT />

      <div className="GCCJourney">
        <div className="container">
          <div className="row ptb-100 pb-100 align-items-center">
            <div className="col-lg-7 col-md-8">
              <h2 className="align-items-center" style={{ textAlign: "" }}>
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
      </div>

      <div className="section-title pt-100">
        <h4>
          Connect and empower your school community with Google Cloud for
          Education. Select the edition that best fits your educational needs
          and start transforming the way you teach and learn.{" "}
        </h4>
        {/* <p> Explore your industry with SAT & learn how organizations are digitally transforming with 
          industry solutions. </p> */}
      </div>

      <IntegratingGoogle />

      {/* <MainServices /> */}
      <BlogPostSlider />
      <CaseStudiesGooglePost />
      <ContactFormContent />
      <Footer />
    </>
  );
};
export default GoogleEducation;
