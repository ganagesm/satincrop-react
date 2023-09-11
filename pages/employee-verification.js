import React from "react";
import Link from "next/link";
import Head from 'next/head';
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import OffshorePageBanner from "../components/Live/OffshorePageBanner";

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>Employee Verification | SA Technologies   </title>
        <meta property="og:title" content="Employee Verification | SA Technologies  " key="title" />
        <meta name="description" content="Employee Verification | SA Technologies" key="description" />
      </Head>

      <Navbar />
      <OffshorePageBanner
        pageTitle="Employee Verification"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Employee Verification"
        bgImgClass="item-bg9"
      />
      <section className="blog-details-area ptb-110">
        <div className="container">
          <div className="row">

            <div className="article-content">
              <div className="entry-meta">
                <p> Thanks for connecting with us for BGV verification of our ex-employee.</p>

                <h3>Introduction</h3>
                <p> Please note that it’s chargeable service from our side. Please pay using below “Pay Now” button & share the transaction details along with relevant documents of ex-employee to
                  <a href="mailto:hr@dev1.satincorp.com">hr@dev1.satincorp.com</a> <a href="mailto:hr.ops2@dev1.satincorp.com">hr.ops2@dev1.satincorp.com</a> <a href="matilto:pck@dev1.satincorp.com">pck@dev1.satincorp.com</a>  .  </p>
                <Link href="https://pages.razorpay.com/pl_EqcKXF6O6IsTbd/view" target="_blank" className="btn btn-primary">
                  Pay Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServiceDetails;
