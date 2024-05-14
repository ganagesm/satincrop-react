import React, { Component } from "react";
import Link from "next/link";

export default class PricingPlan extends Component {
  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("animate__fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    document.getElementById(tabNmae).className +=
      " animate__fadeInUp animate__animated";
    evt.currentTarget.className += "current";
  };

  render() {
    return (
      <>
        <div className="pricing-area ptb-110 pt-70">
          <div className="container">
            <div className="section-title">
              <h2>Implementation Methodology</h2>
              <p>
                The SAT BOT offering includes a fully integrated team that is
                prepared for transfer at any moment.
              </p>
            </div>

            <div className="tab pricing-tab pricing-bg-color">
              <div className="tab-content">
                <div className="tabs-item">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="single-pricing-box">
                        <div className="pricing-header">
                          <h3>Build</h3>
                          <div className="price">
                            <span>3-4 months</span>
                          </div>
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <i className="flaticon-tick"></i>Create a new legal
                            entity for the BOT, owned by SAT.
                          </li>
                          <li>
                            <i className="flaticon-tick"></i> Design and develop
                            BOT policies and infrastructure to align with client
                            needs in a way that mirrors traditional GCCs,
                            ensuring thorough cultural integration.
                          </li>
                          <li>
                            <i className="flaticon-tick"></i> Allow clients the
                            option to interview and approve each hire, including
                            setting their compensation levels.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="single-pricing-box active">
                        <div className="pricing-header">
                          <h3>Operate </h3>
                        </div>

                        <div className="price">
                          <span>Terms of contract </span>
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <i className="flaticon-tick"></i> The BOT is a
                            continuation of the client's team, operating in a
                            different location but sharing the same
                            organizational culture.
                          </li>
                          <li>
                            <i className="flaticon-tick"></i> BOT team members
                            report directly to the client and follow the
                            directives of client management.
                          </li>
                          <li>
                            <i className="flaticon-tick"></i> Clients maintain
                            complete control over both employees and
                            intellectual property in the BOT setup.
                          </li>
                          <li>
                            <i className="flaticon-tick"></i> The performance of
                            BOT staff is assessed based on the client’s own
                            standards and benchmarks.
                          </li>
                          <li>
                            <i className="flaticon-tick"></i> SAT offers
                            customized infrastructure, talent acquisition, and
                            support services to effectively manage the BOT
                            model.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                      <div className="single-pricing-box">
                        <div className="pricing-header">
                          <h3>Transfer</h3>
                        </div>

                        <div className="price">
                          <span>{`<1 month>`}</span>
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <i className="flaticon-tick"></i> Transfer the legal
                            entity of the BOT to the client.
                          </li>
                          <li>
                            <i className="flaticon-tick"></i> This transfer of
                            ownership to the client is a one-time event and does
                            not affect employees.
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>There are no fees
                            associated with the transfer.
                          </li>
                        </ul>
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
  }
}
