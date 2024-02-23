import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import PageBanner from "../components/GoogleInfrastructure/PageBanner";
import TechDetailsContent from "../components/GoogleInfrastructure/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/GoogleInfrastructure/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import WhyChooseSAT from "../components/GoogleInfrastructure/WhyChooseSAT";
import Link from "next/link";
import Head from "next/head";

const GoogleInfrastructure = () => {
  return (
    <>
      <Head>
        <title>Future-Ready Operations: Explore Google's Infrastructure Modernization for Peak Performance.  </title>
        <meta property="og:title" content="Future-Ready Operations: Explore Google's Infrastructure Modernization for Peak Performance." key="title" />
        <meta name="description" content="Elevate your business with Google's Infrastructure Modernization. Optimize operations, scale seamlessly, and stay ahead in the era of digital transformation." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Infrastructure Modernization "
        homePageUrl="/"
        homePageText="Technology"
        activePageText=" Google Infrastructure Modernization"
        bgImgClass="item-bg22"
      />

        <div className=" ptb-50">
          <div className="section-title">
            <h3>Google Cloud Infrastructure Modernization: Elevate Your IT Landscape</h3>
            <p>SA Technologies is at the forefront of revolutionizing infrastructure with our comprehensive Google Cloud Infrastructure 
              Modernization solutions. Our partnership with Google Cloud encompasses a spectrum of modernization strategies, 
              from basic rehosting to sophisticated replatforming, all designed to integrate the latest in technological advancements, 
              from AI to real-time analytics, into your IT infrastructure. </p>
          </div>
        </div>  

      <TechDetailsContent />
      <WhyChooseSAT />
       <div className="GCCJourney"  >
          <div className="container">
            <div className="row ptb-100 pb-100 align-items-center">
              <div className="col-lg-5 col-md-8">
                {/* <h2 className="align-items-center"
                  style={{
                    textAlign: "",
                  }}
                >Free engineering help from the SAT team to quickly transition to vertex AI and $350k in GCP credits</h2> */}
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
        </div>
      <MainServices />
      <BlogPostSlider />
      <ContactFormContent />
      <Footer />
    </>
  );
};
export default GoogleInfrastructure;
