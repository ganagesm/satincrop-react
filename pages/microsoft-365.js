
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/Microsoft365/Services";
import WhyChooseSAT from "../components/Microsoft365/WhyChooseSAT";
import PageBanner from "../components/Microsoft365/PageBanner";
import TechDetailsContent from "../components/Microsoft365/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/Microsoft365/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import AboutAI from "../components/Microsoft365/AboutAI";
import ServicesBox from "../components/Microsoft365/ServicesBox";
import Link from "next/link";
import Head from 'next/head';


const Index = () => {
  return (
    <>

      <Head>
        <title>Microsoft 365 Solutions: Empowering Your Modern Workplace</title>
        <meta property="og:title" content="Microsoft 365 Solutions: Empowering Your Modern Workplace" key="title" />
        <meta name="description" content="Optimize collaboration and productivity with Microsoft 365, featuring powerful apps and cloud-based tools for modern businesses." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Unify your business data on a single dashboard & experience-rich visuals at Cloud Speed. "
        homePageUrl="/"
        homePageText="Home"
        activePageText="Microsoft 365"
        bgImgClass="item-bg17"
      />
      

      <TechDetailsContent />

      
      <AboutAI />

      <ServicesBox />

      <div className="" >
          <div className="container">
            <div className="row ptb-100 pb-100 align-items-center">
              <div className="col-lg-7 col-md-7">
                <h2 className="align-items-center"
                  style={{
                    textAlign: "right",
                  }}
                >Connect with our Dynamics 365 CRM Expert now</h2>
              </div>
              <div className="col-lg-5 col-md-5"
                style={{
                  textAlign: "left",
                }}
              >
                <Link href="/contact-us/" className="btn btn-primary">
                Talk to our Microsoft Expert
                </Link>
              </div>

            </div>
          </div>
        </div>

      {/* <ComputerVisionAI /> */}

      <Services />

      

      <div className="col-lg-12 col-md-12">
        <div className="ai-all-services-btn ptb-50">
          <Link href="/contact-us/" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>

      {/* <WhyChooseSAT />   */}



      <MainServices />
      <BlogPostSlider />

      {/* <section className="contact-area pb-100">
        <div className="container">
          <div className="section-title">
            <h2>Connect With Us</h2>
          </div>

          <div className="contact-form">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="contact-image">
                  <img src="/images/footer-img.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <ContactForm />
              </div>
            </div>
          </div>          
        </div>
      </section> */}

      <ContactFormContent />
      <Footer />
    </>
  )
}
export default Index;