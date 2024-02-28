import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import MainServices from "../components/Live/MainServices";
import ContactFormContent from "../components/Common/ContactFormContent";
import BlogPostSlider from "../components/GoogleWorkspace/BlogPostSlider";
import PageBanner from "../components/GoogleWorkspace/PageBanner";
import TechDetailsContent from "../components/GoogleWorkspace/TechDetailsContent";
import Cta from "../components/GoogleWorkspace/Cta";
import ServicesBox from "../components/GoogleWorkspace/ServicesBox";
import Services from "../components/GoogleWorkspace/Services";
import IntegratingGoogle from "../components/GoogleWorkspace/IntegratingGoogle";
import Link from "next/link";
import Head from "next/head";

const GoogleWorkspace = () => {
  return (
    <>
      <Head>
        <title>Get Google Workspace Solutions with SAT</title>
        <meta
          property="og:title"
          content="Get Google Workspace Solutions with SAT"
          key="title"
        />
        <meta
          name="description"
          content="Bring your team together with Google Workspace Solutions by SA Technologies. Enhance collaboration and productivity with SAT comprehensive google cloud-based solutions."
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Elevate Your Business with Google Workspace"
        homePageUrl="/"
        homePageText="Technology"
        activePageText=" Google Workspace"
        bgImgClass="item-bg25"
      />

      <TechDetailsContent />
      <ServicesBox />
      <Cta />
      <Services />
      <div className="GCCJourney" style={{ marginTop: "0" }}>
        <div className="container">
          <div className="row ptb-100 pb-100 align-items-center">
            <div className="col-lg-7 col-md-8">
              <h2 className="align-items-center" style={{ textAlign: "" }}>
                Ready to Transform Your Workspace? Bring Google Workspace to
                Your Business
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

      <IntegratingGoogle />
      <MainServices />
      <BlogPostSlider />
      <ContactFormContent />
      <Footer />
    </>
  );
};
export default GoogleWorkspace;
