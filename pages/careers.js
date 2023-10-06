import React from "react";
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import MainBanner from "../components/Careers/MainBanner";
import FunFacts from "../components/Careers/FunFacts";
import TopFeaturedSolutions from "../components/Careers/TopFeaturedSolutions";
import AboutAI from "../components/Careers/AboutAI";
import Services from "../components/Careers/Services";
import ComputerVisionAI from "../components/Careers/ComputerVisionAI";
import ContactFormContent from "../components/Common/ContactFormContent";
import Team from "../components/Careers/Team";
import Award from "../components/Careers/Award";
import GoGlobal from "../components/Careers/GoGlobal";
import Cta from "../components/Careers/Cta";
import Rating from "../components/Careers/Rating";
import Head from 'next/head';

const Careers = () => {
  return (
    <>

      <Head>
        <title>Join Our Team: Exciting Career Opportunities at SAT | Apply Now!</title>
        <meta property="og:title" content="Get in Touch with SA Technologies Experts | Contact Us Today" key="title" />
        <meta name="description" content="Embark on a rewarding career journey with SA Technologies. Explore, innovate, and grow in a workplace that values collaboration and personal development. Your future starts here!" key="description" />
      </Head>

      {/* <TopHeader /> */}

      <Navbar />

      <MainBanner />

      {/* <FunFacts /> */}

      <TopFeaturedSolutions />

      <AboutAI />

      <Services />

      <GoGlobal />

      <Cta />

      <Team />

      <Award />

      <Rating />
     
      {/* <ComputerVisionAI /> */}

      {/* <PricingPlan /> */}

      {/* <BlogPostSlider /> */}
      
      {/* <LatestBlog />  */}
       <ContactFormContent />
      {/* <Newsletter /> */}

      <Footer />

    </>
  );
};
export default Careers;