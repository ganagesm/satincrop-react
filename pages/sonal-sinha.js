import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/GCC/HeroBanner";
import ContactFormContent from "../components/Common/ContactFormContent";
import Head from 'next/head';
import { Component, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// import Model from "../components/GCC/Model";


const Index = () => {
  return (
    <>
      

      <Navbar />
      <HeroBanner />
    

        <div>
         
          {/* <div className="model-main">
            <div className="profile_model"> */}
          <div className="">
            <div className=""> 
              <div  className="container" style={{maxWidth: "813px",}}>
                  <div className="row">
                    <div className="col-lg-3 col-sm-6">
                      <div className="pro_heading">
                        <img style={{width:"200px",}} src="/images/team/Sonal.png" alt="image"/>
                      </div> 
                    </div>

                    <div className="col-lg-9 col-sm-12">
                      <div className="pro_heading_dtl">
                        <h5>Sonal Sinha</h5>
                          <p>Director HR & Operations</p>
                      </div>
                      <div className="pro_social">
                        <Link className="btn btn-primary cnt_btn" href="mailto:hr@satincorp.com" style={{marginTop:"9%", fontWeight:"700",}}><i class="fa-regular fa-envelope"></i> Connect with Sonal</Link>
                        {/* <Link style={{float: "left", width: "12%",}} href="mailto:hr@satincorp.com"><p><i class="fa-regular fa-envelope"></i></p></Link> */}
                      </div>
                    </div>

                    <div className="pro_content">
                      <p>Sonal Sinha is a highly experienced HR professional with over 10 years of expertise in various aspects of Human Resources and Capacity Building. Her extensive work demographic spans recruiting, employee engagement, HR planning, budgeting, policy development, payroll management, performance appraisal, grievance handling, training, development, compliance management, and CSR management . </p>
                      
                      <p>Her educational background includes a Post Graduate Diploma in Business Management (PGDM) from FIIB and a Diploma in Human Resources Management/Personnel Administration from IMT Ghaziabad.</p>
                      
                      <p>Beyond her professional achievements, Sonal is an avid enthusiast of yoga and meditation, reflecting her dedication to a holistic and balanced lifestyle.  </p>
                    </div>
                      
                  </div>
              </div>
            </div>
          </div> { /*:""}*/}
        </div>



      <div className="partner-section ptb-50">
        <div className="container">
          <div className="section-title">
            <h2>Insights</h2>
          </div>
          <Swiper
            spaceBetween={20}
            autoplay={{
              delay: 900,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay]}
            className="partner-slides"
          >
            <div className="row justify-content-center">
              <SwiperSlide>
                <div className="single-blog-post">
                  <div className="entry-thumbnail">
                    <Link href="/technology-impact-sox-auditing/">
                      <img src="/images/blog/ultimate-guide-ai-trained-new.jpeg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <Link href="#">Admin</Link>
                        </li>
                        <li>July 10, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      <Link href="/blog/technology-impact-sox-auditing/">
                      The Impact of Technology on SOX Internal Auditing Processes

                      </Link>
                    </h3>

                    <p>
                    The integration of technology into Sarbanes-Oxley (SOX) internal auditing processes is a game-changing...
                    </p>

                    <Link href="/blog/technology-impact-sox-auditing/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-blog-post">
                  <div className="entry-thumbnail">
                    {/* <Link href="/blog/sa-technologies-inc-introducing-brand-new-offshore-development-centre-bangalore/">
                      <img src="/images/blog/how-ai-revolutionizing-nearshore-software.jpeg" alt="image" />
                    </Link> */}

                    <Link href="/articles/gcc-evolution/">
                      <img src="/images/blog/how-ai-revolutionizing-nearshore-software.jpeg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <Link href="#">Amit Singh</Link>
                        </li>
                        <li>July 11, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      {/* <Link href="/blog/sa-technologies-inc-introducing-brand-new-offshore-development-centre-bangalore/">
                      Committed to excelling in Digital Engineering and Generative AI
                      </Link> */}

                      <Link href="/articles/gcc-evolution/">
                      GCC Evolution: From IT Support to Tech Innovation Hubs
                      </Link>
                    </h3>
                    <p>
                    Global Capability Centers (GCCs) have been integral to the growth and success of many businesses...
                    </p>

                    {/* <Link href="/blog/sa-technologies-inc-introducing-brand-new-offshore-development-centre-bangalore/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link> */}

                    <Link href="/articles/gcc-evolution/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-blog-post">
                  <div className="entry-thumbnail">
                    <Link href="/blog/navigating-challenges-it-controls-sox-compliance/">
                      <img src="/images/blog/the-future-software-development.png" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <Link href="#">Admin</Link>
                        </li>
                        <li>July 07, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      <Link href="/blog/navigating-challenges-it-controls-sox-compliance/">
                      Navigating the Challenges of IT Controls in SOX Compliance
                      </Link>
                    </h3>
                    <p>
                    Sarbanes-Oxley (SOX) compliance is a critical aspect of maintaining transparent and accurate financial reporting.
                    </p>

                    <Link href="/blog/navigating-challenges-it-controls-sox-compliance/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-blog-post">
                  <div className="entry-thumbnail">
                    <Link href="/blog/robust-sox-framework-best-practices/">
                      <img src="/images/blog/transforming-business-operations.jpeg" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <Link href="#">Admin</Link>
                        </li>
                        <li>July 05, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      <Link href="/blog/robust-sox-framework-best-practices/">
                      Building a Robust SOX Framework: Essential Best Practices
                      </Link>
                    </h3>
                    <p>
                    The Sarbanes-Oxley Act (SOX) was a response to a series of high-profile financial scandals..
                    </p>

                    <Link href="/blog/robust-sox-framework-best-practices/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

            </div>
          </Swiper>
        </div>

        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
      </div>
      {/* <Testimonials /> */}
      <ContactFormContent />
      <Footer />
    </>
  )
}
export default Index;