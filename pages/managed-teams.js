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
        headline="Managed Teams Model | Global Talent & Business Solutions "
        description="Explore SAT Managed Teams, an advanced engagement model designed to meet global talent demands and unlock business opportunities. Our suite offers talent sourcing, recruitment, and engagement; customized workspaces with integrated IT solutions; and complete compliance, governance, and operational support. "
        author="SA Technologies"
        keywords="IT Consulting"
        image="https://www.satincorp.com/images/about/5.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/",
          title: "Managed Teams Model | Global Talent & Business Solutions ",
          description:
            "Explore SAT Managed Teams, an advanced engagement model designed to meet global talent demands and unlock business opportunities. Our suite offers talent sourcing, recruitment, and engagement; customized workspaces with integrated IT solutions; and complete compliance, governance, and operational support. ",
          images: [
            {
              url: "https://www.satincorp.com/images/about/5.jpg",
              width: 800,
              height: 600,
              alt: "Managed Teams Model | Global Talent & Business Solutions ",
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
          content="Managed Teams Model | Global Talent & Business Solutions"
          key="title"
        />
        <meta
          name="description"
          content="Explore SAT Managed Teams, an advanced engagement model designed to meet global talent demands and unlock business opportunities. Our suite offers talent sourcing, recruitment, and engagement; customized workspaces with integrated IT solutions; and complete compliance, governance, and operational support.           "
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
