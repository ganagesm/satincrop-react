
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/net/Services";
import ComputerVisionAI from "../components/net/ComputerVisionAI";
import PageBanner from "../components/net/PageBanner";
import TechDetailsContent from "../components/net/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle=".NET Development Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText=".NET"
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