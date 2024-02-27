import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const TopNavbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);
  return (
    <>
      <div className="topbar-wrap-area">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-3 col-md-3">
              <div className="topbar-content">
                {/* <img alt="cmmi5" src="./images/ca-cmmi_logo.jpeg" width={50} style={{ marginRight: "10px", }} /> */}

                {/* <span>Welcome to SA Technologies Inc. Need Help? <a href="/contact-us/">Contact Us</a> </span> */}
              </div>
            </div>
            <div className="col-lg-9 col-md-9">

              {/* <ul class="topbar-action-list">
                <li><a class="nav-link false" href="/careers/">USA : +1 (408) 495-5822</a></li>
                <li><a class="nav-link false" href="/careers/">India : +91 78757 87550</a></li>
                <li><a class="nav-link false" href="/careers/">sales@satincorp.com</a></li>
                <li><a class="nav-link false" href="/careers/">Join Our Team</a></li>
                <li style="margin-left: -20px;">
                  <a class="nav-link false" href="/investors/" style="color: rgb(255, 72, 0);">Investor</a>
                </li>
              </ul> */}




              <ul className="topbar-action-list">
                <li>
                  <Link
                    href="tel:(408)-495-5822"
                    className={`nav-link ${currentPath == "tel:(408)-495-5822" && "active"
                      }`}>
                    USA : +1 (408)-495-5822
                  </Link>
                </li>

                <li>
                  <Link
                    href="tel:+91 78757 87550"
                    className={`nav-link ${currentPath == "tel:+91 78757 87550" && "active"
                      }`}>
                    India : +91 78757 87550
                  </Link>
                </li>

                <li>
                  <Link
                    href="mailto:sales@satincorp.com"
                    className={`nav-link ${currentPath == "mailto:sales@satincorp.com" && "active"
                      }`}>
                    sales@satincorp.com
                  </Link>
                </li>


                <li>
                  <Link
                    href="/careers/"
                    className={`nav-link ${currentPath == "/careers/" && "active"
                      }`}>
                    Join Our Team
                  </Link>
                </li>
                <li style={{ marginLeft: "-20px" }}>
                  <Link
                    style={{ color: "#ff4800" }}
                    href="/investors/"
                    className={`nav-link ${currentPath == "/investors/" && "active"
                      }`}>
                    Investor
                  </Link>
                </li>
                {/*<li>
                  <i class="fa-solid fa-phone"></i>
                  <a href="tel:+917823025808">+91 7823 02 5808</a>
                </li> */}
                {/* <li>
                  <i class="fa-solid fa-envelope"></i>
                  <a href="mailto:sales@satincorp.com">sales@satincorp.com</a>
                </li> */}
                {/* <li>
                  <Link
                    href="https://www.linkedin.com/company/sa-technologies-inc-/"
                    target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/satincorp"
                    target="_blank"
                    rel="noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li style={{ padding: "0" }}>
                  <Link
                    href="https://twitter.com/SatechGlobal"
                    target="_blank"
                    rel="noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      fill="#ff4800"
                      viewBox="0 0 512 512">
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopNavbar;
