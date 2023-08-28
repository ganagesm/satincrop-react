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
        pageTitle="React Development Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="React"
        bgImgClass="item-bg2"
      />

      <TechDetailsContent />
      <ComputerVisionAI />
      <Services />
      <Footer />
    </>
  );
};
export default Index;
