import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>React is a popular JavaScript library</h2>
            <h4>used for building user interfaces, particularly for web applications</h4>
            <p>
            React is widely used in modern web development for building interactive and dynamic user interfaces. It is particularly suitable for complex applications where the UI needs to be responsive, data-driven, and modular. React's popularity and large community support have resulted in a rich ecosystem of tools, libraries, and resources to aid development with React.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Component-Based Development
                </h2>
                <p>React follows a component-based architecture, where the user interface is divided into reusable and independent components. Components encapsulate their own logic and state, making it easier to manage and update specific parts of the UI without affecting the entire application.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Declarative Syntax

                </h2>
                <p>React uses a declarative syntax, which means developers describe how the UI should look based on the application state, and React handles the underlying updates and rendering. This approach simplifies the development process and reduces the likelihood of bugs.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                Virtual DOM

                </h2>
                <p>React utilizes a virtual DOM (Document Object Model) to efficiently update and render components. The virtual DOM is an abstraction of the actual DOM, allowing React to perform minimal updates by comparing the virtual DOM with the real DOM and only applying the necessary changes. This approach improves performance and provides a smoother user experience.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Efficient Rendering
                </h2>
                <p>React optimizes rendering by utilizing a diffing algorithm. When the application state changes, React compares the previous and current states to identify the minimal set of changes required to update the UI. By minimizing DOM manipulations, React ensures efficient rendering and enhances performance.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Component Reusability

                </h2>
                <p>React promotes reusability of components, allowing developers to create modular and self-contained UI elements. These components can be reused across different parts of the application, reducing code duplication and improving maintainability.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                Unidirectional Data Flow

                </h2>
                <p>React follows a unidirectional data flow pattern, also known as Flux or Redux architecture. It ensures that data flows in a single direction, making it easier to track and manage state changes. This pattern improves predictability and simplifies debugging.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>React Native
                </h2>
                <p>React also has a mobile development framework called React Native, which enables building native mobile applications for iOS and Android using JavaScript and React. With React Native, developers can reuse much of their codebase between web and mobile applications, saving development time and effort.</p>
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
