
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/CSharp/Services";
import ComputerVisionAI from "../components/CSharp/ComputerVisionAI";
import PageBanner from "../components/CSharp/PageBanner";
import TechDetailsContent from "../components/CSharp/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import ContactForm from "../components/Contact/ContactForm";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Your trusted Salesforce partner for customized solutions and exceptional service"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Salesforce "
        bgImgClass="item-bg6"
      />

      <TechDetailsContent />
      <ComputerVisionAI />
        <div className="col-lg-12 col-md-12">
          <div className="ai-all-services-btn ptb-50">
            <Link href="#contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      <MainServices />
      <BlogPostSlider />

      <section className="contact-area pb-100">
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
      </section>  
      {/* <Services /> */}
      <Footer />
    </>
  )
}
export default Index;