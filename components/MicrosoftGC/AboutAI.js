import React from "react";
import Link from "next/link";

const AboutAI = () => {
  return (
    <>
      <div className="ai-about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div style={{ textAlign: "center", }}>
              <h3>Unlock the full potential of your business with GCP’s advanced cloud solutions.</h3>
              <p>Unlock the full potential of your business with GCP’s advanced cloud solutions.</p>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="ai-about-image">
                <img src="/images/home-six/google-cloud-services.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="ai-about-content">
                <p>Here are some of the qualities that set GCP apart from other cloud platforms:</p>
                 <ul className="about-list" style={{ maxWidth: "100%", }}>
                  <li>
                    <i className="fa-solid fa-check"></i> <b>Pre-trained models:</b> GCP offers a wide range of pre-trained ML models that can be used for a variety of tasks, such as image recognition, natural language processing, and translation. This can save businesses a lot of time and effort, as they do not need to train their own models from scratch.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <b>AI Platform:</b> GCP's AI Platform is a suite of tools and services that makes it easy to develop, train, and deploy ML models. AI Platform includes services such as Vertex AI, which provides a unified interface for managing ML workflows, and AutoML, which automates many of the tasks involved in ML development.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <b>Scalability:</b> GCP is a highly scalable platform, which means that it can easily handle large and complex ML workloads. This is important for businesses that need to train and deploy ML models on a large scale.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <b>Security:</b> GCP offers a comprehensive set of security features for AI and ML workloads. This includes features such as encryption, access control, and auditing.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> <b>Compliance:</b> GCP is certified for a wide range of compliance standards, including HIPAA, PCI DSS, and SOC 2. This makes it a good choice for businesses that need to comply with industry regulations.
                  </li>
                </ul>
                {/* <div className="row">
                  <p>Here are some of the qualities that set GCP apart from other cloud platforms:</p>
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div style={{margin: '20px 0'}}>
                      <h5>
                        Pre-trained models
                      </h5>
                      <p>GCP offers a wide range of pre-trained ML models that can be used for a variety of tasks, such as image recognition, natural language processing, and translation. This can save businesses a lot of time and effort, as they do not need to train their own models from scratch.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div style={{margin: '20px 0'}}>
                      <h5>  AI Platform </h5>
                      <p>
                        GCP's AI Platform is a suite of tools and services that makes it easy to develop, train, and deploy ML models. AI Platform includes services such as Vertex AI, which provides a unified interface for managing ML workflows, and AutoML, which automates many of the tasks involved in ML development.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div style={{margin: '20px 0'}}>
                      <h5>  Scalability </h5>
                      <p>
                        GCP is a highly scalable platform, which means that it can easily handle large and complex ML workloads. This is important for businesses that need to train and deploy ML models on a large scale.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div style={{margin: '20px 0'}}>
                      <h5>  Security </h5>
                      <p>
                        GCP is a highly scalable platform, which means that it can easily handle large and complex ML workloads. This is important for businesses that need to train and deploy ML models on a large scale.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div style={{margin: '20px 0'}}>
                      <h5>  Compliance </h5>
                      <p>
                        GCP is certified for a wide range of compliance standards, including HIPAA, PCI DSS, and SOC 2. This makes it a good choice for businesses that need to comply with industry regulations.
                      </p>
                    </div>
                  </div>
                </div> */}
                <p style={{fontSize: '15px', marginTop: '20px'}}>With GCP, you can reduce costs, improve productivity, and accelerate your organization’s growth. Plus, with $500 in free credits, you can explore GCP’s features and see the impact on your business firsthand.</p>
                <p style={{fontSize: '15px'}}><a href="#" style={{color: 'red'}}>Sign Up</a> Claim your $500 free credit today and transform your small or mid-sized
                  organization with Google Cloud Platform. Sign up now!</p>
                {/* <div className="about-btn">
                  <Link href="/about-2" className="btn btn-primary">
                    Learn More
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAI;
