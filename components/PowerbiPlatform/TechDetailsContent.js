import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h3>Power BI Consulting Services</h3>
          </div>
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Stay ahead of trends with Power BI  </h3>
              <p>With the ever-changing marketing demands and technical advancements, it has become essential to frequently monitor your business. Power BI Consulting services help organizations to do just that. This Business Analytics service by Microsoft is simple, user-friendly and reliable.</p>

              <p>
              Microsoft Power BI is one of the most powerful data visualization software. It empowers the organizations with their tools and help the users to transform their raw data into valuable information. The business intelligence capabilities allow the technical as well as nontechnical users to build visually stunning dashboards. Its versatility makes Power BI solution a success-driven avenue that brings transparency and elasticity in the processes entral. 
              </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/Powerbi.png"
                alt="image"
              />
            </div>
          </div>




         
          <div className="services-details-overview">

          <div className="services-details-image">
              <img
                src="/images/services-details/Powerbi-left.png"
                alt="image"
              />
            </div>

            <div className="services-details-desc mb-30">
              <h3> Why choose Power BI for your business?  </h3>
              <p>
                {" "}
                Over years Power BI has proved to be an extremely reliable business intelligence platform that excels in transforming your raw data into meaningful information. No matter what your enterprise size is, this platform has different versions that suit well for all your business needs. They are named as – Power BI Desktop, Power BI Pro and Power BI Premium. 
              </p>

              <p><strong>Benefits Power BI Offer to your business: </strong></p>

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
