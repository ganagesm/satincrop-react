import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/InternalAudit/HeroBanner";
import Industries from "../components/Live/Industries";
// import Testimonials from "../components/InternalAudit/Testimonials";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import CaseStudiesSlider from "../components/Common/CaseStudiesSlider";
import WhyTriosource from "../components/InternalAudit/WhyTriosource";
import ComputerVisionAI from "../components/InternalAudit/ComputerVisionAI";
import TechDetailsContent from "../components/InternalAudit/TechDetailsContent";
import Services from "../components/InternalAudit/Services";
import WhyChooseSAT from "../components/InternalAudit/WhyChooseSAT";
import Head from 'next/head';

const Index = () => {
  return (
    <>

      <Head>
        <title>SOX Compliance Solutions | SA Technologies Inc.   </title>
        <meta property="og:title" content="SOX Compliance Solutions | SA Technologies Inc.  " key="title" />
        <meta name="description" content="Achieve Sarbanes-Oxley (SOX) compliance with SA Technologies. Our internal audit solutions simplify the process, reduce costs, and improve efficiency for your organization." key="description" />
      </Head>

      <Navbar />
      <HeroBanner />
      {/* <ComputerVisionAI /> */}
      <TechDetailsContent />
      {/* <Services /> */}
      {/* <Industries /> */}
      <WhyChooseSAT />
      <OurIndustry />
      {/* <WhyTriosource /> */}
      <CaseStudiesSlider />
      <Testimonials />
      <Footer />
    </>
  )
}
export default Index;