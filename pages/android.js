
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/android/Services";
import ComputerVisionAI from "../components/android/ComputerVisionAI";
import PageBanner from "../components/android/PageBanner";
import TechDetailsContent from "../components/android/TechDetailsContent";

const Index = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Android Development Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Android"
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