
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/angular/Services";
import ComputerVisionAI from "../components/angular/ComputerVisionAI";
import PageBanner from "../components/angular/PageBanner";
import TechDetailsContent from "../components/angular/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Angular Development Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Angular"
        bgImgClass="item-bg2"
      />

      <TechDetailsContent />
      <ComputerVisionAI />
      <Services />
      {/* <BlogPost /> */}

      <Footer />
    </>
  )
}
export default Index;