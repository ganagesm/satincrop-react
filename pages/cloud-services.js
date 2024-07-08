import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Industries from "../components/Live/Industries";
import Testimonials from "../components/Live/Testimonials";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import HeroBanner from "../components/cloud-nfrastructure-services/HeroBanner";
import WhyTriosource from "../components/cloud-nfrastructure-services/WhyTriosource";
import ComputerVisionAI from "../components/cloud-nfrastructure-services/ComputerVisionAI";
import TechDetailsContent from "../components/cloud-nfrastructure-services/TechDetailsContent";
import OurIndustry from "../components/Common/OurIndustry";
import BlogPostSlider from "../components/cloud-nfrastructure-services/BlogPostSlider";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import WhyChooseSAT from "../components/cloud-nfrastructure-services/WhyChooseSAT";
import Services from "../components/cloud-nfrastructure-services/Services";
import Head from "next/head";
import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";

const Index = () => {
  return (
    <>
      <WebPageJsonLd
        headline="Scale Securely with SA Technologies Cloud Services"
        description="SA Technologies offers cloud solutions that enable seamless scalability and security for your business"
        author="SA Technologies"
        keywords="Cloud Services"
        image="https://www.satincorp.com/images/banners/Big_Data_Analytics_in_Cloud_Computing.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/cloud-services/",
          title: "Scale Securely with SA Technologies Cloud Services",
          description:
            "SA Technologies offers cloud solutions that enable seamless scalability and security for your business",
          images: [
            {
              url: "https://www.satincorp.com/images/banners/Big_Data_Analytics_in_Cloud_Computing.jpg",
              width: 800,
              height: 600,
              alt: "SA Technologies offers cloud solutions that enable seamless scalability and security for your business",
            },
          ],
          authorName: "SA Technologies",
          keywords: "Cloud Services",
        }}
      />
      <Head>
        <title>Scale Securely with SA Technologies Cloud Services </title>
        <meta
          property="og:title"
          content="Scale Securely with SA Technologies Cloud Services "
          key="title"
        />
        <meta
          name="description"
          content="SA Technologies offers cloud solutions that enable seamless scalability and security for your business."
          key="description"
        />
        <link rel="canonical" href="https://www.satincorp.com/cloud-services" />
      </Head>

      <Navbar />
      <HeroBanner />
      {/* <ComputerVisionAI /> */}
      <TechDetailsContent />
      <Services />
      <WhyChooseSAT />
      <OurIndustry />
      <Testimonials />
      {/* <CaseStudiesSlider /> */}
      <BlogPostSlider />
      <CaseStudiesPost />
      <Footer />
    </>
  );
};
export default Index;
