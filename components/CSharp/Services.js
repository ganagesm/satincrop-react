import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>What C# Developers Need to Know?</h2>
            {/* <h4>used for building user interfaces, particularly for web applications</h4> */}
            <p>
            C# developers need to possess a strong understanding of various concepts and skills to effectively develop applications using the C# programming language.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box"  style={{height:"300px"}}>
                <h2>C# Language Fundamentals
                </h2>
                <p>Developers should have a solid grasp of the C# language syntax, including variables and data types, control structures (such as loops and conditionals), functions and methods, classes and objects, and exception handling.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Object-Oriented Programming (OOP)

                </h2>
                <p>C# is an object-oriented programming language, so developers should be familiar with OOP principles such as encapsulation, inheritance, polymorphism, and abstraction. They should understand how to design and implement classes, create objects, and leverage inheritance and interfaces.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{height:"300px"}}>
                <h2> .NET Framework </h2>
                <p>C# is commonly used with the .NET Framework, so developers should have a good understanding of the framework's key concepts and components, including the Common Language Runtime (CLR), the Base Class Library (BCL), and the framework's namespaces and classes.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{height:"300px"}}>
                <h2>Visual Studio IDE
                </h2>
                <p>Visual Studio is the primary integrated development environment (IDE) for C# development. Developers should be proficient in using Visual Studio for tasks such as code editing, debugging, project management, and version control integration.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>ASP.NET and Web Development

                </h2>
                <p>For web development using C#, developers should learn ASP.NET, which is a popular web framework. They should understand concepts like server-side web development, handling HTTP requests and responses, working with databases, and building dynamic web applications.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{height:"300px"}}>
                <h2>
                Database Integration

                </h2>
                <p>C# developers often work with databases to store and retrieve data. Knowledge of SQL and database management systems (such as SQL Server or MySQL) is important. Developers should be able to write database queries, perform CRUD operations, and understand concepts like data modeling and normalization.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{height:"275px"}}>
                <h2>Windows Forms or WPF
                </h2>
                <p>C# can be used to build Windows desktop applications using either Windows Forms or Windows Presentation Foundation (WPF). Developers should be familiar with these frameworks, including UI design, event handling, controls, and data binding.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Software Development Lifecycle
                </h2>
                <p>C# developers should have a good understanding of the software development lifecycle, including requirements analysis, software design principles, version control systems (such as Git), and collaborative development practices.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{height:"275px"}}>
                <h2>Testing and Debugging
                </h2>
                <p>C# developers should be skilled in writing unit tests using frameworks like NUnit or MSTest, as well as debugging code to identify and fix issues. They should know how to use tools and techniques for effective debugging and testing, ensuring the quality and reliability of their code.</p>
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
