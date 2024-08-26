import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/Live/HeroBanner";
import Services from "../components/Live/Services";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import FunFacts from "../components/Live/FunFacts";
import PartnerContent from "../components/Live/PartnerContent";
import Testimonials from "../components/Live/Testimonials";
import TechSlider from "../components/Live/TechSlider";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import NewsPostSlider from "../components/Live/NewsPostSlider";
import AboutContact from "../components/Live/AboutContent";
import AiApplication from "../components/Live/AiApplication";
import CEOCorner from "../components/Live/CEOCorner";
import Offices from "../components/Live/Offices";
import MainServices from "../components/Live/MainServices";
import Script from "next/script";
import Head from "next/head";
import ZohoScript from "../components/ZohoScript";
// import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";
import { WebPageJsonLd, NextSeo } from "next-seo";
import Marquee from "react-fast-marquee";

const Index = () => {
  return (
    <>
      <WebPageJsonLd
        headline="SA Technologies | Leading IT Consulting: AI Solutions, Digital Engineering, Enterprise Modernization"
        description="SA Technologies Your Trusted IT Consulting and Offshore Partner with 20 years of experience, serving 500 clients Elevate your business with AI Solutions, Digital Engineering, and Enterprise Modernization Services"
        author="SA Technologies"
        keywords="IT Consulting"
        image="https://www.satincorp.com/images/about/5.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/",
          title:
            "SA Technologies | Leading IT Consulting: AI Solutions, Digital Engineering, Enterprise Modernization",
          description:
            "SA Technologies Your Trusted IT Consulting and Offshore Partner with 20 years of experience, serving 500 clients Elevate your business with AI Solutions, Digital Engineering, and Enterprise Modernization Services",
          images: [
            {
              url: "https://www.satincorp.com/images/about/5.jpg",
              width: 800,
              height: 600,
              alt: "SA Technologies | Leading IT Consulting: AI Solutions, Digital Engineering, Enterprise Modernization",
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
          content="SA Technologies | Leading IT Consulting: AI Solutions, Digital Engineering, Enterprise Modernization"
          key="title"
        />
        <meta
          name="description"
          content="SA Technologies - Your Trusted IT Consulting and Offshore Partner with 20+ years of experience, serving 500+ clients. Elevate your business with AI Solutions, Digital Engineering, and Enterprise Modernization Services."
          key=""
        />
      </Head>
      <ZohoScript />
      {/* <Marquee style={{ padding: "10px" }} className="btn-primary">
        We are excited to announce that our Initial Public Offering (IPO) is
        live from August 1, 2024, to August 5, 2024, giving you the opportunity
        to invest in our company and join us on our journey of innovation and
        growth—visit our [IPO page](#) to learn more and invest today!
      </Marquee> */}
      <Navbar />
      <HeroBanner />
      <AboutContact />
      <AiApplication />
      <Services />
      <PartnerContent />
      <NewsPostSlider />
      {/* <MainServices /> */}
      <TechSlider />
      <CEOCorner />
      <Offices />
      <Testimonials />
      <CaseStudiesPost />
      <BlogPostSlider />
      <Footer />
    </>
  );
};
export default Index;
