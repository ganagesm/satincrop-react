import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/HomeThree/Services";
import ComputerVisionAI from "../components/GooglecloudNew/ComputerVisionAI";
import PageBanner from "../components/GooglecloudNew/PageBanner";
import TechDetailsContent from "../components/GooglecloudNew/TechDetailsContent";
import MainServices from "../components/Live/MainServices";
import BlogPostSlider from "../components/GooglecloudNew/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import CaseStudiesGooglePost from "../components/Live/CaseStudiesGooglePost";
import Link from "next/link";
import Head from "next/head";
import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";
const GoogleCloudNew = () => {
  return (
    <>
      <WebPageJsonLd
        headline="Get Google Cloud Migration Services and Custom Solutions | SA Technologies"
        description="SA Technologies harnesses the power of Google technologies for business transformation Explore our Google solutions"
        author="SA Technologies"
        keywords="Google Cloud"
        image="https://www.satincorp.com/images/images/google-banner-2.jpeg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/mobile-app-development/",
          title:
            "Get Google Cloud Migration Services and Custom Solutions | SA Technologies",
          description:
            "SA Technologies harnesses the power of Google technologies for business transformation Explore our Google solutions",
          images: [
            {
              url: "https://www.satincorp.com/images/images/google-banner-2.jpeg",
              width: 800,
              height: 600,
              alt: "SA Technologies harnesses the power of Google technologies for business transformation Explore our Google solutions",
            },
          ],
          authorName: "SA Technologies",
          keywords: "Google Cloud",
        }}
      />
      <Head>
        <title>
          Get Google Cloud Migration Services and Custom Solutions | SA
          Technologies
        </title>
        <meta
          property="og:title"
          content="Get Google Cloud Migration Services and Custom Solutions | SA Technologies "
          key="title"
        />
        <meta
          name="description"
          content="SA Technologies harnesses the power of Google technologies for business transformation. Explore our Google solutions."
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Leverage Google Cloud with SAT"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Google"
        bgImgClass="item-bg35"
      />

      {/* <TechDetailsContent /> */}
      <ComputerVisionAI />
      <Services />
      <MainServices />
      <CaseStudiesGooglePost />
      <BlogPostSlider />
      {/* <ContactFormContent /> */}
      <Footer />
    </>
  );
};
export default GoogleCloudNew;
