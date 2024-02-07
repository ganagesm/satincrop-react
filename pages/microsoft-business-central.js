
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/MicrosoftBusiness/Services";
import PageBanner from "../components/MicrosoftBusiness/PageBanner";
import TechDetailsContent from "../components/MicrosoftBusiness/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/MicrosoftBusiness/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import AboutAI from "../components/MicrosoftBusiness/AboutAI";
import ServicesBox from "../components/MicrosoftBusiness/ServicesBox";
import Link from "next/link";
import Head from 'next/head';


const Index = () => {
  return (
    <>

      <Head>
        <title>Dynamics 365 Business Central | SA Technologies Partner</title>
        <meta property="og:title" content="Dynamics 365 Business Central | SA Technologies Partner" key="title" />
        <meta name="description" content="Unlock seamless Business Central Implementation with SA Technologies, a Microsoft Gold Partner. Services include Nav to BC Migration and Integration." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Business Central Implementation"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Microsoft Business"
        bgImgClass="item-bg17"
      />
      

      <TechDetailsContent />


      <div className="" >
          <div className="container">
            <div className="row pb-100 align-items-center">
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
      
      <AboutAI />

      <div className="col-lg-12 col-md-12">
        <div className="ai-all-services-btn ptb-50">
          <Link href="/contact-us/" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>

      <ServicesBox />

      

      {/* <ComputerVisionAI /> */}

      <Services />

      

      

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