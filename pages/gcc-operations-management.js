import Navbar from "../components/GCCHome/Navbar";
import Footer from "../components/GCCHome/Footer";
import HeroBanner from "../components/GccOperations/HeroBanner";
import TechDetailsContent from "../components/GccOperations/TechDetailsContent";
import Services from "../components/GccOperations/Services";
import GlobalCapabilityCenters from "../components/GccOperations/GlobalCapabilityCenters";
import MainServicesGCC from "../components/GccOperations/MainServicesGCC";
import Script from "next/script";
import Head from "next/head";
import ZohoScript from "../components/ZohoScript";
// import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";
import { WebPageJsonLd, NextSeo } from "next-seo";

const Index = () => {
  return (
    <>
      <WebPageJsonLd
        headline="SA Technologies | Leading IT Consulting: AI Solutions, Digital Engineering, Enterprise Modernization"
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
            "SA Technologies | Leading IT Consulting: AI Solutions, Digital Engineering, Enterprise Modernization",
          description:
            "SA Technologies Your Trusted IT Consulting and Offshore Partner with 20 years of experience, serving 500 clients Elevate your business with AI Solutions, Digital Engineering, and Enterprise Modernization Services",
          images: [
            {
              url: "https://www.satincorp.com/images/about/5.jpg",
              width: 800,
              height: 600,
              alt: "SA Technologies | Leading IT Consulting: AI Solutions, Digital Engineering, Enterprise Modernization",
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
          content="SA Technologies | Leading IT Consulting: AI Solutions, Digital Engineering, Enterprise Modernization"
          key="title"
        />
        <meta
          name="description"
          content="SA Technologies - Your Trusted IT Consulting and Offshore Partner with 20+ years of experience, serving 500+ clients. Elevate your business with AI Solutions, Digital Engineering, and Enterprise Modernization Services."
          key=""
        />
      </Head>
      {/* <ZohoScript /> */}
      <Navbar />
      <HeroBanner />
      <TechDetailsContent />
      <Services />
      {/* <GlobalCapabilityCenters /> */}
      {/* <MainServicesGCC /> */}
      <Footer />
    </>
  );
};
export default Index;
