import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3> Hybrid App Development
              </h3>
              <p>
                For a budget-friendly solution targeting multiple platforms, consider our Hybrid App Development. Using web tech like HTML, CSS, and JavaScript, we design apps for Android, iOS, and the web.

              </p>

              <h5 className="pt-3 pb-3">Benefits of Hybrid Apps:

              </h5>
              <ul>
                <li> <strong>Budget-Friendly:</strong>
                  One codebase reduces both development time and costs.
                </li>
                <li>
                  <strong>Rapid Deployment</strong>
                  BGet your app to market quickly.
                </li>
                <li>
                  <strong>Consistent Codebase:</strong> Updates are a breeze with uniform code across platforms.
                </li>
                <li>
                  <strong>Device Feature Access:</strong> Taps into native device functions like GPS and notifications.
                </li>
              </ul>
              <p></p>
              <Link href="/contact/" className="btn btn-primary mt-20">
                Know More
              </Link>
            </div>

            <div className="services-details-image">
              <img
                src="/images/Data-Strategy-and-Consulting.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="services-details-area">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-image">
              <img
                src="/images/BI-Visualization.jpg"
                alt="image"
              />
            </div>
            <div className="services-details-desc mb-30">
              <h3> Cross-Platform App Development  </h3>
              <p>
                Target a broad audience with one codebase. Our expertise in React Native, Xamarin, and Flutter offers a holistic cross-platform app experience on Android and iOS.
              </p>

              <h5 className="pt-3 pb-3">Benefits of Cross-Platform Apps:

              </h5>
              <ul>
                <li> <strong>Cost-Effectiveness:</strong>
                  Building a single codebase that works across multiple platforms significantly reduces development costs and time-to-market.
                </li>
                <li>
                  <strong>Cost Efficiency</strong>
                  A universal codebase cuts development expenses and speeds up deployment.
                </li>
                <li>
                  <strong>Code Reusability:</strong> Frameworks like React Native allow significant code reuse, easing updates.
                </li>
                <li>
                  <strong>Swift Development:</strong> Launch your app swiftly and get ahead.
                </li>
                <li>
                  <strong>Uniform User Experience:</strong> Ensures users enjoy a consistent interface across devices.
                </li>
              </ul>
              <p></p>
              <Link href="/contact/" className="btn btn-primary mt-20">
                Know More
              </Link>
            </div>


          </div>
        </div>
      </div>

      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3> Native App Development </h3>
              <p>
                Desire peak performance and an impeccable user experience in your app? Our Native App Development is your solution. Specializing in Android and iOS, we use Java, Kotlin, Objective-C, and Swift to craft platform-specific applications.

              </p>

              <h5 className="pt-3 pb-3"> Benefits of Native Apps:

              </h5>
              <ul>
                <li> <strong>Performance:</strong>
                  Direct access to device hardware offers swift interactions for an unmatched user experience.
                </li>
                <li>
                  <strong>Seamless Integration:</strong>
                  Apps naturally sync with operating systems, tapping into features like notifications, GPS, and camera.
                </li>
                <li>
                  <strong>User Engagement:</strong> Intuitive interfaces boost user loyalty.
                </li>
                <li>
                  <strong>App Store Approval:</strong> Native apps enjoy a streamlined approval process in leading app stores.
                </li>
              </ul>
              <p></p>
              <Link href="/contact/" className="btn btn-primary mt-20">
                Know More
              </Link>
            </div>

            <div className="services-details-image">
              <img
                src="/images/app-dev/app-development-3.jpeg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
