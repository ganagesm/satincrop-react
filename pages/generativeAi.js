
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/GenerativeAi/Services";
// import ComputerVisionAI from "../components/GenerativeAi/ComputerVisionAI";
import PageBanner from "../components/GenerativeAi/PageBanner";
import TechDetailsContent from "../components/GenerativeAi/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Generative Ai Development Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Generative Ai"
        bgImgClass="item-bg2"
      />

      <TechDetailsContent />
      {/* <ComputerVisionAI /> */}
      <Services />
      {/* <BlogPost /> */}

      <Footer />
    </>
  )
}
export default Index;