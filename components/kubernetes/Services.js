import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>
              Kubernetes developers need to possess a strong understanding of
              various concepts{" "}
            </h2>
            {/* <h4>for building robust and scalable web applications</h4> */}
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Containerization Concepts</h2>
                <p>
                  Kubernetes developers should have a solid understanding of
                  containerization concepts, including how containers work,
                  container images, container registries, and container
                  orchestration. Knowledge of containerization technologies like
                  Docker is essential.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Kubernetes Architecture</h2>
                <p>
                  Developers need to understand the architecture and components
                  of Kubernetes, including the control plane (master nodes),
                  worker nodes, etcd (key-value store), API server, scheduler,
                  and controller manager. Familiarity with Kubernetes cluster
                  setup, configuration, and networking is crucial.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Kubernetes API and CLI:</h2>
                <p>
                  Proficiency in using the Kubernetes API and command-line
                  interface (CLI) is essential for managing and interacting with
                  Kubernetes clusters. Developers should know how to create,
                  update, and delete Kubernetes resources using the API and CLI
                  commands.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Kubernetes Objects</h2>
                <p>
                  {" "}
                  Kubernetes revolves around various objects that define the
                  desired state of the system. Developers should be familiar
                  with Kubernetes objects like Pods, Deployments, Services,
                  ConfigMaps, Secrets, and Ingress. Understanding how to create,
                  configure, and manage these objects is important.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Deployment and Scaling</h2>
                <p>
                  Knowledge of deploying applications on Kubernetes using
                  Deployments, StatefulSets, or DaemonSets is crucial.
                  Developers should understand scaling strategies, both manual
                  and automated, and be able to configure horizontal pod
                  autoscaling (HPA) based on resource utilization or custom
                  metrics.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Service Discovery and Load Balancing</h2>
                <p>
                  Developers need to understand how to expose applications
                  within a Kubernetes cluster using Services, including cluster
                  IP, NodePort, and LoadBalancer types. Knowledge of service
                  discovery mechanisms, such as DNS-based service discovery and
                  Ingress controllers, is important for routing traffic.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Configuration and Secrets Management</h2>
                <p>
                  Developers should know how to manage application
                  configurations using ConfigMaps and how to handle sensitive
                  information like credentials and API keys using Secrets.
                  Understanding how to mount and consume these configurations
                  and secrets within containers is essential.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Monitoring and Logging</h2>
                <p>
                  Familiarity with monitoring and logging tools and practices in
                  the Kubernetes ecosystem is crucial. Developers should know
                  how to integrate applications with monitoring solutions like
                  Prometheus and Grafana and how to access container logs using
                  tools like Fluentd or the Kubernetes API.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h2>Security and RBAC</h2>
                <p>
                  Knowledge of Kubernetes security practices is vital.
                  Developers should understand role-based access control (RBAC)
                  and how to configure user roles, service accounts, and access
                  controls to ensure secure access to resources within the
                  cluster.
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
