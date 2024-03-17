import React from "react";

const AboutContact = () => {
  return (
    <>
      <section className="about-area pt-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img
                  src="https://images.pexels.com/photos/3415148/pexels-photo-3415148.jpeg?auto=compress&cs=tinysrgb&h=840"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ai-about-content">
                <h2>Google benefits to help you thrive</h2>
                <h5 style={{ marginTop: "20px" }}>Start</h5>
                <p>
                  If you’re early in your startup journey and not yet backed
                  with startup equity funding, you can receive up to{" "}
                  <strong>
                    $2,000 USD in credits{" "}
                    <span style={{ color: "red" }}>*</span>
                  </strong>{" "}
                  to use over a year to help your startup get up and running on
                  Google Cloud, along with{" "}
                  <strong>
                    access to technical resources and our global startup
                    community.
                  </strong>
                </p>
                <p>
                  Receive additional Google product benefits to accelerate your
                  startup’s growth—including Google Workspace discounts, Google
                  Domains discount, and more.
                </p>
                <h5 style={{ marginTop: "20px" }}>Scale</h5>
                <p>
                  If you’re backed with startup equity funding, you can get your
                  first year of{" "}
                  <strong>
                    Google Cloud and Firebase usage covered with credits up to
                    $100,000, plus 20% of Google Cloud and Firebase usage costs
                    covered in year two (up to an additional $100,000 in
                    credits).<span style={{ color: "red" }}>*</span>
                  </strong>{" "}
                  Additionally, we’ll connect you with the Google experts,
                  exclusive events, and networks you need to build and grow your
                  business.
                </p>
                <p>
                  Move quickly with guidance from your dedicated Startup Success
                  Manager and Google Cloud engineers. Your startup can scale up
                  on us with expanded access to Google Workspace discounts,
                  Google Maps Platform credits, upskill opportunities, and more.
                </p>
                <h5 style={{ marginTop: "20px" }}>
                  AI and Web3 startup benefits
                </h5>
                <p>
                  <strong>AI-first startups</strong> can take advantage of our
                  open AI ecosystem and tap into the best of Google’s
                  infrastructure, AI products, and foundation models. You can
                  receive up to $350,000 USD in cloud cost coverage, dedicated
                  AI training, webinars, and more. Learn more here.
                </p>
                <p>
                  Web3 projects and startups can focus on innovation over
                  infrastructure while building decentralized apps, Web3
                  tooling, services and more
                </p>
                <ul className="about-list">
                  <li>
                    <span style={{ color: "red" }}>*</span> Please note that the
                    provision of credits is entirely at Google's discretion. We
                    facilitate the application process but cannot guarantee the
                    outcome.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
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
        <div className="shape-img6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default AboutContact;
