
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/kubernetes/Services";
import ComputerVisionAI from "../components/kubernetes/ComputerVisionAI";
import PageBanner from "../components/kubernetes/PageBanner";
import TechDetailsContent from "../components/kubernetes/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import ContactForm from "../components/Contact/ContactForm";


const Index = () => {
  return (
    <>
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

      {/* <ContactForm /> */}
      <Footer />
    </>
  )
}
export default Index;