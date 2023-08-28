import React from "react";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Python frameworks</h2>
            <h2>cater to various application domains</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Django</h2>
                <p>
                  Django is a high-level web framework known for its "batteries
                  included" philosophy. It provides a robust set of features for
                  building web applications, including URL routing, database
                  abstraction, form handling, authentication, and more. Django
                  follows the Model-View-Controller (MVC) architectural pattern
                  and promotes rapid development with its clear and pragmatic
                  design.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Flask</h2>
                <p>
                  Flask is a lightweight and flexible web framework that focuses
                  on simplicity and extensibility. It provides the essentials
                  for building web applications and leaves the choice of
                  additional libraries and tools to the developer. Flask follows
                  a micro-framework approach, allowing developers to build
                  applications with minimal dependencies and customization.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Pyramid</h2>
                <p>
                  Pyramid is a general-purpose web framework that emphasizes
                  flexibility and scalability. It follows a minimalist design
                  philosophy, providing the core components needed for web
                  development while allowing developers to choose and integrate
                  additional features as per their requirements. Pyramid's
                  architecture encourages writing reusable components and
                  supports both small and large-scale applications.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>FastAPI</h2>
                <p>
                  FastAPI is a modern, high-performance web framework that is
                  gaining popularity for building APIs. It combines the ease of
                  use of Flask with the speed and type checking of
                  statically-typed languages. FastAPI leverages Python's type
                  hints and provides automatic validation, serialization, and
                  documentation generation for API endpoints.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Tornado</h2>
                <p>
                  Tornado is a powerful and scalable web framework suitable for
                  handling high-performance requirements, such as real-time
                  applications and asynchronous programming. It is known for its
                  non-blocking I/O and event-driven architecture, making it
                  suitable for building web servers, chat applications, and
                  other highly concurrent systems.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Scikit-learn</h2>
                <p>
                  Scikit-learn is a widely used machine learning library that
                  provides a range of algorithms and tools for data analysis and
                  modeling. It simplifies the process of training and evaluating
                  machine learning models and supports tasks such as
                  classification, regression, clustering, dimensionality
                  reduction, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>TensorFlow</h2>
                <p>
                  TensorFlow is an open-source machine learning framework that
                  focuses on deep learning and neural network-based models. It
                  provides a comprehensive set of tools and APIs for building
                  and training machine learning models, including support for
                  GPU acceleration and distributed computing.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>PyTorch</h2>
                <p>
                  PyTorch is another popular machine learning framework that
                  emphasizes flexibility and dynamic computational graphs. It is
                  widely used in research and production settings for tasks like
                  natural language processing, computer vision, and
                  reinforcement learning. PyTorch offers a Pythonic interface
                  and has gained popularity for its ease of use and extensive
                  community support.
                </p>
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
