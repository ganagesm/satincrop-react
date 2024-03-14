import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/data-science/HeroBanner";
import Industries from "../components/Live/Industries";
// import Testimonials from "../components/data-science/Testimonials";
import CaseStudiesSlider from "../components/data-science/CaseStudiesSlider";
import WhyTriosource from "../components/data-science/WhyTriosource";
import ComputerVisionAI from "../components/data-science/ComputerVisionAI";
import TechDetailsContent from "../components/data-science/TechDetailsContent";
import Services from "../components/data-science/Services";
import WhyChooseSAT from "../components/data-science/WhyChooseSAT";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import BlogPostSlider from "../components/data-science/BlogPostSlider";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import Head from "next/head";
import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";
const Index = () => {
  return (
    <>
      <WebPageJsonLd
        headline="Elevate Insights with SA Technologies Data Science & Analytics"
        description="Harness the power of data with SAT Data Analytics Services Let us turn your data into actionable insights"
        author="SA Technologies"
        keywords="Data Science and Analytics services"
        image="https://www.satincorp.com/images/services-details/Data-Strategy-and-Consulting.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/data-science-analytics/",
          title:
            "Elevate Insights with SA Technologies Data Science & Analytics",
          description:
            "Harness the power of data with SAT Data Analytics Services Let us turn your data into actionable insights",
          images: [
            {
              url: "https://www.satincorp.com/images/services-details/Data-Strategy-and-Consulting.jpg",
              width: 800,
              height: 600,
              alt: "Harness the power of data with SAT Data Analytics Services Let us turn your data into actionable insights",
            },
          ],
          authorName: "SA Technologies",
          keywords: "Data Science and Analytics services",
        }}
      />
      <Head>
        <title>
          Elevate Insights with SA Technologies Data Science & Analytics{" "}
        </title>
        <meta
          property="og:title"
          content="Elevate Insights with SA Technologies Data Science & Analytics "
          key="title"
        />
        <meta
          name="description"
          content="Harness the power of data with SAT Data Analytics Services. Let us turn your data into actionable insights."
          key="description"
        />
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
