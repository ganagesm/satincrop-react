import React, { useState, useRef } from "react";
import Link from "next/link";

const DomainSearch = () => {
  const bottomRef = useRef(null);

  // Function to scroll to the bottom
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const [toggler, setToggler] = useState(false);
  return (
    <>
      <div className="ai-main-banner-area google-startup-offer">
        <div className="container-fluid">
          <div className="ai-main-banner-content">
            <h1>
              Supercharge your growth with the Google for Startups Cloud Program
            </h1>
            <p>
              Get financial, technical, and business benefits that scale with
              you. The Google for Startups Cloud Program provides your startup
              with access to product and technical support, dedicated mentors,
              industry experts, Google Cloud and Firebase costs covered up to
              $200,000 (up to $350,000 for AI startups) over your first two
              years in the program, and more.
            </p>

            <ul className="banner-btn">
              <li>
                <button
                  className="btn btn-primary"
                  onClick={() => scrollToSection("section1")}>
                  Ready to apply?
                </button>
              </li>
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
