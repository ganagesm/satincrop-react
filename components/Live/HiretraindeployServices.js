import React from "react";
import Link from "next/link";

const NearshoringServices = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Next-Gen Staffing: Embracing the HTD Model</h2>
           
            <p>
            The Hire-Train-Deploy model is a cutting-edge approach reshaping the recruitment landscape. 
            Designed to address industry needs swiftly, this strategy focuses on recruiting candidates, 
            equipping them with specific job-related skills, and positioning them seamlessly into the client's 
            operations. When executed effectively, the Hire, Train, and Deploy methodology can yield significant 
            time and cost savings for staffing firms and their clients alike.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/software-engineer.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="#">Hire</Link>
                </h2>
                <p>Aligned with client objectives, SA Technologies meticulously selects candidates, be they apprentices, graduates, or experienced professionals, ensuring a perfect fit for your unique needs.</p>
                <p style={{marginTop: "50px"}}></p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/offshore.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="#">Train</Link>
                </h2>
                <p>At our advanced training center, recruits are mentored by industry leaders to master both essential soft skills and crucial job-specific tasks. Combining top-notch facilities with experienced faculty, we ensure candidates are primed for immediate success and productivity.</p>
                <p style={{marginTop: "50px"}}></p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/clipboard-list.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="#">Deploy</Link>
                </h2>
                <p>We don’t just place candidates; we seamlessly integrate them into our clients' projects, matching their skills perfectly with project requirements, ensuring optimal results from the outset.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/software-engineer.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="#">Support</Link>
                </h2>
                <p>Beyond deployment, SA Technologies offers consistent support to clients and candidates alike, ensuring smooth operations and sustained success throughout the engagement</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/offshore.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="#">Upskilling the Workforce</Link>
                </h2>
                <p>In an ever-evolving digital landscape, agility and forward-thinking are crucial for organizational success. To truly undergo digital transformation, embracing agility is imperative. SA Technologies champions this agile shift, propelling your enterprise into the future with a skilled and adaptable workforce.</p>
              </div>
            </div>

            {/* <div className="col-lg-4 col-sm-6">
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
            </div> */}
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

export default NearshoringServices;
