import React from "react";
import Link from "next/link";

const ComputerVisionAI = () => {
  return (
    <>
      <div className="computer-vision-ai-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-lg-6 col-md-12">
              <div className="computer-vision-ai-image">
                <img
                  src="/images/home-six/computer-vision/computer-vision-ai.png"
                  alt="image"
                />
              </div>
            </div> */}
            <div className="col-lg-12 col-md-12">
              <div className="computer-vision-ai-content">
                <h3
                  style={{
                    width: "75%",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  Key concepts and features of Kubernetes
                </h3>
                {/* <p style={{width:"75%", margin:"0 auto", textAlign:"center", marginBottom:"30px", marginTop:"20px"}}>that supports multiple programming languages, including C#, Visual Basic, and F#. It provides a comprehensive set of tools, libraries, and frameworks for building a variety of software applications.</p> */}

                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-4">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Containers</h4>
                      </div>
                      <p>
                        Kubernetes is built around the concept of containers,
                        which are lightweight, isolated, and portable
                        environments for running applications and their
                        dependencies. Containers package the application code,
                        runtime, libraries, and configuration, providing
                        consistency and easy deployment across different
                        environments.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-4">
                    <div className="vision-ai-inner-card">
                      <div className="">
                        <h4>Cluster Management</h4>
                      </div>
                      <p>
                        Kubernetes manages a cluster of machines called nodes,
                        which host the containerized applications. The cluster
                        consists of one or more master nodes for controlling the
                        cluster and multiple worker nodes that run the
                        containers. Kubernetes automates tasks like scheduling
                        containers on nodes, scaling applications, and managing
                        their lifecycle.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-4">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Pods</h4>
                      </div>
                      <p>
                        {" "}
                        Pods are the basic building blocks in Kubernetes. A pod
                        is a logical unit that encapsulates one or more
                        containers and shared resources, such as network and
                        storage. Containers within a pod share the same network
                        namespace and can communicate with each other using
                        localhost. Pods provide a cohesive environment for
                        running related containers together.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Services and Networking</h4>
                      </div>
                      <p>
                        {" "}
                        Kubernetes provides networking capabilities to route
                        traffic to the containers within pods. Services act as
                        stable network endpoints that expose the containers to
                        other applications or services within or outside the
                        cluster. Kubernetes manages the load balancing and
                        service discovery for efficient communication between
                        pods.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Scalability and Auto-Scaling</h4>
                      </div>
                      <p>
                        {" "}
                        Kubernetes allows applications to scale horizontally by
                        adding or removing instances of containers based on
                        resource utilization and demand. It supports automatic
                        scaling based on defined metrics, ensuring that the
                        application can handle increased traffic or workload
                        without manual intervention.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <div className="vision-ai-inner-card">
                      {/* <div className="content"> */}
                      <div className="">
                        <h4>Declarative Configuration</h4>
                      </div>
                      <p>
                        {" "}
                        Kubernetes uses a declarative approach, where the
                        desired state of the application and its infrastructure
                        is defined in configuration files or through the
                        Kubernetes API. Kubernetes continuously monitors the
                        current state and reconciles it with the desired state,
                        ensuring that the application remains in the desired
                        state even in the face of failures or changes.
                      </p>
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
