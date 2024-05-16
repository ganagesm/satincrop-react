import Navbar from "../components/GCCHome/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/GCCGlobalCapabilityCenter/HeroBanner";
import TechDetailsContent from "../components/GCCGlobalCapabilityCenter/TechDetailsContent";
import Services from "../components/GCCGlobalCapabilityCenter/Services";
import GlobalCapabilityCenters from "../components/GCCGlobalCapabilityCenter/GlobalCapabilityCenters";
import MainServicesGCC from "../components/GCCGlobalCapabilityCenter/MainServicesGCC";
import FunFacts from "../components/GCCGlobalCapabilityCenter/FunFacts";
import ImplementationMethodology from "../components/GCCGlobalCapabilityCenter/ImplementationMethodology";
import Script from "next/script";
import Head from "next/head";
import ZohoScript from "../components/ZohoScript";
// import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";
import { WebPageJsonLd, NextSeo } from "next-seo";

const Index = () => {
  return (
    <>
      <WebPageJsonLd
        headline="GCC-as-a-Service | Flexible Solutions by SAT | Scale Globally "
        description="SA Technologies Your Trusted IT Consulting and Offshore Partner with 20 years of experience, serving 500 clients Elevate your business with AI Solutions, Digital Engineering, and Enterprise Modernization Services"
        author="SA Technologies"
        keywords="IT Consulting"
        image="https://www.satincorp.com/images/about/5.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/",
          title:
            "GCC-as-a-Service | Flexible Solutions by SAT | Scale Globally ",
          description:
            "Build and scale your global teams with SA Technologies' flexible 'pay-as-you-grow' GCC-as-a-Service. Our comprehensive suite ensures efficient sourcing, hiring, and engagement of top-tier talent, alongside providing customized, technology-integrated workspaces.",
          images: [
            {
              url: "https://www.satincorp.com/images/about/5.jpg",
              width: 800,
              height: 600,
              alt: "GCC-as-a-Service | Flexible Solutions by SAT | Scale Globally ",
            },
          ],
          authorName: "SA Technologies",
          keywords: "IT Consulting",
        }}
      />
      <Head>
        <title>
          SA Technologies | Leading IT Consulting: AI Solutions, Digital
          Engineering, Enterprise Modernization
        </title>
        <meta
          property="og:title"
          content="GCC-as-a-Service | Flexible Solutions by SAT | Scale Globally "
          key="title"
        />
        <meta
          name="description"
          content="Build and scale your global teams with SA Technologies' flexible 'pay-as-you-grow' GCC-as-a-Service. Our comprehensive suite ensures efficient sourcing, hiring, and engagement of top-tier talent, alongside providing customized, technology-integrated workspaces."
          key=""
        />
      </Head>
      {/* <ZohoScript /> */}
      <Navbar />
      <HeroBanner />
      <TechDetailsContent />
      {/* <Services /> */}
      <ImplementationMethodology />
      <FunFacts />
      {/* <GlobalCapabilityCenters />
      <MainServicesGCC /> */}
      {/* <Footer /> */}
    </>
  );
};
export default Index;
