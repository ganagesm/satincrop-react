import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import WhyChooseSAT from "../components/QAAutomation/WhyChooseSAT";
import Services from "../components/QAAutomation/Services";
import HeroBanner from "../components/QAAutomation/HeroBanner";
import TechDetailsContent from "../components/QAAutomation/TechDetailsContent";
import FunFacts from "../components/Live/FunFacts";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import BlogPostSlider from "../components/QAAutomation/BlogPostSlider";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import Head from "next/head";
import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";

const Index = () => {
  return (
    <>
      <WebPageJsonLd
        headline="Efficient AI Based QA Automation Services By SAT"
        description="Leverage cutting edge AI for smarter QA automation Our service integrates advanced algorithms to elevate testing accuracy, speed up release cycles, and minimize costs, ensuring your software excels in every aspect"
        author="SA Technologies"
        keywords="QA Automation"
        image="https://www.satincorp.com/images/blog/qa-automation.png"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/qa-automation/",
          title: "Efficient AI Based QA Automation Services By SAT",
          description:
            "Leverage cutting edge AI for smarter QA automation Our service integrates advanced algorithms to elevate testing accuracy, speed up release cycles, and minimize costs, ensuring your software excels in every aspect",
          images: [
            {
              url: "https://www.satincorp.com/images/blog/qa-automation.png",
              width: 800,
              height: 600,
              alt: "Leverage cutting edge AI for smarter QA automation Our service integrates advanced algorithms to elevate testing accuracy, speed up release cycles, and minimize costs, ensuring your software excels in every aspect",
            },
          ],
          authorName: "SA Technologies",
          keywords: "QA Automation",
        }}
      />
      <Head>
        <title>Efficient AI Based QA Automation Services By SAT</title>
        <meta
          property="og:title"
          content="Efficient AI Based QA Automation Services By SAT"
          key="title"
        />
        <meta
          name="description"
          content="Leverage cutting-edge AI for smarter QA automation. Our service integrates advanced algorithms to elevate testing accuracy, speed up release cycles, and minimize costs, ensuring your software excels in every aspect."
          key="description"
        />
      </Head>

      <Navbar />
      <HeroBanner />
      <TechDetailsContent />
      <Services />
      <WhyChooseSAT />
      <OurIndustry />
      {/* <FunFacts /> */}
      <Testimonials />
      <BlogPostSlider />
      <CaseStudiesPost />
      <Footer />
    </>
  );
};
export default Index;
