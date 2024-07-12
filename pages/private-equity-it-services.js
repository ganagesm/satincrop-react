import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/PrivateEquity/HeroBanner";
import Industries from "../components/PrivateEquity/Industries";
import Services from "../components/PrivateEquity/Services";
import WhyChooseSAT from "../components/PrivateEquity/WhyChooseSAT";
import ContactFormContent from "../components/Common/ContactFormContent";
import BlogPostSlider from "../components/PrivateEquity/BlogPostSlider";
import Head from "next/head";
import { Component, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// import Model from "../components/PrivateEquity/Model";
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
        headline="Private Equity IT Services | SA Technologies "
        description="Explore SA Technologies' GCC and Global Delivery Center services for global expansion. Maximize efficiency and innovation with our expert support and solutions."
        author="SA Technologies"
        keywords="GCC As a services"
        image="https://www.satincorp.com/images/banners/gcc-1.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/gcc/",
          title:
            "Global Delivery Center (GCC) Services in India | SA Technologies",
          description:
            "Explore SA Technologies' GCC and Global Delivery Center services for global expansion. Maximize efficiency and innovation with our expert support and solutions.",
          images: [
            {
              url: "https://www.satincorp.com/images/banners/gcc-1.jpg",
              width: 800,
              height: 600,
              alt: "Explore SA Technologies' GCC and Global Delivery Center services for global expansion. Maximize efficiency and innovation with our expert support and solutions.",
            },
          ],
          authorName: "SA Technologies",
          keywords: "GCC As a services",
        }}
      />
      <Head>
        <title>
          Private Equity IT Services | SA Technologies {" "}
        </title>
        <meta
          property="og:title"
          content="Private Equity IT Services | SA Technologies "
          key="title"
        />
        <meta
          name="description"
          content="Explore SA Technologies' GCC and Global Delivery Center services for global expansion. Maximize efficiency and innovation with our expert support and solutions."
          key="description"
        />
        <link rel="canonical" href="https://www.satincorp.com/gcc" />
      </Head>

      <Navbar />
      <HeroBanner />
      <Services />
      {/* <Industries /> */}
      <WhyChooseSAT />
      <section className="services-area pb-0">
        <div className="container">
          <div className="section-title">
            <h2>TECHNOLOGY OUTSOURCING FOR PE & THEIR PORTFOLIO COMPANIES </h2>
            <p>Through technology outsourcing, SA Technologies will become an indispensable ally in your pursuit of technological resilience and customer satisfaction.  </p>
          </div>

          <div className="row">
            <div className="computer-vision-ai-content">
              <p><b>We deliver the Right Services at the Right Time for the Right Price.</b> Client experience is
                our paramount focus, ensuring unwavering dedication to delivering unparalleled service and support. </p>
              <p>Protect and scale your current and potential investments. SA Technologies provides Private Equity Groups with a robust model to manage IT services—whether for a few organizations or an entire portfolio. </p>
              <p>Private Equity firms are increasingly emphasizing strong IT practices, with many conducting assessments prior to finalizing a deal—all aimed at managing risk and enhancing operational efficiencies. </p>
              <p>Across the diverse industries that PEs invest in, the rapidly evolving IT landscape poses significant challenges for smaller or newer companies. Given the high stakes, it's crucial for Private Equity Groups to have a comprehensive IT strategy in place. </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="section-title pt-100">
            <h2>Helping Our Clients Transform Vision into Reality Through Advanced Technology Solutions. </h2>
          </div>

          <div className="row">
            <img src="/images/client.png" alt="image" />
          </div>
        </div>

        <div className="GCCJourney">
          <div className="container">
            <div className="row ptb-100 align-items-center">
              <div className="col-lg-6 col-md-6">
                <h2
                  className="align-items-center"
                  style={{
                    textAlign: "right",
                  }}>
                  Connect with us for Your Outsourcing Needs?
                </h2>
              </div>
              <div
                className="col-lg-5 col-md-5"
                style={{
                  textAlign: "left",
                }}>
                <Link href="/contact-us/" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
      {/* <Testimonials /> */}
      <ContactFormContent />
      <Footer />
    </>
  );
};
export default Index;
