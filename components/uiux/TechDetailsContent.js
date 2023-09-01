import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3> Native App Development  </h3>
              <p>Do you want your app to deliver peak performance, seamless user experience, and optimal device integration? Our native app development services are the perfect fit for you. We specialize in Android and iOS app development, utilizing Java, Kotlin, Objective-C, and Swift to build apps that are tailored specifically for each platform. </p>

              <h5 className="pt-3 pb-3">Why Choose Native App Development</h5>
              <ul>
                <li> <strong>Performance:</strong>
                  Native apps have direct access to device hardware, ensuring faster load times and smoother interactions, delivering the best user experience.
                </li>
                <li>
                  <strong>Seamless Integration</strong>
                  By adhering to platform-specific guidelines, we create apps that seamlessly integrate with the respective operating systems, leveraging native features like push notifications, GPS, and camera functionalities.
                </li>
                <li>
                  <strong>User Engagement:</strong> Native apps have a familiar and intuitive user interface, leading to higher user engagement and retention rates.
                </li>
                <li>
                  <strong>App Store Approval:</strong> Both Google Play Store and Apple App Store prefer native apps, making the approval process smoother and faster.
                </li>
              </ul>
              <p></p>
              <Link href="/contact/" className="btn btn-primary mt-20">
                    Know More
                  </Link>
            </div>

            <div className="services-details-image">
              <img
                src="/images/app-dev/app-development-1.jpeg"
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
                src="/images/app-dev/app-development-2.jpeg"
                alt="image"
              />
            </div>
            <div className="services-details-desc mb-30">
              <h3> Cross-Platform App Development  </h3>
              <p>Are you looking to reach a wider audience with a single codebase? Our cross-platform app development services using React Native and Flutter are the perfect solution. With cross-platform apps, you can save development time and costs while maintaining high-quality user experiences on both Android and iOS platforms. </p>

              <h5 className="pt-3 pb-3">Why Choose Cross-Platform App Development</h5>
              <ul>
                <li> <strong>Cost-Effectiveness:</strong>
                  Building a single codebase that works across multiple platforms significantly reduces development costs and time-to-market.
                </li>
                <li>
                  <strong>Code Reusability</strong>
                  With cross-platform frameworks like React Native and Flutter, we can reuse a substantial portion of the code, simplifying maintenance and updates.
                </li>
                <li>
                  <strong>Faster Development:</strong> Develop and launch your app faster, gaining a competitive edge in the market.
                </li>
                <li>
                  <strong>Consistent User Experience:</strong> Users on different platforms will have a consistent and uniform experience, regardless of the device they use.
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
              <h3> Hybrid App Development </h3>
              <p> Are you looking for a cost-effective solution that allows you to reach users on multiple platforms with a single codebase? Our hybrid app development services offer the perfect balance of efficiency and performance. By leveraging web technologies like HTML, CSS, and JavaScript, we create apps that can be deployed across various platforms, including Android, iOS, and the web.  </p>

              <h5 className="pt-3 pb-3"> Why Choose Hybrid App Development</h5>
              <ul>
                <li> <strong>Cost-Effectiveness:</strong>
                  With a single codebase for multiple platforms, hybrid apps significantly reduce development costs and time, making them an attractive option for businesses on a budget.
                </li>
                <li>
                  <strong>Faster Time-to-Market:</strong>
                  Hybrid apps are quicker to develop and deploy, giving you a competitive advantage by reaching your audience faster.
                </li>
                <li>
                  <strong>Unified Codebase:</strong> Maintainability and updates become seamless as the same codebase is used across all platforms, ensuring consistency in features and user experience.
                </li>
                <li>
                  <strong>Access to Device Features:</strong> Hybrid apps can access native device features through plugins, enabling functionality like GPS, camera, and push notifications.
                </li>
                <li>
                  <strong>Offline Capabilities:</strong> By incorporating progressive web app (PWA) features, hybrid apps can work offline or in areas with limited connectivity, providing a continuous user experience.
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
