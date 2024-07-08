import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import WhyChooseSAT from "../components/UIUXSolutions/WhyChooseSAT";
import Services from "../components/UIUXSolutions/Services";
import HeroBanner from "../components/UIUXSolutions/HeroBanner";
import FunFacts from "../components/Live/FunFacts";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import BlogPostSlider from "../components/UIUXSolutions/BlogPostSlider";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import TechDetailsContent from "../components/UIUXSolutions/TechDetailsContent";
import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <WebPageJsonLd
        headline="Elevate User Engagement With AI-Powered UI/UX Design | SAT"
        description="Experience the next generation of UI UX design with AI powered solutions from SA Technologies"
        author="SA Technologies"
        keywords="UI UX Design"
        image="https://www.satincorp.com/images/services-details/uiux.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/ui-ux-design/",
          title: "Elevate User Engagement With AI-Powered UI/UX Design | SAT",
          description:
            "Experience the next generation of UI UX design with AI powered solutions from SA Technologies",
          images: [
            {
              url: "https://www.satincorp.com/images/services-details/uiux.jpg",
              width: 800,
              height: 600,
              alt: "Experience the next generation of UI UX design with AI powered solutions from SA Technologies",
            },
          ],
          authorName: "SA Technologies",
          keywords: "UI UX Design",
        }}
      />
      <Head>
        <title>
          Elevate User Engagement With AI-Powered UI/UX Design | SAT{" "}
        </title>
        <meta
          property="og:title"
          content="Elevate User Engagement With AI-Powered UI/UX Design | SAT   "
          key="title"
        />
        <meta
          name="description"
          content="Experience the next-generation of UI/UX design with AI-powered solutions from SA Technologies."
          key="description"
        />
        <link rel="canonical" href="https://www.satincorp.com/ui-ux-design" />
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
