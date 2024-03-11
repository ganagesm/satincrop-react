import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="ai-services-area pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>How It Works</h2>
            <p>Consectetur adipiscing elit sed do eiusmod</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-six">
                  <img src="/images/home-six/services/GCC strategy Development.png" alt="icon" />
                </div>
                <h3>
                  <Link href="">Consultation</Link>
                </h3>
                <p>Begin your journey with Triosource by sharing the vision and requirements of your project with us.
                  Our initial consultation is designed to fully understand your needs and how we can align our
                  expertise to meet them. This step ensures that we start on a solid foundation, fully aware
                  of your expectations.</p>

              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-six">
                  <img src="/images/home-six/services/Location Selection.png" alt="icon" />
                </div>
                <h3>
                  <Link href="">Proposal</Link>
                </h3>
                <p>Cupiditate non provident similique sunt in culpa qui officia deserunt mollitia labore et dolore magna
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-six">
                  <img src="/images/home-six/services/talent aciquisition.png" alt="icon" />
                </div>
                <h3>
                  <Link href="">Development</Link>
                </h3>
                <p>Ut enim ad minimupiditate non provident similique sunt in culpa qui officia deserunt aliqua

                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-six">
                  <img src="/images/home-six/services/Infrastructure setup.png" alt="icon" />
                </div>
                <h3>
                  <Link href="">Development</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-six">
                  <img src="/images/home-six/services/operational guidance.png" alt="icon" />
                </div>
                <h3>
                  <Link href="">Delivery</Link>
                </h3>
                <p>Cupiditate non provident similique sunt in culpa qui officia deserunt mollitia labore et dolore magna

                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-six">
                  <img src="/images/home-six/services/Legal Registration Support.png" alt="icon" />
                </div>
                <h3>
                  <Link href="">Development</Link>
                </h3>
                <p>Ut enim ad minimupiditate non provident similique sunt in culpa qui officia deserunt aliqua</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
