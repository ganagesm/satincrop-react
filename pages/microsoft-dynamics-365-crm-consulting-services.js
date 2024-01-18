
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/MicrosoftConsulting/Services";
import ComputerVisionAI from "../components/MicrosoftConsulting/ComputerVisionAI";
import PageBanner from "../components/MicrosoftConsulting/PageBanner";
import TechDetailsContent from "../components/MicrosoftConsulting/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/MicrosoftConsulting/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import Link from "next/link";
import Head from 'next/head';


const Index = () => {
  return (
    <>

      <Head>
        <title>Empower Business with Microsoft D365 Solutions by SA Technologies  </title>
        <meta property="og:title" content="Empower Business with Microsoft D365 Solutions by SA Technologies " key="title" />
        <meta name="description" content="SA Technologies offers Microsoft solutions for enhanced productivity and innovation. Unleash the potential of Microsoft technologies." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Accelerate your business growth with Dynamics 365, the next generation of CRM and ERP applications."
        homePageUrl="/"
        homePageText="Home"
        activePageText="Microsoft Dynamics-365 crm consulting services"
        bgImgClass="item-bg15"
      />
      

      <TechDetailsContent />

      <div className="GCCJourney" >
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