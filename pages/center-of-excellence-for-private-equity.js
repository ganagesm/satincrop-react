import Navbar from "../components/Live/Navbar";
import Footer from "../components/PrivateEquity/Footer";
import HeroBanner from "../components/PrivateEquity/HeroBanner";
import Industries from "../components/PrivateEquity/Industries";
import Services from "../components/PrivateEquity/Services";
import YourPortfolioCompaniesServices from "../components/PrivateEquity/YourPortfolioCompaniesServices";
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
        headline="COE for Private Equity | SA Technologies "
        description="Maximize your investment returns with our Centre of Excellence for Private Equity, offering tailored strategies and expert solutions for optimal growth."
        author="SA Technologies"
        keywords="Maximize your investment returns with our Centre of Excellence for Private Equity, offering tailored strategies and expert solutions for optimal growth."
        image="https://www.satincorp.com/images/banners/equity_banner.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/centre-of-excellence-for-private-equity/",
          title: "COE for Private Equity | SA Technologies",
          description:
            "Maximize your investment returns with our Centre of Excellence for Private Equity, offering tailored strategies and expert solutions for optimal growth.",
          images: [
            {
              url: "https://www.satincorp.com/images/banners/equity_banner.jpg",
              width: 800,
              height: 600,
              alt: "Maximize your investment returns with our Centre of Excellence for Private Equity, offering tailored strategies and expert solutions for optimal growth.",
            },
          ],
          authorName: "SA Technologies",
          keywords:
            "Centre Of Excellence (COE) For Private Equity Portfolio Companies",
        }}
      />
      <Head>
        <title>COE for Private Equity | SA Technologies </title>
        <meta
          property="og:title"
          content="COE for Private Equity | SA Technologies "
          key="title"
        />
        <meta
          name="description"
          content="Maximize your investment returns with our Centre of Excellence for Private Equity, offering tailored strategies and expert solutions for optimal growth."
          key="description"
        />
        <link
          rel="canonical"
          href="https://www.satincorp.com/centre-of-excellence-for-private-equity"
        />
      </Head>

      <Navbar />
      <HeroBanner />
      <YourPortfolioCompaniesServices />
      <Services />
      {/* <Industries /> */}

      <section
        className="services-area pt-50"
        style={{ padding: "50px 0 0 0" }}>
        <div className="container">
          <div className="section-title">
            <h2>Engagement Models that Fit Any Company in Your Portfolio</h2>
          </div>
          <div className="services-area" style={{ paddingBottom: "0" }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <h3>Offshore-Nearshore-Onsite</h3>
                    <p>
                      We have flexible engagement models, where we provide
                      highly skilled and experienced technology talent from our
                      offshore location in India, nearshore Location in Latin
                      America and on site across the US. Vetted, trained and
                      managed for you. No recruitment challenges. We'll help you
                      build, operate, and then seamlessly transfer control of
                      your remote team, empowering you to focus on your core
                      business growth.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <h3>GCC </h3>
                    <p>
                      As your dedicated talent hub for innovation, we simplify
                      setting up and managing your Global Capability Center
                      (GCC). Our "GCC-as-a-Service" model offers a flexible
                      subscription with everything you need: Hire, Source, and
                      engage the top talent. Seamless operations include
                      advanced infrastructure with integrated IT, while
                      compliance and support provide expert guidance and
                      governance.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <h3>Managed Teams </h3>
                    <p>
                      Go beyond the traditional Employer of Record (EoR) with
                      our innovative model. Hire and manage top global tech
                      talent for your distributed teams, all without the hassle
                      or extra costs. Our services cover talent sourcing,
                      hiring, and engagement, along with custom IT-integrated
                      workspaces and robust support for compliance and
                      operations
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-3 col-md-3 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <h3>Technology Transformation</h3>
                    <p>
                      Streamline operations and technology infrastructure to
                      enhance performance and reduce costs.
                    </p>
                    <p>
                      Custom software and application development tailored to
                      your specific business needs.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-3 col-md-3 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <h3>Operational Excellence </h3>
                    <p>
                      Implement cutting-edge solutions like AI, machine
                      learning, and IoT to optimize workflows and increase
                      efficiency.
                    </p>
                    <p>
                      Full-spectrum IT management, ensuring your technology
                      aligns with business objectives.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-3 col-md-3 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <h3>Cost Optimization</h3>
                    <p>
                      Reduce technology spend with our strategic outsourcing
                      solutions.
                    </p>
                    <p>
                      Gain operational efficiency without compromising on
                      service quality.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-3 col-md-3 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <h3>Scalable Solutions</h3>
                    <p>
                      Flexible engagement models: Offshore, Nearshore, Onsite.
                    </p>
                    <p>
                      Build, operate, and transfer teams seamlessly, tailored to
                      your investment timeline and goals.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-3 col-md-3 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <h3>Global Capability Center (GCC)</h3>
                    <p>Set up and manage a dedicated innovation hub.</p>
                    <p>
                      Comprehensive support from talent acquisition to
                      compliance and IT infrastructure.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-3 col-md-3 d-flex">
                  <div className="single-main-services-box flex-fill">
                    <h3>Digital and IT Strategy</h3>
                    <p>
                      From digital transformation to IT strategy consultation,
                      prepare your portfolio companies for the future.
                    </p>
                    <p>
                      Leverage our expertise to enhance customer experiences and
                      integrate scalable cloud platforms.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <div className="GCCJourney">
        <div className="container">
          <div className="row ptb-50 align-items-center">
            <div className="col-lg-8 col-md-8">
              {/* <h2 className="align-items-center">
                Connect with us for Your Outsourcing Needs
              </h2> */}
              <h2>
                Empower your portfolio companies with SAT Technologies. Our
                experts are ready to assist you in harnessing technology for
                impactful business growth.
              </h2>
            </div>
            <div className="col-lg-4 col-md-4" style={{ textAlign: "end" }}>
              <Link href="/contact-us/" className="btn btn-primary">
                Connect With Us
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
