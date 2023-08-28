import React from "react";
import Link from "next/link";

const NearshoringServices = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Maximize Cost Efficiency.</h2>
            <h2>  Save Resources with Triosource's Newshore Teams.</h2>
            <p>
            In today's competitive business landscape, optimizing costs is a top priority for organizations. When it comes to tech talent solutions, Triosource offers newshore teams that provide an effective way to save resources without compromising on quality. In this blog, we will explore how Triosource's newshore teams can help maximize cost efficiency and provide significant savings for your organization.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/software-engineer.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="#">Flexible Engagement Models
                  <h3 style={{color: "darkgray"}}>Dedicated resource models</h3></Link>
                </h2>
                <p>Triosource offers flexible engagement models for their newshore teams, such as project-based or dedicated resource models. This flexibility allows you to choose the engagement model that best aligns with your project requirements and budget, ensuring optimal cost efficiency.</p>
                <p style={{marginTop: "50px"}}></p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/offshore.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="#">Efficient Resource Utilization
                  <h3 style={{color: "darkgray"}}>Right resources at the right time</h3></Link>
                </h2>
                <p>With Triosource's newshore teams, you have the advantage of utilizing resources more efficiently. You can scale up or down the team size based on project needs, ensuring that you have the right resources at the right time. This agility in resource allocation helps optimize costs by avoiding unnecessary expenses.</p>
                <p style={{marginTop: "50px"}}></p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/clipboard-list.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="#">Focus on Core Competencies
                  <h3 style={{color: "darkgray"}}>Triosource handles the development work</h3></Link>
                </h2>
                <p>By partnering with Triosource and leveraging their newshore teams, you can focus your internal resources on core competencies. You can allocate your in-house teams to strategic initiatives and mission-critical tasks, while Triosource handles the development work. This focus on core competencies enhances productivity and ensures optimal utilization of resources.</p>
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/software-engineer.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="#">Nearshoring
                  <h3 style={{color: "darkgray"}}>Talent in your time zone</h3></Link>
                </h2>
                <p>Engineers online when you are. On contract, full time, or project based work.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/offshore.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="#">Offshore
                  <h3 style={{color: "darkgray"}}>Talent at scale</h3></Link>
                </h2>
                <p>Build out teams by the hundred. Vetted technology talent and hyper competitive rates.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/clipboard-list.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="#">Onsite
                  <h3 style={{color: "darkgray"}}>Talent at home</h3></Link>
                </h2>
                <p>Let our teams focus on the vetting process while you deliver for your customers</p>
              </div>
            </div>
          </div> */}
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

export default NearshoringServices;
