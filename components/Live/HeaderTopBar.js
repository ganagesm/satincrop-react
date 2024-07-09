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
                  <Link href="tel:(408)-495-5822">USA : +1 (408)-495-5822</Link>
                </li>

                <li>
                  <Link href="tel:+91 78757 87550">
                    India : +91 78757 87550
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://api.whatsapp.com/send/?phone=%2B9107058644492&text=Hello!%20I%27m%20interested%20in%20exploring%20your%20SAT%20Services.%20Can%20you%20share%20more%20details?"
                    target="_blank">
                    <i
                      className="fa-brands fa-whatsapp"
                      style={{
                        fontSize: "20px",
                        width: "20px",
                        top: "1px",
                      }}></i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#000"
                      viewBox="0 0 24 24">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link href="mailto:sales@satincorp.com">
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
                <li>
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
