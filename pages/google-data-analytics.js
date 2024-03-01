import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/GoogledataAnalytics/Services";
import PageBanner from "../components/GoogledataAnalytics/PageBanner";
import TechDetailsContent from "../components/GoogledataAnalytics/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/GoogledataAnalytics/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import Cta from "../components/GoogledataAnalytics/Cta";
import WhyChooseSAT from "../components/GoogledataAnalytics/WhyChooseSAT";

import Link from "next/link";
import Head from "next/head";

const GoogledataAnalytics = () => {
  return (
    <>
      <Head>
        <title>
          Drive Business Success with Google Data Analytics: Embracing Google
          Data Analytics for Business Transformation{" "}
        </title>
        <meta
          property="og:title"
          content="Drive Business Success with Google Data Analytics: Embracing Google Data Analytics for Business Transformation"
          key="title"
        />
        <meta
          name="description"
          content="Drive Business Success with Google Data Analytics: Embracing Google Data Analytics for Business Transformation"
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Transform Your Business with Google Cloud's Smart Analytics"
        homePageUrl="/"
        homePageText="Technology"
        activePageText=" Google Data Analytics"
        bgImgClass="item-bg23"
      />

      <TechDetailsContent />
      {/* <Cta /> */}
      <Services />
      <WhyChooseSAT />
      {/* <div className="GCCJourney"  >
          <div className="container">
            <div className="row ptb-100 pb-100 align-items-center">
              <div className="col-lg-5 col-md-8">
                <h2 className="align-items-center"
                  style={{
                    textAlign: "",
                  }}
                >Free engineering help from the SAT team to quickly transition to vertex AI and $350k in GCP credits</h2>
              </div>
              <div className="col-lg-7 col-md-4"
                style={{
                  textAlign: "left",
                }}
              >
                <Link href="/contact-us/" className="btn btn-primary">
                Contact us
                </Link>
              </div>

            </div>
          </div>
        </div> */}

      <MainServices />
      <BlogPostSlider />
      <ContactFormContent />
      <Footer />
    </>
  );
};
export default GoogledataAnalytics;
