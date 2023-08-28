
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/kubernetes/Services";
import ComputerVisionAI from "../components/kubernetes/ComputerVisionAI";
import PageBanner from "../components/kubernetes/PageBanner";
import TechDetailsContent from "../components/kubernetes/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Kubernetes Development Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Kubernetes"
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