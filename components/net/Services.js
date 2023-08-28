import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>.NET is a versatile framework that supports</h2>
            {/* <h4>for building robust and scalable web applications</h4> */}
            {/* <p>
            Rails, also known as Ruby on Rails or simply RoR, is a popular web application framework written in the Ruby programming language. I
            </p> */}
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Web Applications
                </h2>
                <p>.NET is widely used for building web applications of varying complexities. Developers can leverage frameworks like ASP.NET MVC, ASP.NET Core, and Blazor to create interactive and scalable web applications. These applications can range from simple websites to large-scale enterprise solutions with complex business logic and integrations.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Desktop Applications

                </h2>
                <p>.NET enables the development of desktop applications for Windows using frameworks like Windows Forms and Windows Presentation Foundation (WPF). Windows Forms provides a straightforward approach to creating desktop applications with a rich user interface, while WPF offers a more flexible and visually appealing experience.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                  Mobile Applications

                </h2>
                <p>With Xamarin, a framework within .NET, developers can build cross-platform mobile applications for iOS and Android using C#. Xamarin allows code sharing between platforms, resulting in reduced development effort. The applications developed using Xamarin provide native-like performance and access to platform-specific APIs.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Cloud-Based Applications
                </h2>
                <p> .NET is well-suited for building cloud-based applications that leverage the power and scalability of cloud platforms. Microsoft Azure, in particular, offers extensive support for .NET, enabling developers to build cloud-native applications that can leverage services like virtual machines, databases, storage, AI capabilities, and more.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Enterprise Applications

                </h2>
                <p>.NET is widely used for building enterprise-level applications that require scalability, security, and integration with other systems. It provides features and tools to create business applications with robust data access, authentication, authorization, and integration capabilities. These applications often involve complex business logic, workflows, and integrations with various enterprise systems.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                  APIs and Microservices

                </h2>
                <p>.NET allows developers to build APIs and microservices using frameworks like ASP.NET Web API and gRPC. These frameworks enable the creation of scalable and secure APIs that can be consumed by other applications or clients. .NET's support for containers and orchestration platforms like Docker and Kubernetes makes it suitable for building microservices architectures.</p>
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
