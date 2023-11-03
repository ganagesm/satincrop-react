import React from "react";
import Link from "next/link";

const TopFeaturedSolutions = () => {
  return (
    <>
      <div className="top-featured-area pt-50 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-sm-12">
              <div style={{textAlign:"center",}} className="top-featured-content">
                <h2>Why SA Technologies?</h2>
                <p>SAT is a trusted Google Cloud partner that can help you get the most out of Google Cloud solutions. 
                  Here are just a few of the reasons why you should choose SA Technologies as your Google Cloud partner
                </p>
                <ul className="about-list" style={{maxWidth:"100%",textAlign:"left",}}>
                  <li><b>Rapid implementation:</b> SA Technologies has a proven track record of success in helping customers quickly implement Google Cloud solutions. They understand the unique challenges that businesses face, and they work closely with their customers to develop a customized implementation plan that meets their specific needs.</li>
                  <li><b>Expertise:</b> SA Technologies' team of Google Cloud certified engineers has the expertise and experience to help businesses get the most out of Google Cloud solutions. They can help businesses choose the right solutions for their needs, and they can help them implement and manage those solutions effectively.</li>
                  <li><b>Support:</b> SA Technologies provides comprehensive support to their customers throughout the implementation process and beyond. They offer a variety of support options, including training, consulting, and 24/7 technical support.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFeaturedSolutions;
