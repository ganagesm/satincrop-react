import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const DomainSearch = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      {/* <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      /> */}

      <div className="ai-main-banner-area">
        <div className="container-fluid">
          <div className="ai-main-banner-content">
            <h1>Empowering Evolution: IT Consulting for Media and Entertainment Industry</h1>
            <p>Navigating the dynamic digital era, the media and entertainment industry is undergoing transformative changes. SA Technologies offers tailored IT consulting to empower businesses in this evolving landscape. </p>

            <ul className="banner-btn">
              <li>
                <Link href="/contact-us/" className="btn btn-primary">
                Get in touch now
                </Link>
              </li>
              {/* <li>
                <div onClick={() => setToggler(!toggler)} className="video-btn">
                  <i className="flaticon-play-button"></i>
                  Watch Intro Video
                </div>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="ai-main-banner-image">
          <img src="/images/home-six/banner/main1.png" alt="image" />
          <div className="circle-shape"></div>
        </div>
        <div className="ai-main-banner-image right-image">
          <img src="/images/home-six/banner/main2.png" alt="image" />
          <div className="circle-shape"></div>
        </div>

        {/* Shape Images */}
        <div className="ai-main-banner-shape-1">
          <img src="/images/home-six/banner/shape-1.png" alt="image" />
        </div>
        <div className="ai-main-banner-shape-2">
          <img src="/images/home-six/banner/shape-2.png" alt="image" />
        </div>
        <div className="ai-main-banner-shape-3">
          <img src="/images/home-six/banner/shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default DomainSearch;
