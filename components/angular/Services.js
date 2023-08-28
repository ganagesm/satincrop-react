import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>What Angular is used for</h2>
            {/* <h4>for building robust and scalable web applications</h4> */}
            <p>
            Angular is a powerful web application framework developed and maintained by Google. It is used for building dynamic and interactive client-side web applications. 
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Single-Page Applications (SPAs):
                </h2>
                <p>Angular is widely used for building single-page applications where a single HTML page is dynamically updated as users interact with the application. It provides powerful routing capabilities, data binding, and a component-based architecture, making it ideal for creating SPAs with a smooth and responsive user experience.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Cross-Platform Development

                </h2>
                <p>Angular allows developers to build web applications that can run across different platforms. With frameworks like Ionic or NativeScript, Angular can be used to develop cross-platform mobile applications for iOS and Android devices. Additionally, Angular can be utilized with frameworks like Electron to build cross-platform desktop applications.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                Large and Complex Applications

                </h2>
                <p>Angular is particularly suited for building large-scale applications with complex requirements. Its modular and component-based architecture allows for better code organization, reusability, and maintainability. Angular's dependency injection system and extensive tooling provide robust support for managing and scaling large projects.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{height:"300px"}}>
                <h2>Real-Time Applications
                </h2>
                <p>Angular, when combined with technologies like WebSocket or WebRTC, is well-suited for developing real-time applications that require instant data updates and collaboration. Examples include chat applications, collaborative tools, and real-time dashboards.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Progressive Web Applications (PWAs)

                </h2>
                <p>Angular provides features and tools that facilitate the development of Progressive Web Applications. PWAs offer native-like experiences with features such as offline support, push notifications, and device hardware access. Angular enables developers to build PWAs that work across different browsers and platforms.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                Enterprise Applications

                </h2>
                <p>Angular is widely used for building enterprise-grade applications. Its comprehensive set of features, such as form validation, data handling, and robust routing, along with strong TypeScript support, make it suitable for developing complex business applications that require rich user interfaces and integration with backend systems.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Dynamic Content Management Systems (CMS)
                </h2>
                <p>Angular can be employed to build content management systems that require dynamic content rendering and management. Its data-binding capabilities, coupled with server-side APIs, allow developers to create powerful CMS solutions for managing and publishing content.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{height:"310px"}}>
                <h2>Testing and Automation
                </h2>
                <p>Angular has built-in support for testing, making it easier to write unit tests, integration tests, and end-to-end tests. The Angular testing framework, along with tools like Jasmine and Protractor, enables developers to write comprehensive test suites and automate testing processes.</p>
              </div>
            </div>


          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default Services;
