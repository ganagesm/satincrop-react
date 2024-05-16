import Navbar from "../components/GCCHome/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/GCCHome/HeroBanner";
import TechDetailsContent from "../components/GCCHome/TechDetailsContent";
import Services from "../components/GCCHome/Services";
import GlobalCapabilityCenters from "../components/GCCHome/GlobalCapabilityCenters";
import MainServicesGCC from "../components/GCCHome/MainServicesGCC";
import ProfessionalSolutions from "../components/GCCHome/ProfessionalSolutions";
import OurFeaturedSolutions from "../components/GCCHome/OurFeaturedSolutions";
import Script from "next/script";
import Head from "next/head";
import ZohoScript from "../components/ZohoScript";
// import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";
import { WebPageJsonLd, NextSeo } from "next-seo";

const Index = () => {
  return (
    <>
      <WebPageJsonLd
        headline="SAT | Global Team Solutions & GCC Expertise | Empowering Collaboration "
        description="Discover how SAT empowers global teams with cutting-edge GCC solutions. Experience seamless collaboration and enhanced productivity with our expert consulting services, designed to drive success in diverse environments. Connect with us to transform your team dynamics today!"
        author="SA Technologies"
        keywords="IT Consulting"
        image="https://www.satincorp.com/images/about/5.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/",
          title:
            "SAT | Global Team Solutions & GCC Expertise | Empowering Collaboration ",
          description:
            "Discover how SAT empowers global teams with cutting-edge GCC solutions. Experience seamless collaboration and enhanced productivity with our expert consulting services, designed to drive success in diverse environments. Connect with us to transform your team dynamics today!",
          images: [
            {
              url: "https://www.satincorp.com/images/about/5.jpg",
              width: 800,
              height: 600,
              alt: "SAT | Global Team Solutions & GCC Expertise | Empowering Collaboration ",
            },
          ],
          authorName: "SA Technologies",
          keywords: "IT Consulting",
        }}
      />
      <Head>
        <title>
          SAT | Global Team Solutions & GCC Expertise | Empowering Collaboration
        </title>
        <meta
          property="og:title"
          content="SAT | Global Team Solutions & GCC Expertise | Empowering Collaboration "
          key="title"
        />
        <meta
          name="description"
          content="Discover how SAT empowers global teams with cutting-edge GCC solutions. Experience seamless collaboration and enhanced productivity with our expert consulting services, designed to drive success in diverse environments. Connect with us to transform your team dynamics today!"
          key=""
        />
      </Head>
      {/* <ZohoScript /> */}
      <Navbar />
      <HeroBanner />
      <TechDetailsContent />
      <Services />
      {/* <ProfessionalSolutions /> */}
      <GlobalCapabilityCenters />
      <OurFeaturedSolutions />
      {/* <MainServicesGCC /> */}
      {/* <Footer /> */}
    </>
  );
};
export default Index;
