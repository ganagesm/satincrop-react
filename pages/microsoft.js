
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/kubernetes/Services";
import ComputerVisionAI from "../components/kubernetes/ComputerVisionAI";
import PageBanner from "../components/kubernetes/PageBanner";
import TechDetailsContent from "../components/kubernetes/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/kubernetes/BlogPostSlider";
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
        pageTitle="Redefining Horizons with Microsoft Cloud Evolution"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Microsoft"
        bgImgClass="item-bg2"
      />

      <TechDetailsContent />
      <ComputerVisionAI />
      {/* <Services /> */}
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

      {/* <ContactFormContent /> */}
      <section className="contact-area ptb-110 bg-f2f6f9">
        <div className="container">
          <div className="section-title" style={{marginBottom:"20px"}}>
            <span>Message Us</span>
            {/* <h2>Drop us a Message with any inquiry</h2> */}
            <h3>Contact us by Phone Number or Email Address</h3>
            {/* <p>
              Thank you for your interest in SA Technologies. We’d like to ask
              you a few questions to get to know you and your requirements
              better.
            </p> */}
          </div>

          {/* <div className="contact-form">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="contact-image">
                  <img src="/images/contact.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <ContactForm />
                <div id="zf_div_gx3HYtgM2Bt5t0O-W-GD22aen9GH11mV3mk-CF5dsLM"></div>
              </div>
            </div>
          </div> */}

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
              <h2 style={{padding:'10px 0'}}>
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

              {/* <ul className="social">
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Index;