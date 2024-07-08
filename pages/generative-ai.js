import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import WhyChooseSAT from "../components/GenerativeAi/WhyChooseSAT";
import Services from "../components/GenerativeAi/Services";
import HeroBanner from "../components/GenerativeAi/HeroBanner";
import TechDetailsContent from "../components/GenerativeAi/TechDetailsContent";
import FunFacts from "../components/Live/FunFacts";
import OurIndustry from "../components/Common/OurIndustry";
import Testimonials from "../components/Live/Testimonials";
import BlogPostSlider from "../components/GenerativeAi/BlogPostSlider";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import Head from "next/head";
import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";

const Index = () => {
  return (
    <>
      <WebPageJsonLd
        headline="Unlock Innovation with SA Technologies Generative AI Solutions"
        description="Experience the future of AI driven creativity and automation SA Technologies offers secure Generative AI solutions for transformative outcomes"
        author="SA Technologies"
        keywords="Generative AI"
        image="https://www.satincorp.com/images/blog/generative-ai-case-studie.jpeg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/generative-ai/",
          title:
            "Unlock Innovation with SA Technologies Generative AI Solutions",
          description:
            "Experience the future of AI driven creativity and automation SA Technologies offers secure Generative AI solutions for transformative outcomes",
          images: [
            {
              url: "https://www.satincorp.com/images/blog/generative-ai-case-studie.jpeg",
              width: 800,
              height: 600,
              alt: "Experience the future of AI driven creativity and automation SA Technologies offers secure Generative AI solutions for transformative outcomes",
            },
          ],
          authorName: "SA Technologies",
          keywords: "Generative AI",
        }}
      />
      <Head>
        <title>
          Unlock Innovation with SA Technologies Generative AI Solutions{" "}
        </title>
        <meta
          property="og:title"
          content="Unlock Innovation with SA Technologies Generative AI Solutions "
          key="title"
        />
        <meta
          name="description"
          content="Experience the future of AI-driven creativity and automation. SA Technologies offers secure Generative AI solutions for transformative outcomes."
          key="description"
        />
        <link rel="canonical" href="https://www.satincorp.com/generative-ai" />
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
