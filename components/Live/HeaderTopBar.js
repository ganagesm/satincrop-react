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
                <img alt="cmmi5" src="./images/ca-cmmi_logo.jpeg" width={50} style={{ marginRight: "10px", }} />

                {/* <span>Welcome to SA Technologies Inc. Need Help? <a href="/contact-us/">Contact Us</a> </span> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <ul className="topbar-action-list">
                {/* <li>
                  PartnerContent
                  <i class="fa-solid fa-location-pin"></i> 2750 Quadra Street Victoria, Canada
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <a href="tel:+917823025808">+91 7823 02 5808</a>
                </li> */}
                {/* <li>
                  <i class="fa-solid fa-envelope"></i>
                  <a href="mailto:sales@satincorp.com">sales@satincorp.com</a>
                </li> */}
                <li>
                  <a href="https://www.linkedin.com/company/sa-technologies-inc-/" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li><a href="https://www.facebook.com/satincorp" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f"></i></a></li>
                <li style={{ padding: "0", }}><a href="https://twitter.com/SatechGlobal" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="#ff4800" viewBox="0 0 512 512">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></a>
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