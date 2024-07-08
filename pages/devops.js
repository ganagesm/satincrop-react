import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Testimonials from "../components/Live/Testimonials";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import HeroBanner from "../components/devops/HeroBanner";
import TechDetailsContent from "../components/devops/TechDetailsContent";
import OurIndustry from "../components/Common/OurIndustry";
import BlogPostSlider from "../components/devops/BlogPostSlider";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import WhyChooseSAT from "../components/devops/WhyChooseSAT";
import Services from "../components/devops/Services";
import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <WebPageJsonLd
        headline="Drive Efficiency with SA Technologies DevOps Services"
        description="Elevate your organizational performance with AI driven DevOps solutions from SA Technologies Improve collaboration, reduce costs, and accelerate digital transformation"
        author="SA Technologies"
        keywords="DevOps"
        image="https://www.satincorp.com/images/services-details/devops-concept.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/devops/",
          title: "Drive Efficiency with SA Technologies DevOps Services",
          description:
            "Elevate your organizational performance with AI driven DevOps solutions from SA Technologies Improve collaboration, reduce costs, and accelerate digital transformation",
          images: [
            {
              url: "https://www.satincorp.com/images/services-details/devops-concept.jpg",
              width: 800,
              height: 600,
              alt: "Elevate your organizational performance with AI driven DevOps solutions from SA Technologies Improve collaboration, reduce costs, and accelerate digital transformation",
            },
          ],
          authorName: "SA Technologies",
          keywords: "DevOps",
        }}
      />
      <Head>
        <title>Drive Efficiency with SA Technologies DevOps Services </title>
        <meta
          property="og:title"
          content="Drive Efficiency with SA Technologies DevOps Services  "
          key="title"
        />
        <meta
          name="description"
          content="Elevate your organizational performance with AI-driven DevOps solutions from SA Technologies. Improve collaboration, reduce costs, and accelerate digital transformation. "
          key="description"
        />
        <link rel="canonical" href="https://www.satincorp.com/devops" />
      </Head>

      <Navbar />
      <HeroBanner />
      {/* <ComputerVisionAI /> */}
      <TechDetailsContent />
      <Services />
      <WhyChooseSAT />
      <OurIndustry />
      {/* <CaseStudiesSlider /> */}
      <Testimonials />
      <BlogPostSlider />
      <CaseStudiesPost />
      <Footer />
    </>
  );
};
export default Index;
