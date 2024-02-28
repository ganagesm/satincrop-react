import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import MainServices from "../components/Live/MainServices";
import ContactFormContent from "../components/Common/ContactFormContent";
import BlogPostSlider from "../components/GoogleRetail/BlogPostSlider";
import PageBanner from "../components/GoogleRetail/PageBanner";
import TechDetailsContent from "../components/GoogleRetail/TechDetailsContent";
import Cta from "../components/GoogleRetail/Cta";
import WhyChooseSAT from "../components/GoogleRetail/WhyChooseSAT";
import ServicesBox from "../components/GoogleRetail/ServicesBox";
import IntegratingGoogle from "../components/GoogleRetail/IntegratingGoogle";
import CaseStudiesGooglePost from "../components/Live/CaseStudiesGooglePost";
import Link from "next/link";
import Head from "next/head";

const GoogleRetail = () => {
  return (
    <>
      <Head>
        <title>Boost Retail Success with Google Solutions - SAT</title>
        <meta
          property="og:title"
          content="Boost Retail Success with Google Solutions - SAT"
          key="title"
        />
        <meta
          name="description"
          content="Transform your retail operations with Google-powered solutions from SA Technologies. Drive sales, enhance customer experience, and optimize operations."
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Boost Retail Success with Google Solutions"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Google Cloud for Retail"
        bgImgClass="item-bg32"
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
export default GoogleRetail;
