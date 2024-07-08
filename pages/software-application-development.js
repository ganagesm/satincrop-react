import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Industries from "../components/Live/Industries";
// import Testimonials from "../components/Live/Testimonials";
import HeroBanner from "../components/software-application-development/HeroBanner";
import WhyTriosource from "../components/software-application-development/WhyTriosource";
// import Testimonials from "../components/software-application-development/Testimonials";
import BlogPost from "../components/software-application-development/BlogPost";
import ComputerVisionAI from "../components/software-application-development/ComputerVisionAI";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import TechDetailsContent from "../components/software-application-development/TechDetailsContent";
import Services from "../components/software-application-development/Services";
import WhyChooseSAT from "../components/software-application-development/WhyChooseSAT";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <WebPageJsonLd
        headline="Leading the Way in AI-Enhanced Software Development"
        description="SA Technologies is at the forefront of AI enhanced software development, helping businesses to create innovative and cutting edge solutions Our team of experts has the skills and experience to help you turn your ideas into reality"
        author="SA Technologies"
        keywords="Software application development"
        image="https://www.satincorp.com/images/banners/front-end-development.jpeg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/software-application-development/",
          title: "Leading the Way in AI-Enhanced Software Development",
          description:
            "SA Technologies is at the forefront of AI enhanced software development, helping businesses to create innovative and cutting edge solutions Our team of experts has the skills and experience to help you turn your ideas into reality",
          images: [
            {
              url: "https://www.satincorp.com/images/banners/front-end-development.jpeg",
              width: 800,
              height: 600,
              alt: "SA Technologies is at the forefront of AI enhanced software development, helping businesses to create innovative and cutting edge solutions Our team of experts has the skills and experience to help you turn your ideas into reality",
            },
          ],
          authorName: "SA Technologies",
          keywords: "Software application development",
        }}
      />
      <Head>
        <title>Leading the Way in AI-Enhanced Software Development </title>
        <meta
          property="og:title"
          content="AI-Enhanced Software Development | SA Technologies Inc.   "
          key="title"
        />
        <meta
          name="description"
          content="SA Technologies is at the forefront of AI-enhanced software development, helping businesses to create innovative and cutting-edge solutions. Our team of experts has the skills and experience to help you turn your ideas into reality "
          key="description"
        />
        <link
          rel="canonical"
          href="https://www.satincorp.com/software-application-development"
        />
      </Head>

      <Navbar />
      <HeroBanner />
      <ComputerVisionAI />
      <TechDetailsContent />
      {/* <Services /> */}
      <WhyChooseSAT />
      <OurIndustry />
      {/* <Industries /> */}
      {/* <WhyTriosource /> */}
      {/* <BlogPost /> */}
      <Testimonials />
      <BlogPostSlider />
      <Footer />
    </>
  );
};
export default Index;
