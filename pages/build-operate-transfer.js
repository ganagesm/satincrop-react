import Navbar from "../components/GCCHome/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/GCCBuildOperatorTrasfter/HeroBanner";
import TechDetailsContent from "../components/GCCBuildOperatorTrasfter/TechDetailsContent";
import Services from "../components/GCCBuildOperatorTrasfter/Services";
import GlobalCapabilityCenters from "../components/GCCBuildOperatorTrasfter/GlobalCapabilityCenters";
import MainServicesGCC from "../components/GCCBuildOperatorTrasfter/MainServicesGCC";
import ImplementationMethodology from "../components/GCCBuildOperatorTrasfter/ImplementationMethodology";
import Script from "next/script";
import Head from "next/head";
import ZohoScript from "../components/ZohoScript";
// import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";
import { WebPageJsonLd, NextSeo } from "next-seo";

const Index = () => {
  return (
    <>
      <WebPageJsonLd
        headline="Innovative BOT Model | Prioritize Talent and Culture "
        description="Discover SAT revolutionary BOT (Build-Operate-Transfer) model, Unlike traditional models, our approach minimizes disruptions and enhances growth potential, integrating top talent sourcing, customized workspaces with IT solutions, and robust compliance and governance. "
        author="SA Technologies"
        keywords="IT Consulting"
        image="https://www.satincorp.com/images/about/5.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/",
          title: "Innovative BOT Model | Prioritize Talent and Culture ",
          description:
            "Discover SAT revolutionary BOT (Build-Operate-Transfer) model, Unlike traditional models, our approach minimizes disruptions and enhances growth potential, integrating top talent sourcing, customized workspaces with IT solutions, and robust compliance and governance. ",
          images: [
            {
              url: "https://www.satincorp.com/images/about/5.jpg",
              width: 800,
              height: 600,
              alt: "Innovative BOT Model | Prioritize Talent and Culture ",
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
          content="Innovative BOT Model | Prioritize Talent and Culture "
          key="title"
        />
        <meta
          name="description"
          content="Discover SAT revolutionary BOT (Build-Operate-Transfer) model, Unlike traditional models, our approach minimizes disruptions and enhances growth potential, integrating top talent sourcing, customized workspaces with IT solutions, and robust compliance and governance. "
          key=""
        />
      </Head>
      {/* <ZohoScript /> */}
      <Navbar />
      <HeroBanner />
      <TechDetailsContent />
      <Services />
      <ImplementationMethodology />
      {/* <GlobalCapabilityCenters />
      <MainServicesGCC /> */}
      {/* <Footer /> */}
    </>
  );
};
export default Index;
