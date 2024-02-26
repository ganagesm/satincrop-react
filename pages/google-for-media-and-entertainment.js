import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import MainServices from "../components/Live/MainServices";
import ContactFormContent from "../components/Common/ContactFormContent";
import BlogPostSlider from "../components/GoogleforMediaAndEntertainment/BlogPostSlider";
import PageBanner from "../components/GoogleforMediaAndEntertainment/PageBanner";
import TechDetailsContent from "../components/GoogleforMediaAndEntertainment/TechDetailsContent";
import Cta from "../components/GoogleforMediaAndEntertainment/Cta";
import WhyChooseSAT from "../components/GoogleforMediaAndEntertainment/WhyChooseSAT";
import ServicesBox from "../components/GoogleforMediaAndEntertainment/ServicesBox";
import IntegratingGoogle from "../components/GoogleforMediaAndEntertainment/IntegratingGoogle";
import Link from "next/link";
import Head from "next/head";

const GoogleforMediaAndEntertainment = () => {
  return (
    <>
      <Head>
        <title>
          Revolutionize Your Media & Entertainment Business with SAT
        </title>
        <meta
          property="og:title"
          content="Revolutionize Your Media & Entertainment Business with SAT"
          key="title"
        />
        <meta
          name="description"
          content="Empower your media and entertainment projects with SA Technologies. From advanced analytics and AI insights to immersive VR/AR experiences and robust cloud services, we offer tailored solutions to elevate your content and captivate your audience. Transform your digital strategy with our expert consulting today."
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Revolutionizing Media and Entertainment with Cutting-Edge Google Technologies "
        homePageUrl="/"
        homePageText="Technology"
        activePageText=" Google Cloud for Media & Entertainment"
        bgImgClass="item-bg31"
      />

      <TechDetailsContent />
      <ServicesBox />
      {/* <Cta /> */}
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
export default GoogleforMediaAndEntertainment;
