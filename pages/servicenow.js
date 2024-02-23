
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/rails/Services";
import ComputerVisionAI from "../components/rails/ComputerVisionAI";
import PageBanner from "../components/rails/PageBanner";
import TechDetailsContent from "../components/rails/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import Link from "next/link";
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Streamline your Operations with ServiceNow by SA Technologies Expertise  </title>
        <meta property="og:title" content="Streamline your Operations with ServiceNow by SA Technologies Expertise " key="title" />
        <meta name="description" content="SA Technologies offers ServiceNow solutions for optimized service management. Discover ServiceNow's potential with SA Technologies." key="description" />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="ServiceNow Consulting and Implementation Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="ServiceNow"
        bgImgClass="item-bg7"
      />

      <TechDetailsContent />
      <ComputerVisionAI />
      <div className="col-lg-12 col-md-12">
        <div className="ai-all-services-btn ptb-50">
          <Link href="/contact-us/" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
      <MainServices />
      <BlogPostSlider />

      {/* <ContactFormContent /> */}
      <section className="contact-area ptb-110 bg-f2f6f9">
        <div className="container">
          <div className="section-title" style={{ marginBottom: "20px" }}>
            <span>Message Us</span>
            <h3>Contact us by Phone Number or Email Address</h3>
          </div>

          {/* Contact info */}
          <div className="contact-info">
            <div className="contact-info-content">
              {/* <h2 style={{ marginBottom: "20px" }}>
                Contact us by Phone Number or Email Address
              </h2> */}
              <h5>Click on the chatbot to connect with our Expert</h5>
              <h5>
                Contact us by WhatsApp with
                <Link
                  href="https://api.whatsapp.com/send/?phone=%2B9107875787550&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?"
                  target="_blank"
                  className="">
                  <img
                    src="/images/icon/whatsApp-logo.svg"
                    width={"80px"}
                    alt="whatsapp"
                  />
                </Link>
              </h5>
              <h2 style={{ padding: "10px 0" }}>
                <span className="number">
                  USA : <a href="tel:(408)-495-5822">(408)-495-5822</a>
                </span>
                <span className="number">&nbsp;&nbsp;&nbsp;</span>
                <span className="number">
                  India : <a href="tel:+917875787550">+91 78757 87550</a>
                </span>
              </h2>
              <h2>
                <span className="email">
                  <a href="mailto:sales@satincorp.com">sales@satincorp.com</a>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/*<Services />
       <BlogPost /> */}

      <Footer />
    </>
  )
}
export default Index;