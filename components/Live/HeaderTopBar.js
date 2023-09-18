import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


const TopNavbar = () => {
  return (
    <>
      <div className="topbar-wrap-area">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="topbar-content">
                <span>Welcome to SA Technologies Inc. Need Help? <a href="/contact-us/">Contact Us</a> </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <ul className="topbar-action-list">
                {/* <li>
                  PartnerContent
                  <i class="fa-solid fa-location-pin"></i> 2750 Quadra Street Victoria, Canada
                </li> */}
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <a href="tel:+917823025808">+91 7823 02 5808</a>
                </li>
                <li>
                  <i class="fa-solid fa-envelope"></i>
                  <a href="mailto:sales@satincorp.com">sales@satincorp.com</a>
                </li>
                <li>
                  <img alt="cmmi5" class="main-logo" src="./images/ca-cmmi_logo.jpeg"
                    width={50} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default TopNavbar;