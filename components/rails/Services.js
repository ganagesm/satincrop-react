import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>A productive and efficient environment</h2>
            <h4>for building robust and scalable web applications</h4>
            <p>
            Rails, also known as Ruby on Rails or simply RoR, is a popular web application framework written in the Ruby programming language. I
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Rapid Application Development (RAD)
                </h2>
                <p>Rails is designed to promote rapid development by following the principle of "Convention over Configuration." It provides a set of conventions and best practices that make it easy for developers to create applications quickly without having to write repetitive code. Rails automates many common tasks and provides built-in features, allowing developers to focus on the unique aspects of their application.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Model-View-Controller (MVC) Architecture

                </h2>
                <p><strong>Models</strong> Models represent the data and business logic of the application, including database interactions, validations, and associations. <strong>Views</strong>Views are responsible for rendering the user interface and presenting the data to the users. <strong>Controllers</strong>Controllers handle the request/response cycle, process user input, and coordinate the interaction between models and views.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                Database Integration

                </h2>
                <p>Rails provides seamless integration with databases, making it easy to define database schemas, create tables, and perform database operations. Rails uses an Object-Relational Mapping (ORM) layer called ActiveRecord, which abstracts the database interactions and allows developers to work with the database using Ruby code instead of writing SQL queries directly.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Scaffolding and Code Generation
                </h2>
                <p>Rails includes powerful code generation tools that can generate boilerplate code for common tasks such as creating models, views, controllers, and database migrations. This scaffolding feature helps developers get started quickly and reduces the time and effort required to build the initial application structure.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Convention over Configuration

                </h2>
                <p>Rails follows a "convention over configuration" approach, where sensible defaults and naming conventions are used to reduce the need for explicit configuration. By adhering to these conventions, developers can minimize the amount of code they have to write, leading to increased productivity and maintainability.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>
                ActiveRecord

                </h2>
                <p>ActiveRecord is Rails' object-relational mapping (ORM) library, which simplifies database operations by providing an interface to interact with databases using Ruby code. It handles tasks like database queries, data validation, and relationships between database tables, making it easier to work with databases in Rails applications.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Gems and Ecosystem
                </h2>
                <p>Rails has a vast ecosystem of gems (Ruby libraries) that provide additional functionality and extend the capabilities of the framework. These gems cover a wide range of areas, including authentication, authorization, caching, testing, background jobs, and more. The vibrant Rails community actively develops and maintains these gems, making it easy to integrate powerful features into Rails applications.</p>
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
