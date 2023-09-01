import React from "react";
import Link from "next/link";

const NearshoringServices = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Payroll Outsourcing Services</h2>
           
            <p>
            Unlock unparalleled efficiency with SA Technologies' Payroll Outsourcing Services. Drawing from years of expertise, 
            we've crafted a solution that seamlessly streamlines the complex landscape of payroll management. No longer worry about
             intricate calculations, ever-changing regulations, or administrative burdens. We take the helm, ensuring accuracy and
              compliance, allowing you to focus on your core business. With SA Technologies, you're not just outsourcing your 
              payroll, you're upgrading to a smarter, more refined approach.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/software-engineer.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="#">Employee Time & Attendance</Link>
                </h2>
                <p>- Maintain & Track Approved Timesheets</p> 
                <p>- Handling Payroll Queries</p>
                <p style={{marginTop: "50px"}}></p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/offshore.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="#">Statutory Compliance Management</Link>
                </h2>
                <p>- PF & PT Management</p> 
                <p>- Investment Submission & Verification</p>
                <p style={{marginTop: "50px"}}></p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/clipboard-list.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="#">- Investment Submission & Verification</Link>
                </h2>
                <p>- Collect Requisition</p> 
                <p>- Offer Letter Release</p>
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
                  <Link href="#">Payroll Processing</Link>
                </h2>
                <p>- Validation & Verification of Payment Data</p> 
                <p>- Tax & statutory deductions</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/offshore.svg" alt="image" style={{ width: "75%", textAlign: "center",marginTop: "10px" }} />
                </div>
                <h2>
                  <Link href="#">Exit Formalities</Link>
                </h2>
                <p>- No Dues Clearance</p>
                <p>- Full & Final Settlement</p>
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
