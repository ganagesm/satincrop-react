import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="ai-services-area pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>Why build your startup on Google Cloud</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <div className="image-icon">
                  <img
                    src="/images/icon-44.svg"
                    alt="icon"
                    style={{ width: "90px", paddingBottom: "10px" }}
                  />
                </div>
                <h3>Long-term cost savings</h3>
                <p>
                  Startups see significant savings when building on or migrating
                  to Google Cloud. In addition to the bottom line, our secure
                  and reliable platform reduces risk and increases operational
                  efficiency with AI-powered recommendations for cost
                  optimization.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <div className="image-icon">
                  <img
                    src="/images/icon-7.svg"
                    alt="icon"
                    style={{ width: "90px", paddingBottom: "10px" }}
                  />
                </div>
                <h3>Innovate quickly and easily</h3>
                <p>
                  Speed is critical for startup growth. Streamline app
                  development with Google Cloud’s state-of-the-art containers
                  and AI-powered microservices including Firebase, GKE and Cloud
                  Run, which can get you from code to production in record time.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <div className="image-icon">
                  <img
                    src="/images/icon-18.svg"
                    alt="icon"
                    style={{ width: "90px", paddingBottom: "10px" }}
                  />
                </div>
                <h3>Turn data into real-time insights</h3>
                <p>
                  Unlock powerful insights and improve decision-making with
                  leading-edge data analytics and AI solutions, including
                  BigQuery, Looker, and{" "}
                  <strong>
                    <a href="/google-cloud-generative-ai-vertex/">Vertex AI</a>
                  </strong>{" "}
                  .
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
              <div className="single-services-box flex-fill">
                <div className="image-icon">
                  <img
                    src="/images/icon-18.svg"
                    alt="icon"
                    style={{ width: "90px", paddingBottom: "10px" }}
                  />
                </div>
                <h3>Seamless collaboration</h3>
                <p>
                  Connect, create, and collaborate at the speed you need to
                  scale with generative AI.{" "}
                  <strong>
                    <a href="/buy-google-workspace/">Google Workspace</a>
                  </strong>{" "}
                  provides all the tools you need to get ahead—like Gmail,
                  Drive, and Meet—in a single solution, all backed by trusted
                  Google security.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-services-shape">
          <img src="/images/home-six/services/shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Services;
