import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/kubernetes/Services";
import ComputerVisionAI from "../components/kubernetes/ComputerVisionAI";
import MicrosoftPowerPlatformConsulting from "../components/MicrosoftPowerPlatform/MicrosoftPowerPlatform";
import PowerPlatformProducts from "../components/MicrosoftPowerPlatform/PowerPlatformProducts";
import ServicesBox from "../components/MicrosoftPowerPlatform/ServicesBox";
import PageBanner from "../components/kubernetes/PageBanner";
import TechDetailsContent from "../components/MicrosoftPowerPlatform/TechDetailsContent";
import MainIndustry from "../components/Live/MainIndustry";
import BlogPostSlider from "../components/kubernetes/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import Link from "next/link";
import Head from "next/head";
import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";
const Index = () => {
  return (
    <>
      <WebPageJsonLd
        headline="Empower Business with Microsoft D365 Solutions by SA Technologies"
        description="SA Technologies offers Microsoft solutions for enhanced productivity and innovation Unleash the potential of Microsoft technologies"
        author="SA Technologies"
        keywords="Microsoft"
        image="https://www.satincorp.com/images/services-details/service-details1.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/microsoft/",
          title:
            "Empower Business with Microsoft D365 Solutions by SA Technologies",
          description:
            "SA Technologies offers Microsoft solutions for enhanced productivity and innovation Unleash the potential of Microsoft technologies",
          images: [
            {
              url: "https://www.satincorp.com/images/services-details/service-details1.jpg",
              width: 800,
              height: 600,
              alt: "SA Technologies offers Microsoft solutions for enhanced productivity and innovation Unleash the potential of Microsoft technologies",
            },
          ],
          authorName: "SA Technologies",
          keywords: "Microsoft",
        }}
      />
      <Head>
        <title>Microsoft Power Platform Consulting Services</title>
        <meta
          property="og:title"
          content="Microsoft Power Platform Consulting Services "
          key="title"
        />
        <meta
          name="description"
          content="Transform Your Business Operations with the Microsoft Power Platform Consulting"
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Microsoft Power Platform Consulting Services"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Microsoft"
        bgImgClass="item-bg36"
        style={{
          backgroundImage:
            "url(/images/technology-banner/Microsoft-banner.jpg) !important",
          // Add any additional styles here if needed
        }}
      />

      <TechDetailsContent />
      <MicrosoftPowerPlatformConsulting />
      <PowerPlatformProducts />
      <ServicesBox />
      {/* <Services /> */}
      <div className="col-lg-12 col-md-12">
        <div className="ai-all-services-btn ptb-50">
          <Link href="/contact-us/" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
      <MainIndustry />
      <BlogPostSlider />
      <Footer />
    </>
  );
};
export default Index;
