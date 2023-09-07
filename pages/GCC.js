import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/GCC/HeroBanner";
import Industries from "../components/GCC/Industries";
// import Testimonials from "../components/InternalAudit/Testimonials";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/GCC/Testimonials";
import CaseStudiesSlider from "../components/Common/CaseStudiesSlider";
import WhyTriosource from "../components/GCC/WhyTriosource";
import ComputerVisionAI from "../components/GCC/ComputerVisionAI";
import ContactForm from "../components/Contact/ContactForm";
import Services from "../components/GCC/Services";
import WhyChooseSAT from "../components/GCC/WhyChooseSAT";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import Team from "../components/GCC/Team";


const Index = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      {/* <TechDetailsContent /> */}
        
        <Services />  
       <Industries /> 
      <WhyChooseSAT/>
    
      <Team /> 
      <BlogPostSlider />
      {/* <Testimonials /> */}
      <section className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h3>Reach out to us today to explore how our comprehensive solution can pave the way for your global success.</h3>
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
      <Footer />
    </>
  )
}
export default Index;