import Link from "next/link";
import Head from "next/head";
import { Component, useState } from "react";
import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/Labs/HeroBanner";
import Services from "../components/Labs/Services";
import CaseStudiesGrid from "../components/Labs/CaseStudiesGrid";
import ContactFormContent from "../components/Common/ContactFormContent";

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
        headline="Services for Startup | SA Technologies "
        description="Struggling to find top IT talent? SAT offers services for startups to build a 100-500+ person offshore team in Latin America's tech powerhouses. Cost-effective, nearshore solutions."
        author="SA Technologies"
        keywords="Services for Startup"
        image="https://www.satincorp.com/images/startup-banner-new-1.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/startups/",
          title: "Services for Startup",
          description:
            "Struggling to find top IT talent? SAT offers services for startups to build a 100-500+ person offshore team in Latin America's tech powerhouses. Cost-effective, nearshore solutions.",
          images: [
            {
              url: "https://www.satincorp.com/images/startup-banner-new-1.jpg",
              width: 800,
              height: 600,
              alt: "Struggling to find top IT talent? SAT offers services for startups to build a 100-500+ person offshore team in Latin America's tech powerhouses. Cost-effective, nearshore solutions.",
            },
          ],
          authorName: "SA Technologies",
          keywords: "Services for Startup",
        }}
      />
      <Head>
        <title>Services for Startup | SA Technologies </title>
        <meta property="og:title" content="Services for Startup" key="title" />
        <meta
          name="description"
          content="Struggling to find top IT talent? SAT offers services for startups to build a 100-500+ person offshore team in Latin America's tech powerhouses. Cost-effective, nearshore solutions."
          key="description"
        />
        <link rel="canonical" href="https://www.satincorp.com/startups" />
      </Head>

      <Navbar />
      <HeroBanner />
      {/* <DaystoSuccess /> */}
      <Services />

      <div
        className="ptb-50 services-area"
        style={{ backgroundColor: "#e4e8f5" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-6 text-center">
              <div className="section-title" style={{ marginBottom: "20px" }}>
                <h2> Our Misson</h2>
              </div>
              <p>
                At Recodex, we're obsessed with AI and want to help every
                business build AI first products Schedule a call and let's
                brainstorm
              </p>
              <Link href="/contact-us" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="services-area pt-50">
        <div className="container">
          <div className="section-title">
            <h2>Our Values</h2>
          </div>
          <div className="services-area" style={{ paddingBottom: "0" }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-sm-6 col-md-6 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <h3>Product Obsessed</h3>
                    <p>
                      At the end of the day it's all about your customers. Large
                      language models and Gen AI is a new and flashy field, but
                      profoundly meaningless if it can't help deliver innovative
                      products to your customers.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <h3>Innovation </h3>
                    <p>
                      We are former Y-combinator founders and are deeply
                      embedded in the startup ecosystem. We spend our free time
                      testing and validating every new AI tool that hits the
                      market. We're simply obsessed with AI/ML and can't help
                      but sit at the cutting edge.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <h3>Compliance & Security </h3>
                    <p>
                      We've built systems for early stage startups to fortune
                      500 companies. The result is we deeply understand
                      compliance and data security, and will work with you to
                      build solutions as such. Protecting you and your user's
                      data.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <h3>Cost Aware </h3>
                    <p>
                      Our background is in building venture backed startups. We
                      aim to bring you cutting edge AI while critically managing
                      your burn and ensuring an ROI. We will never bill for
                      something that doesn't drive value and we hate wasting
                      time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <ExpertiseContent /> */}

      {/* <TechDetailsContent /> */}
      <CaseStudiesGrid />
      <div className="GCCJourney" style={{ marginTop: "0" }}>
        <div className="container">
          <div className="row ptb-50 align-items-center">
            <div className="col-lg-10 col-md-10">
              <h2 className="align-items-center">
                Scale Your Startup with SAT's Focused Approach
              </h2>
            </div>
            <div
              className="col-lg-2 col-md-2"
              style={{
                textAlign: "left",
              }}>
              <Link href="/contact-us" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ContactFormContent />
      <Footer />
    </>
  );
};

export default Index;
