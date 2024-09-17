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
import CaseStudiesGrid from "../components/StartUp/CaseStudiesGrid";
import DaystoSuccess from "../components/StartUp/DaystoSuccess";
import YourPortfolioCompaniesServices from "../components/PrivateEquity/YourPortfolioCompaniesServices";
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
      <DaystoSuccess />
      <Services />
      {/* <div className="">
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
      </div> */}
      {/* <Testimonials /> */}
      {/* <div className="checkout-area pt-50 pb-70  bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>Startups Reimagined: Our Offshore Hiring Models</h2>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="order-table table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr
                      style={{
                        verticalAlign: "middle",
                        border: ".1rem solid black",
                      }}>
                      <th scope="col">Factors </th>
                      <th scope="col">Standard Offshore Hiring Model </th>
                      <th scope="col">Accelerator Offshore Hiring Model </th>
                      <th scope="col">BOT Model </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr style={{ border: ".1rem solid black" }}>
                      <td className="product-name">
                        <strong>Ownership</strong>
                      </td>
                      <td className="product-total">Client</td>
                      <td className="product-total">Client</td>
                      <td className="product-total">Partner/Vendor </td>
                    </tr>

                    <tr style={{ border: ".1rem solid black" }}>
                      <td className="product-name">
                        <strong>Talent Employment</strong>
                      </td>
                      <td className="product-total">By the client </td>
                      <td className="product-total">By the client </td>
                      <td className="product-total">Partner/Vendor </td>
                    </tr>

                    <tr style={{ border: ".1rem solid black" }}>
                      <td className="product-name">
                        <strong>Infrastructure</strong>
                      </td>
                      <td className="product-total">
                        Fully customized by a partner like SA Technologies to
                        align with client requirements
                      </td>
                      <td className="product-total">
                        Fully customized by a partner like SA Technologies to
                        align with client requirements
                      </td>
                      <td className="product-total">
                        Developed by the vendor/partner (may or may not
                        precisely match client specifications)
                      </td>
                    </tr>

                    <tr style={{ border: ".1rem solid black" }}>
                      <td className="product-name">
                        <strong>Ops Management</strong>
                      </td>
                      <td className="product-total">Managed by the client</td>
                      <td className="product-total">Managed by the client</td>
                      <td className="product-total">Managed by the client</td>
                    </tr>

                    <tr style={{ border: ".1rem solid black" }}>
                      <td className="order-subtotal">
                        <strong>Setup Cost </strong>{" "}
                      </td>
                      <td className="order-subtotal-price">
                        High initial investment
                      </td>
                      <td className="order-subtotal-price">
                        Low initial investment
                      </td>
                      <td className="order-subtotal-price">
                        Low initial investment
                      </td>
                    </tr>
                    <tr style={{ border: ".1rem solid black" }}>
                      <td className="order-subtotal">
                        <strong>Implementation Time</strong>
                      </td>
                      <td className="order-subtotal-price">6-8 months</td>
                      <td className="order-subtotal-price">3-4 months</td>
                      <td className="order-subtotal-price">1-3 months</td>
                    </tr>

                    <tr style={{ border: ".1rem solid black" }}>
                      <td className="order-shipping">
                        <strong>Scalability</strong>
                      </td>
                      <td className="shipping-price">High</td>
                      <td className="shipping-price">High</td>
                      <td className="shipping-price">High</td>
                    </tr>

                    <tr style={{ border: ".1rem solid black" }}>
                      <td className="total-price">
                        <strong>Level of Control</strong>
                      </td>
                      <td className="shipping-price">High</td>
                      <td className="shipping-price">High</td>
                      <td className="shipping-price">Low</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <AboutContent /> */}
      {/* <AboutAI /> */}

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
              <Link href="/contact-us" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <ComputerVisionAI /> */}
      {/* <ServicesCompanies /> */}
      <YourPortfolioCompaniesServices />

      {/* <ExpertiseContent /> */}

      {/* <TechDetailsContent /> */}
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
      <CaseStudiesGrid />

      <ContactFormContent />
      <Footer />
    </>
  );
};

export default Index;
