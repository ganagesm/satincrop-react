import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import MainServices from "../components/Live/MainServices";
import ContactFormContent from "../components/Common/ContactFormContent";
import BlogPostSlider from "../components/GoogleApplication/BlogPostSlider";
import PageBanner from "../components/GoogleApplication/PageBanner";
import TechDetailsContent from "../components/GoogleApplication/TechDetailsContent";
import Cta from "../components/GoogleApplication/Cta";
import ServicesBox from "../components/GoogleApplication/ServicesBox";
import Services from "../components/GoogleApplication/Services";
import IntegratingGoogle from "../components/GoogleApplication/IntegratingGoogle";
import Link from "next/link";
import Head from "next/head";

const GoogleWorkspace = () => {
  return (
    <>
      <Head>
        <title>Accelerate Google Application Modernization with SAT Experts</title>
        <meta property="og:title" content="Accelerate Google Application Modernization with SAT Experts" key="title" />
        <meta name="description" content="With SAT Expert in GCP Application Modernization get fast upgrades on Google Cloud within timelines and affordable budgets for enterprises." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Google Application Modernization Services: Propel Your Business into the Future"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Google Application"
        bgImgClass="item-bg26"
      />

      <TechDetailsContent />
      <Cta />
      <ServicesBox />
      <Services />
      <div className="GCCJourney" style={{marginTop:"0"}}>
        <div className="container">
          <div className="row ptb-100 pb-100 align-items-center">
            <div className="col-lg-7 col-md-8">
              <h2 className="align-items-center"
                style={{textAlign: "",}}> 
               Ready for change? Let's upgrade your apps together
              </h2>
            </div>
            <div className="col-lg-5 col-md-4"
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
      
      <IntegratingGoogle />
      <div className="GCCJourney" style={{marginTop:"0"}}>
        <div className="container">
          <div className="row ptb-100 pb-100 align-items-center">
            <div className="col-lg-7 col-md-8">
              <h2 className="align-items-center"
                style={{textAlign: "",}}> 
               Reach out to us to embark on your modernization journey.
              </h2>
            </div>
            <div className="col-lg-5 col-md-4"
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
export default GoogleWorkspace;
