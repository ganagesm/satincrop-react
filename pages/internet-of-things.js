import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/AIDrivenIoT/HeroBanner";
import Industries from "../components/Live/Industries";
import Testimonials from "../components/Live/Testimonials";
import AboutUs from "../components/AIDrivenIoT/AboutUs";
import WhyChooseUs from "../components/AIDrivenIoT/WhyChooseUs";
import OurIndustry from "../components/Common/OurIndustry";
// import Testimonials from "../components/AIDrivenIoT/Testimonials";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import WhyTriosource from "../components/AIDrivenIoT/WhyTriosource";
import ComputerVisionAI from "../components/AIDrivenIoT/ComputerVisionAI";
import TechDetailsContent from "../components/AIDrivenIoT/TechDetailsContent";
import Services from "../components/AIDrivenIoT/Services";
import WhyChooseSAT from "../components/AIDrivenIoT/WhyChooseSAT";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import BlogPostSlider from "../components/AIDrivenIoT/BlogPostSlider";
import Head from "next/head";
import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";
const Index = () => {
  return (
    <>
      <WebPageJsonLd
        headline="IoT Services | SA Technologies Inc."
        description="Experience the transformative power of IoT services with SA Technologies Our comprehensive solutions can help you revolutionize your business and achieve your goals"
        author="SA Technologies"
        keywords="Internet of Things"
        image="https://www.satincorp.com/images/banners/IoT-development-services.png"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/internet-of-things/",
          title: "IoT Services | SA Technologies Inc.",
          description:
            "Experience the transformative power of IoT services with SA Technologies Our comprehensive solutions can help you revolutionize your business and achieve your goals",
          images: [
            {
              url: "https://www.satincorp.com/images/banners/IoT-development-services.png",
              width: 800,
              height: 600,
              alt: "Experience the transformative power of IoT services with SA Technologies Our comprehensive solutions can help you revolutionize your business and achieve your goals",
            },
          ],
          authorName: "SA Technologies",
          keywords: "Internet of Things",
        }}
      />
      <Head>
        <title>IoT Services | SA Technologies Inc. </title>
        <meta
          property="og:title"
          content="IoT Services  | SA Technologies Inc."
          key="title"
        />
        <meta
          name="description"
          content="Experience the transformative power of IoT services with SA Technologies. Our comprehensive solutions can help you revolutionize your business and achieve your goals. "
          key="description"
        />
        <link
          rel="canonical"
          href="https://www.satincorp.com/internet-of-things"
        />
      </Head>

      <Navbar />
      <HeroBanner />
      {/* <ComputerVisionAI /> */}
      <TechDetailsContent />
      <Services />
      {/* <AboutUs /> */}
      <WhyChooseSAT />
      <OurIndustry />
      <Testimonials />
      <BlogPostSlider />
      <CaseStudiesPost />
      <Footer />
    </>
  );
};
export default Index;
