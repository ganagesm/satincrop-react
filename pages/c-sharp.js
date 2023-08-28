
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/CSharp/Services";
import ComputerVisionAI from "../components/CSharp/ComputerVisionAI";
import PageBanner from "../components/CSharp/PageBanner";
import TechDetailsContent from "../components/CSharp/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Top C# Development Company"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="C#"
        bgImgClass="item-bg2"
      />

      <TechDetailsContent />
      <ComputerVisionAI />
      <Services />
      <Footer />
    </>
  )
}
export default Index;