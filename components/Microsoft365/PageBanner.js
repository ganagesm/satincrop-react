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
      <div className={`page-title-area ${bgImgClass}`}>
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
          <div className="btn-box" style={{marginTop:'20px'}}>
            <Link href="/contact-us/" className="btn btn-primary">
              Get in touch now
            </Link>
          </div>
        </div>
          

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
