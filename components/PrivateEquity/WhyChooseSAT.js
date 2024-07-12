import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

const ComputerVisionAI = () => {
  return (
    <>
      <div className="computer-vision-ai-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="section-title">
              <h2>Delivering Values and Performance</h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-image">
                <img
                  src="/images/Cybersecurity.jpg"
                  width="600"
                  height="350"
                  crop={{
                    type: "auto",
                    source: true,
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="computer-vision-ai-content">
                <h3>Cybersecurity for Private Equity Firms</h3>
                <p>
                  Maximize your investment potential with SA Technologies' tailored IT services. We support Private Equity Groups by managing cybersecurity risks to enhance operational performance and safety, regardless of investment scale.
                </p>
                <p>Strong cybersecurity practices are essential for Private Equity firms, which conduct thorough IT assessments before finalizing deals to reduce risks and improve efficiency. As cybersecurity threats evolve, small or new companies face increased risks, making a comprehensive cybersecurity plan crucial for protecting investments. </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center pt-100">

            <div className="col-lg-6 col-md-6">
              <div className="computer-vision-ai-content">
                <h3>Hybrid Cloud for Private Equity Firms</h3>
                <p>SA Technologies offers Hybrid Cloud solutions that boost security, performance, and efficiency in IT operations for PE companies. By migrating more business applications to the Cloud, private equity firms can better manage evolving needs such as remote workforces, IT resource constraints, and adjustments to physical office spaces. </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-image">
                <img
                  src="/images/HybridCloud.jpg"
                  width="600"
                  height="350"
                  crop={{
                    type: "auto",
                    source: true,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center pt-100">
            <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-image">
                <img
                  src="/images/ManagedDetection.jpg"
                  width="600"
                  height="350"
                  crop={{
                    type: "auto",
                    source: true,
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="computer-vision-ai-content">
                <h3>Managed Detection and Response for Private Equity Firms </h3>
                <p>The cybersecurity threat landscape is constantly evolving, making it challenging for companies to stay secure on their own. SA Technologies' Managed Detection and Response (MDR) service provides advanced threat protection around the clock. Private equity firms benefit from continuous monitoring, unparalleled threat detection, and customizable reporting, ensuring the security of their critical IT infrastructure.</p>
              </div>
            </div>

          </div>
          <div className="row align-items-center pt-100">
            <div className="col-lg-6 col-md-6">
              <div className="computer-vision-ai-content">
                <h3>Vulnerability Scanning and Management for Private Equity Firms  </h3>
                <p>In the fast-paced world of private equity, there’s no room for disruption. SA Technologies offers proactive Vulnerability Scanning and Management services to prevent exploits and breaches, ensuring smooth operations. Our 24x7x365 Security Operations Center identifies gaps, mitigates threats, and keeps internal teams informed and empowered to tackle cybersecurity challenges effectively. </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-image">
                <img
                  src="/images/Vulnerability.jpg"
                  width="600"
                  height="350"
                  crop={{
                    type: "auto",
                    source: true,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center pt-100">
            <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-image">
                <img
                  src="/images/Disaster.jpg"
                  width="600"
                  height="350"
                  crop={{
                    type: "auto",
                    source: true,
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="computer-vision-ai-content">
                <h3>Disaster Recovery-as-a-Service for Private Equity </h3>
                <p>Despite best efforts, scenarios like infrastructure failures, human error, or natural disasters can occur. Being prepared with managed disaster recovery and business continuity solutions is crucial. SA Technologies' Disaster Recovery-as-a-Service (DRaaS) provides real-time data replication, swift server and system recovery, and post-event testing to ensure minimal disruption and quick restoration of operations. </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ComputerVisionAI;
