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
import ServicesCompanies from "../components/StartUp/ServicesCompanies";
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
        headline="Scale Up Seamlessly: Build Your Offshore IT Team (100-500+) with SAT's Expertise"
        description="Struggling to find top IT talent? Explore Latin America's tech powerhouses & build a skilled 100-500+ person offshore team with SAT's guidance. Cost-effective, nearshore solution for startups."
        author="SA Technologies"
        keywords="GCC As a services"
        image="https://www.satincorp.com/images/banners/gcc-1.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/gcc/",
          title:
            "Scale Up Seamlessly: Build Your Offshore IT Team (100-500+) with SAT's Expertise",
          description:
            "Struggling to find top IT talent? Explore Latin America's tech powerhouses & build a skilled 100-500+ person offshore team with SAT's guidance. Cost-effective, nearshore solution for startups.",
          images: [
            {
              url: "https://www.satincorp.com/images/banners/gcc-1.jpg",
              width: 800,
              height: 600,
              alt: "Struggling to find top IT talent? Explore Latin America's tech powerhouses & build a skilled 100-500+ person offshore team with SAT's guidance. Cost-effective, nearshore solution for startups.",
            },
          ],
          authorName: "SA Technologies",
          keywords: "GCC As a services",
        }}
      />
      <Head>
        <title>
          Scale Up Seamlessly: Build Your Offshore IT Team (100-500+) with SAT's Expertise{" "}
        </title>
        <meta
          property="og:title"
          content="Scale Up Seamlessly: Build Your Offshore IT Team (100-500+) with SAT's Expertise"
          key="title"
        />
        <meta
          name="description"
          content="Struggling to find top IT talent? Explore Latin America's tech powerhouses & build a skilled 100-500+ person offshore team with SAT's guidance. Cost-effective, nearshore solution for startups."
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
                We have helped several Seed to IPO stage startups scale their
                offshore operations, <br /> build center of excellence, and save
                cost.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />

      <AboutContent />
      <AboutAI />

      <div className="" style={{ backgroundColor: "#e4e8f5" }}>
        <div className="container">
          <div className="row ptb-100 align-items-center">
            <div className="col-lg-12 col-md-6 text-center">
              <h2
                className="align-items-center"
                style={{
                  textAlign: "center",
                }}>
                One-Stop Solutions for All Your Hiring Needs, across the globe !
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: "600",
                  color: "#57647c",
                }}>
                SAT offers unparalleled simplicity in onboarding talent across
                various regions. Whether you aim to onboard contractors and
                employees worldwide without establishing legal entities, SAT
                seamlessly handles it all while ensuring compliance at every
                step.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <ComputerVisionAI /> */}
      <ServicesCompanies />

      <TechDetailsContent />
      <ExpertiseContent />

      <ContactFormContent />
      <Footer />
    </>
  );
};

export default Index;
