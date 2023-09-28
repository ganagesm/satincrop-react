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

      <div style={{ backgroundImage: `url(/images/technology-banner/career-banner.png)`, padding:"100px 0px", }}>
        <div className="container-fluid">
          <div className="ai-main-banner-content">
            <h1 style={{color:"#fff"}}>Begin your journey with SAT today and unlock your utmost potential.</h1>
            {/* <p>SA Technologies leads in AI-driven education solutions, optimizing operations and student outcomes
               with technology. Stay ahead with our dedicated team in a rapidly advancing landscape 

            </p> */}

            <ul className="banner-btn">
              {/* <li>
                <Link href="/contact" className="btn btn-primary">
                Get in touch now
                </Link>
              </li> */}
              {/* <li>
                <div onClick={() => setToggler(!toggler)} className="video-btn">
                  <i className="flaticon-play-button"></i>
                  Watch Intro Video
                </div>
              </li> */}
            </ul>
          </div>
        </div>

        {/* <div className="ai-main-banner-image">
          <img src="/images/home-six/banner/main1.png" alt="image" />
          <div className="circle-shape"></div>
        </div>
        <div className="ai-main-banner-image right-image">
          <img src="/images/home-six/banner/main2.png" alt="image" />
          <div className="circle-shape"></div>
        </div> */}

        {/* Shape Images */}
        {/* <div className="ai-main-banner-shape-1">
          <img src="/images/home-six/banner/shape-1.png" alt="image" />
        </div>
        <div className="ai-main-banner-shape-2">
          <img src="/images/home-six/banner/shape-2.png" alt="image" />
        </div>
        <div className="ai-main-banner-shape-3">
          <img src="/images/home-six/banner/shape-2.png" alt="image" />
        </div> */}
      </div>
    </>
  );
};

export default DomainSearch;
