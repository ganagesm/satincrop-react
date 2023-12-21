import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import ProductsDetailsTab from "../SingleProducts/ProductsDetailsTab";
import FaqForm from "./FaqForm";

const FaqContent = () => {
  return (
    <>
      {/* <section className="faq-area ptb-110">
      </section> */}
      <div className="container faq-area ptb-110">
        <div className="row">
          <ProductsDetailsTab />
        </div>
      </div>

      <section className="faq-area ptb-50 bg-f2f6f9">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="faq-accordion">
                {/* <Accordion preExpanded={["a"]}> */}
                <Accordion>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>News and Event
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
                        <span>Profile of Directors
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
                        <span>Policies
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
                        <span>Red Herring Prospectus
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

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Disclosures
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

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Key Management Professionals
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="investors-details">
                        <div className="article-tags">
                          Key Management Professionals
                        </div>

                        <div className="article-share">
                          <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                            <i class="fa-solid fa-download fa-lg"></i>
                          </Link>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="g">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Offer Documents
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="investors-details">
                        <div className="article-tags">
                          Key Management Professionals
                        </div>

                        <div className="article-share">
                          <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                            <i class="fa-solid fa-download fa-lg"></i>
                          </Link>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="h">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Board Members
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="investors-details">
                        <div className="article-tags">
                          Key Management Professionals
                        </div>

                        <div className="article-share">
                          <Link href="investors/annual-report_2023.pdf" target="_blank" rel="noreferrer" download>
                            <i class="fa-solid fa-download fa-lg"></i>
                          </Link>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="i">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Committees
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="investors-details">
                        <div className="article-tags">
                          Key Management Professionals
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
      </section>


      <div className="container ptb-50">
        <div className="section-title">
          <h2>Investor Contact</h2>
          {/* <p> Our offshore engineers seamlessly integrate into your teams. SA Technologies also forms dedicated engineering teams using a project-based methodology. Our consulting model offers a versatile hybrid approach that aligns with your workflow.</p> */}
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="tab products-details-tab">
              <div className="tab_content">
                <div className="tabs_item">
                  <div className="products-details-tab-content">
                    <ul className="additional-information">
                      <li>
                        <span><h5>Registrar & Transfer Agent:</h5></span>
                      </li>
                      <li>
                        <span>Name:</span> Bigshare Services Pvt. Ltd.
                      </li>
                      <li>
                        <span>Head Office	:</span> 1st Floor, Bharat Tin Works Building, Opp. Vasant Oasis, Makwana Road, Marol, Andheri East, Mumbai 400059, Maharashtra, India
                      </li>
                      <li>
                        <span>Telephone:</span> + 91-22-6263 8200
                      </li>
                      <li>
                        <span>Fax:</span> +91-22-6263 8299
                      </li>
                      <li>
                        <span>E-mail	:</span> investor@bigshareonline.com
                      </li>
                      <li>
                        <span>Website	:</span> www.bigshareonline.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="tab products-details-tab">
              <div className="tab_content">
                <div className="tabs_item">
                  <div className="products-details-tab-content">
                    <ul className="additional-information">
                      <li>
                        <span><h5>Investor’s Contact Person Details:</h5></span>
                      </li>
                      <li>
                        <span>Contact Person	:</span> CS. Binny Porwal
                      </li>
                      <li>
                        <span>Designation	:</span> Company Secretary & Compliance Officer
                      </li>
                      <li>
                        <span>Contact No.:</span> +91 9209401967
                      </li>
                      <li>
                        <span>Email id	:</span> cs@opalforce.com	
                      </li>
                      <li>
                        <span>E-mail	:</span> investors@opalforce.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default FaqContent;
