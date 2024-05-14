import Navbar from "../components/GCCHome/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/GCCManagedTeams/HeroBanner";
import TechDetailsContent from "../components/GCCManagedTeams/TechDetailsContent";
import Services from "../components/GCCManagedTeams/Services";
import GlobalCapabilityCenters from "../components/GCCManagedTeams/GlobalCapabilityCenters";
import MainServicesGCC from "../components/GCCManagedTeams/MainServicesGCC";
import FunFacts from "../components/GCCManagedTeams/FunFacts";
import ImplementationMethodology from "../components/GCCManagedTeams/ImplementationMethodology";
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
      <div
        style={{
          backgroundImage: "url('/images/why-managed-teams.png')",
          height: "80vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}></div>

      <Services />
      {/* <ImplementationMethodology /> */}
      {/* <FunFacts /> */}
      {/* <GlobalCapabilityCenters /> */}
      <div
        style={{
          backgroundImage: "url('/images/why-managed-teams-2.png')",
          height: "80vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}></div>
      <MainServicesGCC />
      {/* <Footer /> */}
    </>
  );
};
export default Index;
