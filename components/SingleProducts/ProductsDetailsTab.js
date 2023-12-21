import React, { Component } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
export default class ProductsDetailsTab extends Component {
  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
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
      <div className="tab products-details-tab">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <ul className="tabs">
              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "tab1")}
              >
                <div className="dot"></div> 2023-24
              </li>

              <li onClick={(e) => this.openTabSection(e, "tab2")}>
                <div className="dot"></div> 2022-23
              </li>

              <li onClick={(e) => this.openTabSection(e, "tab3")}>
                <div className="dot"></div> 2021-22
              </li>
            </ul>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="tab_content">
              <div id="tab1" className="tabs_item">
                <div className="products-details-tab-content">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="faq-accordion">
                        {/* <Accordion preExpanded={["a"]}> */}
                        <Accordion>
                          <AccordionItem uuid="a">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Annual Report
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="b">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Corporate Announcements
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="c">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>SA Technologies Financials
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="d">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Draft Red Herring Prospectus
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  Sa Technologies DRHP
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      {/* <div className="faq-content">
                <div className="section-title">
                  <span>Ask Question</span>
                  <h2>Frequently Asked Questions?</h2>
                  <p>
                    Veniam quis nostrud exercitation ullamco laboris nist aute
                    irure dolor in reprehenderit in voluptate velit esse nulla
                    pariatur excepteur sint occaecat aboris nisi ut aliquip.
                  </p>
                </div>

                <div className="faq-image">
                  <img src="/images/faq.png" alt="image" />
                </div>
              </div> */}
                      <div className="faq-accordion">
                        <Accordion>
                          <AccordionItem uuid="a">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Share Holding Pattern
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="b">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Shareholder Meeting
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="c">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Corporate Governance
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="d">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Annual Returns
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  Sa Technologies DRHP
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab2" className="tabs_item">
                <div className="products-details-tab-content">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="faq-accordion">
                        {/* <Accordion preExpanded={["a"]}> */}
                        <Accordion>
                          <AccordionItem uuid="a">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Annual Report
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="b">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Corporate Announcements
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="c">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>SA Technologies Financials
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="d">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Draft Red Herring Prospectus
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  Sa Technologies DRHP
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <div className="faq-accordion">
                        <Accordion>
                          <AccordionItem uuid="a">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Share Holding Pattern
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="b">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Shareholder Meeting
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="c">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Corporate Governance
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="d">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Annual Returns
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  Sa Technologies DRHP
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab3" className="tabs_item">
                <div className="products-details-tab-content">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="faq-accordion">
                        {/* <Accordion preExpanded={["a"]}> */}
                        <Accordion>
                          <AccordionItem uuid="a">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Annual Report
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="b">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Corporate Announcements
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="c">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>SA Technologies Financials
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="d">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Draft Red Herring Prospectus
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  Sa Technologies DRHP
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <div className="faq-accordion">
                        <Accordion>
                          <AccordionItem uuid="a">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Share Holding Pattern
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="b">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Shareholder Meeting
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="c">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Corporate Governance
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  2023
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem uuid="d">
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span>Annual Returns
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="investors-details">
                                <div className="article-tags">
                                  Sa Technologies DRHP
                                </div>

                                <div className="article-share">
                                  <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                                    <i class="fa-solid fa-download fa-lg"></i>
                                  </Link>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
