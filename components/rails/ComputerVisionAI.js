import React from "react";
import Link from "next/link";

const ComputerVisionAI = () => {
  return (
    <>
      <div className="computer-vision-ai-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-image">
                <img
                  src="/images/home-six/computer-vision/computer-vision-ai.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="computer-vision-ai-content">
                <h3>
                Rails services
                </h3>
                <p>They serve as a way to extract and isolate business logic from the controllers or models of a Rails application, promoting cleaner code organization, reusability, and testability.</p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Encapsulation of Business Logic</h4>
                      </div>
                        <p>Services help encapsulate complex business logic into separate classes, which improves code organization and maintainability. By isolating specific operations or tasks within services, the responsibilities of controllers and models are kept focused and manageable.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Separation of Concerns</h4>
                      </div>
                      <p>Services facilitate the separation of concerns by keeping the business logic decoupled from the application's controllers and models. This separation helps maintain a clear distinction between responsibilities and promotes a more modular and maintainable codebase.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Single Responsibility Principle (SRP)</h4>
                      </div>
                      <p> The single responsibility principle is a key principle of object-oriented design, and services help enforce it by ensuring that each service class is responsible for a single task or operation. This makes it easier to understand, modify, and test the code.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Flexibility and Extensibility</h4>
                      </div>
                      <p> With services, it becomes easier to introduce changes or modifications to the application's behavior. Services can be modified or extended without affecting other parts of the application, providing flexibility and ease of maintenance.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ComputerVisionAI;
