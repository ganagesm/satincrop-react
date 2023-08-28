import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Android development </h2>
            {/* <h4>for building robust and scalable web applications</h4> */}
            <p>
            the process of creating applications for the Android operating system, which is primarily used on mobile devices like smartphones and tablets. Android development involves designing, coding, testing, and deploying applications that run on Android devices.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Programming Languages
                </h2>
                <p>Android applications can be developed using different programming languages. The primary language for Android development is Java, which is widely used and supported by the Android platform. In recent years, Kotlin, a modern programming language, has gained popularity and is now officially supported by Google for Android development.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Android Software Development Kit (SDK)

                </h2>
                <p>The Android SDK provides a set of tools, libraries, and resources that developers use to build Android applications. It includes essential components like the Android Emulator for testing apps on virtual devices, debugging tools, and documentation.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                Integrated Development Environment (IDE)

                </h2>
                <p>Android development is typically done using an Integrated Development Environment. Android Studio is the official IDE for Android development, providing a rich set of tools for writing, debugging, and testing Android applications. It offers features like code editing, layout design, debugging support, and device emulation.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>User Interface Design
                </h2>
                <p> Android applications have user interfaces that are designed using XML-based layout files and UI components provided by the Android SDK. Developers can create visually appealing interfaces by arranging and styling UI elements like buttons, text fields, images, and more.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Application Components

                </h2>
                <p>Android applications are built using various components that define the app's behavior and structure. Key components include Activities, which represent screens or user interfaces, Services for background tasks, Broadcast Receivers for receiving system or app events, and Content Providers for data sharing between applications.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                APIs and Libraries

                </h2>
                <p>Android provides a rich set of APIs and libraries that developers can leverage to add functionality to their applications. These include APIs for accessing device features like the camera, sensors, GPS, and network connectivity. Additionally, there are libraries for handling database operations, networking, user authentication, and more.</p>
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
