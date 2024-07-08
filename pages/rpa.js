import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/rpa/HeroBanner";
import Industries from "../components/Live/Industries";
// import Testimonials from "../components/rpa/Testimonials";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import BlogPostSlider from "../components/rpa/BlogPostSlider";
import WhyTriosource from "../components/rpa/WhyTriosource";
import ComputerVisionAI from "../components/rpa/ComputerVisionAI";
import TechDetailsContent from "../components/rpa/TechDetailsContent";
import Services from "../components/rpa/Services";
import WhyChooseSAT from "../components/rpa/WhyChooseSAT";
import Head from "next/head";
import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";
const Index = () => {
  return (
    <>
      <WebPageJsonLd
        headline="Robotic Process Automation (RPA): The Future of Business Automation"
        description="SA Technologies RPA solutions can help you achieve operational excellence by streamlining processes, eliminating errors, and improving productivity"
        author="SA Technologies"
        keywords="Robotic Process Automation (RPA)"
        image="https://www.satincorp.com/images/services-details/rpa-concept.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/rpa/",
          title:
            "Robotic Process Automation (RPA): The Future of Business Automation",
          description:
            "SA Technologies RPA solutions can help you achieve operational excellence by streamlining processes, eliminating errors, and improving productivity",
          images: [
            {
              url: "https://www.satincorp.com/images/services-details/rpa-concept.jpg",
              width: 800,
              height: 600,
              alt: "SA Technologies RPA solutions can help you achieve operational excellence by streamlining processes, eliminating errors, and improving productivity",
            },
          ],
          authorName: "SA Technologies",
          keywords: "Robotic Process Automation (RPA)",
        }}
      />
      <Head>
        <title>
          Robotic Process Automation (RPA): The Future of Business Automation{" "}
        </title>
        <meta
          property="og:title"
          content="Robotic Process Automation (RPA): The Future of Business Automation "
          key="title"
        />
        <meta
          name="description"
          content="SA Technologies RPA solutions can help you achieve operational excellence by streamlining processes, eliminating errors, and improving productivity. "
          key="description"
        />
        <link rel="canonical" href="https://www.satincorp.com/rpa" />
      </Head>
      <Navbar />
      <HeroBanner />
      {/* <ComputerVisionAI /> */}
      <TechDetailsContent />
      <Services />
      {/* <Industries /> */}
      <WhyChooseSAT />
      <OurIndustry />
      {/* <WhyTriosource /> */}
      <Testimonials />
      <BlogPostSlider />
      <CaseStudiesPost />
      <Footer />
    </>
  );
};
export default Index;
