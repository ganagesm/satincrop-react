import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Why Google cloud</h3>
              <p><a href="/blog/google-cloud-v-s-aws/" className="interlink">Google Cloud</a> offers a comprehensive suite of cloud computing services that can help you digitally transform 
                your business. With Google Cloud, you can access the latest AI innovations, get insights from your data, and 
                build secure and scalable applications.</p>
              <p><b>Data insights that speed innovation:</b> Google Cloud's data analytics tools can help you make sense of your data and identify new opportunities.</p>
             
              <p><b>Infrastructure that's designed to meet industry needs:</b>  Google Cloud's infrastructure is scalable and reliable, so you can be confident that your applications will be up and running when you need them.</p>
             
              <p><b>Collaboration tools that help teams do their best work:</b>  Google Cloud's collaboration tools make it easy for teams to work together, regardless of their location.</p>

              <p><b>Security that can proactively stop threats:</b>  Google Cloud's security features are designed to protect your data from unauthorized access.</p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/google-service.jpg"
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
