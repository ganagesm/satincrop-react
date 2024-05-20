import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/StartUp/HeroBanner";
import Industries from "../components/StartUp/Industries";
import Services from "../components/StartUp/Services";
import WhyChooseSAT from "../components/StartUp/WhyChooseSAT";
import ContactFormContent from "../components/Common/ContactFormContent";
import BlogPostSlider from "../components/StartUp/BlogPostSlider";
import Testimonials from "../components/StartUp/Testimonials";
import AboutContent from "../components/StartUp/AboutContent";
import AboutAI from "../components/StartUp/AboutAI";
import ComputerVisionAI from "../components/StartUp/ComputerVisionAI";
import TechDetailsContent from "../components/StartUp/TechDetailsContent";
import ExpertiseContent from "../components/StartUp/ExpertiseContent";
import Head from "next/head";
import { Component, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// import Model from "../components/GCC/Model";
import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";

const Index = () => {
  const [profile_model, setPop] = useState(false);

  const handleclickopen = () => {
    setPop(!profile_model);
  };
  const closepopup = () => {
    setPop(false);
  };
  return (
    <>
      <WebPageJsonLd
        headline="Global Capability Center (GCC) Services in India | SA Technologies"
        description="Explore SA Technologies GCC As a services for global expansion Maximize efficiency and innovation with our support"
        author="SA Technologies"
        keywords="GCC As a services"
        image="https://www.satincorp.com/images/banners/gcc-1.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/gcc/",
          title:
            "Global Capability Center (GCC) Services in India | SA Technologies",
          description:
            "Explore SA Technologies GCC As a services for global expansion Maximize efficiency and innovation with our support",
          images: [
            {
              url: "https://www.satincorp.com/images/banners/gcc-1.jpg",
              width: 800,
              height: 600,
              alt: "Explore SA Technologies GCC As a services for global expansion Maximize efficiency and innovation with our support",
            },
          ],
          authorName: "SA Technologies",
          keywords: "GCC As a services",
        }}
      />
      <Head>
        <title>
          Global Capability Center (GCC) Services in India | SA Technologies{" "}
        </title>
        <meta
          property="og:title"
          content="Global Capability Center (GCC) Services in India | SA Technologies"
          key="title"
        />
        <meta
          name="description"
          content="Explore SA Technologies GCC As a services for global expansion. Maximize efficiency and innovation with our support."
          key="description"
        />
      </Head>

      <Navbar />
      <HeroBanner />
      <Services />
      <div className="">
        <div className="container">
          <div className="row ptb-100 align-items-center">
            <div className="col-lg-12 col-md-6">
              <h2
                className="align-items-center"
                style={{
                  textAlign: "center",
                }}>
                We have helped several Seed to IPO stage startups scale their offshore operations, build center of excellence, and save cost.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />

      <AboutContent />
      <AboutAI />
      <ComputerVisionAI />

      <TechDetailsContent />
      <ExpertiseContent />


      <ContactFormContent />
      <Footer />
    </>
  );
};
export default Index;
