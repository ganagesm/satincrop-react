import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/python/Services";
import BlogPost from "../components/Common/BlogPost";

import ComputerVisionAI from "../components/python/ComputerVisionAI";
import PageBanner from "../components/Live/PageBanner";
import TechDetailsContent from "../components/python/TechDetailsContent";
import MainIndustry from "../components/Live/MainIndustry";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import ContactFormContent from "../components/Common/ContactFormContent";
import Link from "next/link";
import Head from "next/head";
import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";
const Index = () => {
  return (
    <>
      <WebPageJsonLd
        headline="Scale New Heights with AWS Services: SA Technologies Expertise"
        description="Explore SA Technologies AWS services for secure, scalable, and flexible cloud solutions Navigate the cloud confidently with AWS"
        author="SA Technologies"
        keywords="AWS Services"
        image="https://www.satincorp.com/images/services-details/aws.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/aws-services/",
          title:
            "Scale New Heights with AWS Services: SA Technologies Expertise",
          description:
            "Explore SA Technologies AWS services for secure, scalable, and flexible cloud solutions Navigate the cloud confidently with AWS",
          images: [
            {
              url: "https://www.satincorp.com/images/services-details/aws.jpg",
              width: 800,
              height: 600,
              alt: "Explore SA Technologies AWS services for secure, scalable, and flexible cloud solutions Navigate the cloud confidently with AWS",
            },
          ],
          authorName: "SA Technologies",
          keywords: "AWS Services",
        }}
      />
      <Head>
        <title>
          Scale New Heights with AWS Services: SA Technologies Expertise{" "}
        </title>
        <meta
          property="og:title"
          content="Scale New Heights with AWS Services: SA Technologies Expertise "
          key="title"
        />
        <meta
          name="description"
          content="Explore SA Technologies AWS services for secure, scalable, and flexible cloud solutions. Navigate the cloud confidently with AWS."
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Bringing AWS Innovations to the Forefront of Your Business"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="AWS"
        bgImgClass="item-bg5"
      />

      <TechDetailsContent />
      <ComputerVisionAI />
      <div className="col-lg-12 col-md-12">
        <div className="ai-all-services-btn ptb-50">
          <Link href="/contact-us/" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
      <MainIndustry />
      <BlogPostSlider />

      {/* <ContactFormContent /> */}
      <Footer />
    </>
  );
};
export default Index;
