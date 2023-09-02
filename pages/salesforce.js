
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/CSharp/Services";
import ComputerVisionAI from "../components/CSharp/ComputerVisionAI";
import PageBanner from "../components/CSharp/PageBanner";
import TechDetailsContent from "../components/CSharp/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
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

      <ContactFormContent />
      <Footer />
    </>
  )
}
export default Index;