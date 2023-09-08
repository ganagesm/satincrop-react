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
                height: "598px",
                width: "100%",
              }}
                src="/images/blog/article.jpg"
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
                <h3>GCC Evolution: From IT Support to Tech Innovation Hubs </h3>
                {/* <p>Discover the role of SA Technologies' Global Capability Centers (GCCs) in revolutionizing business operations and enabling growth. Explore how SA Technologies' GCCs are driving innovation and efficiency."</p> */}
                <p>Global Capability Centers (GCCs) have been integral to the growth and success of many businesses.
                       Over the years, they have evolved significantly, transforming from mere support centers to 
                       becoming key drivers of innovation and efficiency. In this blog, we'll delve into the world 
                       of GCCs and how SA Technologies' GCCs are revolutionizing business operations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
