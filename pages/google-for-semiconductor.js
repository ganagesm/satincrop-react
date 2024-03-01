import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import MainServices from "../components/Live/MainServices";
import ContactFormContent from "../components/Common/ContactFormContent";
import BlogPostSlider from "../components/GoogleSemiconductor/BlogPostSlider";
import PageBanner from "../components/GoogleSemiconductor/PageBanner";
import TechDetailsContent from "../components/GoogleSemiconductor/TechDetailsContent";
import Cta from "../components/GoogleSemiconductor/Cta";
import WhyChooseSAT from "../components/GoogleSemiconductor/WhyChooseSAT";
import ServicesBox from "../components/GoogleSemiconductor/ServicesBox";
import IntegratingGoogle from "../components/GoogleSemiconductor/IntegratingGoogle";
import CaseStudiesGooglePost from "../components/Live/CaseStudiesGooglePost";
import Link from "next/link";
import Head from "next/head";

const GoogleSemiconductor = () => {
  return (
    <>
      <Head>
        <title>
          Optimize Semiconductor Operations with Google Solutions - SAT
        </title>
        <meta
          property="og:title"
          content="Optimize Semiconductor Operations with Google Solutions - SAT"
          key="title"
        />
        <meta
          name="description"
          content="Boost your semiconductor manufacturing with SAT Google solutions. Achieve innovation, efficiency, and scalability in your operations."
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Accelerating Semiconductor Innovation with Google's Advanced Technologies."
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Google Cloud for Semiconductor"
        bgImgClass="item-bg32"
      />

      <TechDetailsContent />
      <ServicesBox />
      <CaseStudiesGooglePost />
      <Cta />
      <WhyChooseSAT />
      {/* <Cta /> */}

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
export default GoogleSemiconductor;
