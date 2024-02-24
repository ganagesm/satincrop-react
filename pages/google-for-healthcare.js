import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import MainServices from "../components/Live/MainServices";
import ContactFormContent from "../components/Common/ContactFormContent";
import BlogPostSlider from "../components/GoogleHeathcare/BlogPostSlider";
import PageBanner from "../components/GoogleHeathcare/PageBanner";
import TechDetailsContent from "../components/GoogleHeathcare/TechDetailsContent";
import Cta from "../components/GoogleHeathcare/Cta";
import WhyChooseSAT from "../components/GoogleHeathcare/WhyChooseSAT";
import ServicesBox from "../components/GoogleHeathcare/ServicesBox";
import IntegratingGoogle from "../components/GoogleHeathcare/IntegratingGoogle";
import Link from "next/link";
import Head from "next/head";

const GoogleHeathcare = () => {
  return (
    <>
      <Head>
        <title>SAT : Leading Google for Healthcare Solutions Provider</title>
        <meta
          property="og:title"
          content="SAT : Leading Google for Healthcare Solutions Provider"
          key="title"
        />
        <meta
          name="description"
          content="Discover SAT expert Google for Healthcare solutions, offering customized, secure, and innovative healthcare technologies designed to enhance patient care, data management, and operational efficiency."
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Revolutionizing Healthcare with Google's Cutting-edge Solutions"
        homePageUrl="/"
        homePageText="Technology"
        activePageText=" Google for Healthcare"
        bgImgClass="item-bg28"
      />

      <TechDetailsContent />
      <ServicesBox />
      {/* <Cta /> */}
      <WhyChooseSAT />

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
export default GoogleHeathcare;
