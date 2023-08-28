import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3> What is Kubernetes ?</h3>
              <p>
                {" "}
                Kubernetes is an open-source container orchestration platform
                developed by Google. It automates the deployment, scaling, and
                management of containerized applications across a cluster of
                machines. Kubernetes is designed to facilitate the management of
                containerized workloads, ensuring efficient utilization of
                resources and providing mechanisms for maintaining application
                availability and scalability.
              </p>

              <p>
                Kubernetes developers need to possess a strong understanding of
                various concepts and skills to effectively develop and manage
                applications on Kubernetes.{" "}
              </p>
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
