import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Data Analytics Solutions  {" "}
            </h2>
            {/* <h4>for building robust and scalable web applications</h4> */}
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-services-box">
                <h2>Data warehouse modernization</h2>
                <p>Jumpstart your journey to modernization with Big Query by seamlessly migrating from any on-premises or 
                  cloud data warehouse. Tackle today’s complex demands and scale effortlessly with advanced ML 
                  capabilities and robust multi-cloud support. </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services-box">
                <h2>Data Lake Modernization  </h2>
                <p>Maximize your data lake's value by enabling secure, cost-effective data ingestion, storage, and analysis of vast volumes of diverse data. Utilize Dataproc for cutting-edge data lake modernization, ETL processes, and protected data science workflows. With Dataplex, centrally manage and govern your data across ecosystems, ensuring consistent control and visibility.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-services-box">
                <h2>Streaming Analytics for Real-time Insight</h2>
                <p>Secure a competitive edge by analyzing and processing event streams instantaneously with Dataflow’s unified streaming and batch data analysis. Enhance data utility from the moment of generation with Pub/Sub’s high-capacity event ingestion and Datastream’s seamless data replication to BigQuery. </p>

              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services-box">
                <h2>Data Science  </h2>
                <p>Boost productivity and derive insights faster with Google Cloud’s comprehensive suite of data science tools. Enhance developer efficiency with scalable, serverless Spark environments, integrated seamlessly with both Google-native and open-source resources. </p>
              </div>
            </div>
          </div>

          
          
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-services-box">
                <h2>Business Intelligence</h2>
                <p>Revolutionize your BI strategy with Looker and BigQuery at the core of your data-driven transformation. 
                  By fostering innovative data usage, SA Technologies enables impactful decision-making and 
                  transformative business processes. </p>

              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services-box">
                <h2>Marketing Analytics to Drive Performance </h2>
                <p>Enhance your marketing strategies by consolidating Google Ads, Google Analytics, and other essential 
                  data into BigQuery. Uncover deep insights, craft predictive audiences, and amplify your marketing ROI 
                  with custom dashboards and analysis tools.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-services-box">
                <h2>Geospatial Analytics </h2>
                <p>Leverage our comprehensive geospatial analytics solutions, including BigQuery, Earth Engine, and 
                  Google Maps Platform, to unlock novel insights and foster a sustainable, prosperous future for your 
                  business. </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services-box">
                <h2>Datasets for Enhanced Analytics and AI  </h2>
                <p>Augment your analytics and AI projects with BigQuery’s access to unique, external datasets and 
                  pre-built solutions from Google, public, and comercial sources. Securely share and exchange valuable 
                  data assets across organizations with BigQuery's Analytics Hub. </p>
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
    </>
  );
};

export default Services;
