import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h3>Azure Consulting Services</h3>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3> Leverage the most flexible cloud computing platform </h3>
              <p>Microsoft Azure is recognized as an ever-expanding platform that is helping organizations to maximize productivity and 
                grow constantly. This platform offers you an opportunity to build, develop and manage applications that cater best to
                your business needs. To get the most out of the Azure platform, getting assistance from reliable Microsoft Azure
                consultants is highly recommended.</p>

              <p>
                Since it is one of the most consistent hybrid cloud platforms, you can intuitively connect data and apps in the 
                cloud and on-premises. This capability of Microsoft Azure helps you to gain maximum value from your existing IT 
                investments. Its suite of services involves analytics, storage, networking and many more. In addition, Azure provides 
                you with robust data storage on a huge scale that defines its limitless potential.
              </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/Microsoft_azure_left.png"
                alt="image"
              />
            </div>
          </div>




         
          <div className="services-details-overview">

          <div className="services-details-image">
              <img
                src="/images/services-details/Microsoft_azure_right.png"
                alt="image"
              />
            </div>

            <div className="services-details-desc mb-30">
              <h3> Why Microsoft Azure for your business?  </h3>
              <p>
                {" "}
                Microsoft Azure helps you integrate and manage your environments with tools and services designed for the
                hybrid Cloud. Microsoft Azure’s competencies, features and functionalities makes it one of the most loved 
                platforms across the globe. It supports many business needs like digital marketing, analytics, and quick recovery. 
                Some of the reasons to choose Azure are: 
              </p>

              <p>
                  <strong>IaaS PaaS Services:</strong>  Microsoft Azure is full of amazing services that are the result of the combination 
                        of IaaS and PaaS. Azure cloud consultants use both IaaS and PaaS to develop an enterprise app on clod to enhance 
                        business growth.{" "}
              </p>

              <p>
                  <strong>Unparallel securities:</strong>    Azure is designed on Security Development Lifecycle that ensures your data 
                  stays safe and secure on the Azure cloud. Azure cloud consultants deliver the security environment to save you from
                   any detrimental outcomes. {" "}
              </p>
              <p>
                  <strong>Analytics and Intelligence Competencies:</strong>   Since Azure is the only platform that offers Blockchain, Machine Learning, Bots, etc., we can rest assured that it has the best analytics and intelligence capabilities. {" "}
              </p>

            </div>

            
          </div>

        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
