import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/Gitex/HeroBanner";

import AboutAI from "../components/Gitex/AboutAI";
import MainIndustry from "../components/Gitex/MainIndustry";
import DaystoSuccess from "../components/Gitex/DaystoSuccess";
import TechSlider from "../components/Gitex/TechSlider";
import Head from "next/head";
import PartnerContent from "../components/Gitex/PartnerContent";
import { Component, useState } from "react";
import Link from "next/link";
// import ContactFormContent from "../components/Common/ContactFormContent";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
// import TechDetailsContent from "../components/Gitex/TechDetailsContent";
// import ExpertiseContent from "../components/Gitex/ExpertiseContent";
// import ServicesCompanies from "../components/Gitex/ServicesCompanies";
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
        headline="GITEX Dubai 2024: Join SA Technologies for AI-First Engineering & GCC Solutions to Power Your Innovation"
        description="Struggling to find top IT talent? SAT offers services for startups to build a 100-500+ person offshore team in Latin America's tech powerhouses. Cost-effective, nearshore solutions."
        author="SA Technologies"
        keywords="GITEX 2024 Dubai "
        image="https://www.satincorp.com/images/startup-banner-new-1.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/startups/",
          title: "GITEX Dubai 2024: Join SA Technologies for AI-First Engineering & GCC Solutions to Power Your Innovation",
          description:
            "Struggling to find top IT talent? SAT offers services for startups to build a 100-500+ person offshore team in Latin America's tech powerhouses. Cost-effective, nearshore solutions.",
          images: [
            {
              url: "https://www.satincorp.com/images/startup-banner-new-1.jpg",
              width: 800,
              height: 600,
              alt: "GITEX Dubai 2024: Join SA Technologies for AI-First Engineering & GCC Solutions to Power Your Innovation",
            },
          ],
          authorName: "SA Technologies",
          keywords: "GITEX Dubai 2024 ",
        }}
      />
      <Head>
        <title>GITEX Dubai 2024: Join SA Technologies for AI-First Engineering & GCC Solutions to Power Your Innovation </title>
        <meta property="og:title" content="GITEX Dubai 2024 " key="title" />
        <meta
          name="description"
          content="GITEX Dubai 2024: Join SA Technologies for AI-First Engineering & GCC Solutions to Power Your Innovation "
          key="description"
        />
        <link rel="canonical" href="https://www.satincorp.com/startups" />
      </Head>

      <Navbar />
      <HeroBanner />
      <DaystoSuccess />
      {/* <Services /> */}
      <div className="checkout-area pt-50 pb-70  bg-f2f6f9">
        <div className="container">
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
                      <th scope="col">Global Capability Center (GCC) Services </th>
                      <th scope="col">Offshore Services </th>
                      <th scope="col">AI Services </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr style={{ border: ".1rem solid black" }}>
                      <td className="product-name">
                        <strong>Streamline Operations, Drive Innovation, and Scale Globally </strong>
                        <p>Our Global Capability Center (GCC) services provide end-to-end
                          solutions to establish and manage your offshore operations. From strategy development to
                          legal compliance and talent acquisition, we help companies build scalable and high-performance
                          teams that drive innovation and efficiency.</p>
                        <strong>Key Offerings </strong>
                        <ul>
                          <li>GCC Strategy Development & Build-Operate-Transfer (BOT) Model </li>
                          <li>Infrastructure Setup, IT Systems, & Security</li>
                          <li>Talent Acquisition & Skill Management </li>
                          <li>Operational Guidance & Regulatory Compliance </li>
                        </ul>
                      </td>
                      {/* <td className="product-total"></td> */}
                      <td className="product-name">
                        <strong>Cost-Efficient, High-Quality Technology Solutions </strong>
                        <p>
                          Leverage our Offshore Services to reduce operational costs while
                          maintaining access to top-tier talent. Our offshore development teams provide expertise in
                          software development, IT operations, and infrastructure management, allowing you to focus
                          on core business growth while we handle the rest.
                        </p>
                        <strong>Key Offerings </strong>
                        <ul>
                          <li>Software Development & Application Support </li>
                          <li>IT Operations & Infrastructure Management </li>
                          <li>Dedicated Offshore Teams </li>
                          <li>24/7 Technical Support & Maintenance </li>
                        </ul>
                      </td>
                      <td className="product-name">
                        <strong>Harness the Power of AI to Drive Business Transformation </strong>
                        <p>Unlock the potential of artificial intelligence with our AI Services.
                          We offer cutting-edge AI solutions that enhance decision-making, automate processes, and deliver
                          valuable insights. From AI-driven data analytics to advanced machine learning models, our
                          services help businesses innovate and stay ahead of the competition.</p>
                        <strong>Key Offerings </strong>
                        <ul>
                          <li>AI Strategy Development & Implementation  </li>
                          <li>Machine Learning & Predictive Analytics </li>
                          <li>AI-driven Automation & Process Optimization</li>
                          <li>Natural Language Processing & Computer Vision Solutions </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="" style={{ backgroundColor: "#e4e8f5" }}>
        <div className="container">
          <div className="row ptb-100 align-items-center">
            <div className="col-lg-12 col-md-6 text-center">
              <h2
                className="align-items-center"
                style={{
                  textAlign: "center",
                }}>
                Book a Slot to Meet Us at GITEX 2024 – Meet Our Experts at Hall 26!
              </h2>

              <Link href="https://outlook.office365.com/owa/calendar/GITEXDubai2024@satincorp.com/bookings/" target="_blank" className="btn btn-primary">
                Meet us at the event
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* <AboutContent /> */}

      <AboutAI />

      {/* <PartnerContent /> */}
      <TechSlider />
      <MainIndustry />

      <section className="services-area pb-110">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Team at GITEX 2024 </h2>
            <p>Join us at Hall 26 to connect with our experts and discover how our cutting-edge solutions
              can drive your business forward. Schedule a one-on-one meeting to explore tailored strategies
              and innovations. </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/shantanu.jfif" alt="Shantanu Joshi" />
                </div>
                <div className="content">
                  <Link href="#">
                    <h5 style={{ marginTop: "15px", marginBottom: "0" }}>
                      Shantanu Joshi
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/Ritesh Sharma.png" alt="Ritesh Sharma " />
                </div>
                <div className="content">
                  <Link href="#">
                    <h5 style={{ marginTop: "15px", marginBottom: "0" }}>
                      Ritesh Sharma
                    </h5>
                    {/* <p>
                      Director Client Engagement <br /> (APAC)
                    </p> */}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/Vinay.png" alt="Vinay Pathak " style={{ width: "306px" }} />
                </div>
                <div className="content">
                  <Link href="#">
                    <h5 style={{ marginTop: "15px", marginBottom: "0" }}>
                      Vinay Pathak
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className=" single-team-box">
                <div className="image">
                  <img src="/images/team/abhay.jpg" alt="Abhay Bhan" />
                </div>
                <div className="content">
                  <Link href="#">
                    <h5 style={{ marginTop: "15px", marginBottom: "0" }}>
                      Abhay Bhan
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className=" single-team-box">
                <div className="image">
                  <img src="/images/team/amit-singh.jpeg" alt="amit-singh" />
                </div>
                <div className="content">
                  <Link href="#">
                    <h5 style={{ marginTop: "15px", marginBottom: "0" }}>
                      Amit Singh
                    </h5>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/amita.jpg" alt="image" />
                </div>
                <div className="content">
                  <Link href="#">
                    <h5 style={{ marginTop: "15px", marginBottom: "0" }}>
                      Amita Bhosale
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/dana.png" alt="dana" />
                </div>
                <div className="content">
                  <Link href="">
                    <h5 style={{ marginTop: "15px", marginBottom: "0" }}>
                      Dana Neuman
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/Avinash.jpg" alt="Avinash" />
                </div>
                <div className="content">
                  <Link href="">
                    <h5 style={{ marginTop: "15px", marginBottom: "0" }}>
                      Avinash Gaikwad
                    </h5>
                  </Link>
                </div>
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
      </section >
      <div className="" style={{ backgroundColor: "#e4e8f5" }}>
        <div className="container">
          <div className="row ptb-100 align-items-center">
            <div className="col-lg-12 col-md-6 text-center">
              <h2
                className="align-items-center"
                style={{
                  textAlign: "center",
                }}>
                Book a Slot to Meet Us at GITEX 2024 – Meet Our Experts at Hall 26!
              </h2>

              <Link href="https://outlook.office365.com/owa/calendar/GITEXDubai2024@satincorp.com/bookings/" target="_blank" className="btn btn-primary">
                Meet us at the event
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Index;
