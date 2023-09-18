import React, { Component } from "react";
import Link from "next/link";

const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
  bgImgClass,
}) => {
  return (
    <>
      {/* <div className={`page-title-area ${bgImgClass}`}>
        <div className="container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>
            <ul>
              <li>
                <Link href={homePageUrl}>{homePageText}</Link>
              </li>
              <li>{activePageText}</li>
            </ul>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div> */}
      <div className="services-details-area">
        <div className="row col-md-12">
          <div className="col-md-6"
            style={{
              padding: "0px",
            }}
          >
            <div className="services-details-image">
              <img
              style={{  
                height: "570px",
                width: "100%",
              }}
                src="/images/blog/amita-blog.png"
                alt="image"
              />
            </div>
          </div>
          <div className="col-md-6"
             style={{
              padding: "0px",
            }}
          >
            <div className="">
              <div className="article_bg mb-30">
                <h3>The Rise of GCC in India: Harnessing the Talent-rich Landscape for Unparalleled Benefits </h3>
                {/* <p>Discover the role of SA Technologies' Global Capability Centers (GCCs) in revolutionizing business operations and enabling growth. Explore how SA Technologies' GCCs are driving innovation and efficiency."</p> */}
                <p>In the digital age, Global Capability Centers (GCCs) are expanding, with India as a key player. SA Technologies identifies India's talent as a prime hub for GCCs, offering significant benefits. Explore our insights on India's central role in this transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
