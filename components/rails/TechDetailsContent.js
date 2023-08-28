import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>What is Rails? </h3>
              <p>
                Rails, also known as Ruby on Rails or simply RoR, is a popular web application framework written in the Ruby programming language. It provides a productive and efficient environment for building robust and scalable web applications. </p>
              <h3>What are rails Services?</h3>
              <p>In the context of Ruby on Rails (Rails) applications, Rails services typically refer to a design pattern or architectural approach rather than a specific built-in feature or component provided by Rails itself. The Rails services pattern is used to encapsulate complex business logic and promote separation of concerns within the application.</p>
              <p>Rails services are implemented as plain Ruby classes that encapsulate specific functionality or a set of related operations. They serve as a way to extract and isolate business logic from the controllers or models of a Rails application, promoting cleaner code organization, reusability, and testability.</p>

            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/service-details1.jpg"
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
