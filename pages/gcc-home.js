import Navbar from "../components/GCCHome/Navbar";
import Footer from "../components/GCCHome/Footer";
import HeroBanner from "../components/GCCHome/HeroBanner";
import TechDetailsContent from "../components/GCCHome/TechDetailsContent";
import Services from "../components/GCCHome/Services";
import GlobalCapabilityCenters from "../components/GCCHome/GlobalCapabilityCenters";
import MainServicesGCC from "../components/GCCHome/MainServicesGCC";
import ProfessionalSolutions from "../components/GCCHome/ProfessionalSolutions";
import OurFeaturedSolutions from "../components/GCCHome/OurFeaturedSolutions";
import PartnerContent from "../components/GCCHome/PartnerContent";
import Script from "next/script";
import Head from "next/head";
import ZohoScript from "../components/ZohoScript";
// import { WebPageJsonLd, NextSeo, DefaultSeo } from "next-seo";
import { WebPageJsonLd, NextSeo } from "next-seo";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <WebPageJsonLd
        headline="SAT | Global Team Solutions & GCC Expertise | Empowering Collaboration "
        description="Discover how SAT empowers global teams with cutting-edge GCC solutions. Experience seamless collaboration and enhanced productivity with our expert consulting services, designed to drive success in diverse environments. Connect with us to transform your team dynamics today!"
        author="SA Technologies"
        keywords="IT Consulting"
        image="https://www.satincorp.com/images/about/5.jpg"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://www.satincorp.com/",
          title:
            "SAT | Global Team Solutions & GCC Expertise | Empowering Collaboration ",
          description:
            "Discover how SAT empowers global teams with cutting-edge GCC solutions. Experience seamless collaboration and enhanced productivity with our expert consulting services, designed to drive success in diverse environments. Connect with us to transform your team dynamics today!",
          images: [
            {
              url: "https://www.satincorp.com/images/about/5.jpg",
              width: 800,
              height: 600,
              alt: "SAT | Global Team Solutions & GCC Expertise | Empowering Collaboration ",
            },
          ],
          authorName: "SA Technologies",
          keywords: "IT Consulting",
        }}
      />
      <Head>
        <title>
          SAT | Global Team Solutions & GCC Expertise | Empowering Collaboration
        </title>
        <meta
          property="og:title"
          content="SAT | Global Team Solutions & GCC Expertise | Empowering Collaboration "
          key="title"
        />
        <meta
          name="description"
          content="Discover how SAT empowers global teams with cutting-edge GCC solutions. Experience seamless collaboration and enhanced productivity with our expert consulting services, designed to drive success in diverse environments. Connect with us to transform your team dynamics today!"
          key=""
        />
      </Head>
      {/* <ZohoScript /> */}
      <Navbar />
      <HeroBanner />
      <TechDetailsContent />
      <Services />
      {/* <ProfessionalSolutions /> */}
      <GlobalCapabilityCenters />
      <OurFeaturedSolutions />
      <PartnerContent />

      <div className="fun-facts-area services-area pt-100 bg-f2f6f9">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-6 col-sm-3 col-md-3 d-flex">
              <div className="single-funfacts single-services-box flex-fill">
                <h4>
                  Top Tier Cities <span className="sign-icon">+</span>
                </h4>
                <p>Delhi</p>
                <p>Mumbai</p>
                <p>Pune</p>
                <p>Bengaluru</p>
                <p>Hyderabad</p>
                <p>Chennai</p>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-3 col-md-3 d-flex">
              <div className="single-funfacts single-services-box flex-fill">
                <h4>
                  GCCs in India (count) <span className="sign-icon">+</span>
                </h4>
                <p>1000+ FY 15</p>
                <p>1600+ FY23</p>
                <p>2400+ FY30(E)</p>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-3 col-md-3 d-flex">
              <div className="single-funfacts single-services-box flex-fill">
                <h4>
                  Employment (In Mn) <span className="sign-icon">+</span>
                </h4>
                <p>0.7+ FY 15</p>
                <p>1.6+ FY23</p>
                <p>4.5+ FY30(E)</p>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-3 col-md-3 d-flex">
              <div className="single-funfacts single-services-box flex-fill">
                <h4>
                  GCC Market Size India(in US$ Bn){" "}
                  <span className="sign-icon">+</span>
                </h4>
                <p>19.4 FY 15</p>
                <p>46.0 FY23</p>
                <p>110.0 FY30(E)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images  */}
        <div className="shape-img1">
          <img src="/images/map.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
      </div>

      {/* <MainServicesGCC /> */}
      <Footer />
    </>
  );
};
export default Index;
