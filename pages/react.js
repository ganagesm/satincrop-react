import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/reactjs/Services";
import ComputerVisionAI from "../components/reactjs/ComputerVisionAI";
import PageBanner from "../components/reactjs/PageBanner";
import TechDetailsContent from "../components/reactjs/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Business Solutions using
        Google Cloud"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Google"
        bgImgClass="item-bg3"
      />

      <TechDetailsContent />
      <ComputerVisionAI />
      <Services />
      <Footer />
    </>
  );
};
export default Index;
