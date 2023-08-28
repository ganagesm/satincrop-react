import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-50">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3> Cloud Infrastructure Services: </h3>
              <p> At TrioSource, we specialize in providing top-notch cloud infrastructure services that propel your business toward success in the digital age. With the perfect blend of AI assistance and our expert teams, we deliver reliable, secure, and scalable cloud solutions that revolutionize the way you operate.  </p>

              <ul>
                <li> <strong> Cloud Strategy and Consultation: </strong>
                  Our seasoned consultants work closely with you to develop a tailored cloud strategy that aligns with your business objectives. We help you identify the right cloud solutions for your unique needs.
                </li>
                <li>
                  <strong>Cloud Migration Services: </strong> Migrate seamlessly to the cloud with our expertise. We ensure a smooth and secure transition, minimizing downtime and maximizing efficiency.
                </li>
                <li>
                  <strong>Cloud Deployment and Management: </strong> Our team handles the deployment and management of your cloud infrastructure, providing ongoing support and optimization to ensure peak performance.
                </li>
                <li>
                  <strong>Cloud Security Solutions: </strong> With robust security measures and best practices, we safeguard your data and applications on the cloud, protecting you from potential threats.
                </li>
                <li>
                  <strong>Disaster Recovery and Backup: </strong> Prepare for the unexpected with our disaster recovery and backup solutions, ensuring your data remains safe and recoverable in any situation.
                </li>
                <li>
                  <strong>Cloud Managed Services: </strong> Experience cloud excellence with our managed services. We handle monitoring, optimization, and support for your cloud infrastructure, ensuring top-notch performance. Devote your energy to innovation while we manage the technical intricacies.
                </li>
              </ul>
              <p></p>
              <Link href="/contact/" className="btn btn-primary mt-20">
                Know More
              </Link>
            </div>

            <div className="services-details-image">
              <img
                src="/images/banners/Big_Data_Analytics_in_Cloud_Computing.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>All Types of Cloud Computing Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">

                <h3>
                  Infrastructure as a Service (IaaS)
                </h3>
                <p>
                  Leverage our IaaS offerings to access virtualized computing resources such as servers, storage, and networking.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h3>
                  Platform as a Service (PaaS)
                </h3>
                <p>
                  Build, deploy, and manage applications with ease using our PaaS solutions, enabling you to focus on innovation rather than infrastructure management.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h3>
                  Software as a Service (SaaS)
                </h3>
                <p>
                  Access our ready-to-use applications and software on the cloud, eliminating the need for installation and maintenance. </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <h3>
                  Private Cloud
                </h3>
                <p>
                  Enjoy the benefits of a private, secure, and dedicated cloud environment tailored to your organization's needs.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box" style={{height:"175px"}}>
                <h3>
                  Hybrid Cloud
                </h3>
                <p>
                  Combine the advantages of public and private clouds, ensuring a flexible and efficient cloud infrastructure.
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
      <div className="main-services-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Expertise in Top Cloud Technologies </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
               
                <h3>
                AWS (Amazon Web Services) 
                </h3>
                <p>
                AWS is a leading cloud computing platform that offers a vast array of scalable and flexible services, such as computing power, storage, and databases. It empowers businesses to build, deploy, and manage applications and services efficiently, providing global reach and high availability. 
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                
                <h3>
                Google Cloud 
                </h3>
                <p>
                Google Cloud is a comprehensive suite of cloud computing services provided by Google. It includes various solutions like cloud storage, machine learning, data analytics, and application development tools. Google Cloud's focus on innovation and cutting-edge technology sets it apart in the cloud industry. 
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-main-services-box">
                <h3>
                Azure (Microsoft Azure) 
                </h3>
                <p>
                Azure is Microsoft's cloud computing platform, providing a wide range of services to support building, deploying, and managing applications through Microsoft's global network of data centers. It offers hybrid capabilities, making it easy for businesses to integrate on-premises systems with cloud solutions. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
