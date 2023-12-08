
import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import WhyChooseSAT from "../components/GCCTalentAcquisition/WhyChooseSAT";
import Services from "../components/GCCTalentAcquisition/Services";
import HeroBanner from "../components/GCCTalentAcquisition/HeroBanner";
import TechDetailsContent from "../components/GCCTalentAcquisition/TechDetailsContent";
import FunFacts from "../components/Live/FunFacts";
import OurIndustry from "../components/Common/OurIndustry";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import ContactFormContent from "../components/Common/ContactFormContent";
import Head from 'next/head';
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Index = () => {
  return (
    <>
      <Head>
        <title>GCC Talent Acquisition - Your Gateway to a World-Class Workforce</title>
        <meta property="og:title" content="GCC Talent Acquisition - Your Gateway to a World-Class Workforce" key="title" />
        <meta name="description" content="Experience the future of AI-driven creativity and automation. SA Technologies offers secure Generative AI solutions for transformative outcomes." key="description" />
      </Head>


      <Navbar />
      <HeroBanner />
      <TechDetailsContent />
      <WhyChooseSAT />
      {/* <OurIndustry /> */}
      
      <section className="services-area pb-110">
        <div className="container">
          <div className="section-title">
            <h2>Meet our GCC Team</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className=" single-team-box">
                <div className="image">
                  <img src="/images/team/abhay.jpg" alt="Abhay Bhan" />
                </div>
                <div className="content">
                  <Link href="/abhay/" >
                    <h5 style={{ marginTop: "15px", marginBottom: "0", }}>Abhay Bhan</h5>
                    <p>Director Client Engagement <br /> (Europe)</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/Sonal.png" alt="Sonal Sinha" />
                </div>
                <div className="content">
                  <Link href="/sonal-sinha/" >
                    <h5 style={{ marginTop: "15px", marginBottom: "0", }}>Sonal Sinha</h5>
                    <p>Director HR & Operations <br /><br /></p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/sudha.jpg" alt="Vasudha Kanade" />
                </div>
                <div className="content">
                  <Link href="/vasudha-kanade/" >
                    <h5 style={{ marginTop: "15px", marginBottom: "0", }}>Vasudha Kanade</h5>
                    <p>Director Finance & Compliance <br /><br /></p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/amita.jpg" alt="Amita Bhosale" />
                </div>
                <div className="content">
                  <Link href="/amita/" >
                    <h5 style={{ marginTop: "15px", marginBottom: "0", }}>Amita Bhosale</h5>
                    <p>Director Client Engagement <br /> (North America) </p>
                  </Link>
                </div>
              </div>
            </div>

          </div>
          <div className="row" style={{ marginTop: "20px", }}>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/Malay.png" alt="Malay Soni" />
                </div>
                <div className="content">
                  <Link href="/malay/" >
                    <h5 style={{ marginTop: "15px", marginBottom: "0", }}>Malay Soni</h5>
                    <p>Director Talent Acquisition</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/Jitendra.png" alt="Jitendra Khairnar" />
                </div>
                <div className="content">
                  <Link href="/jitendra/" >
                    <h5 style={{ marginTop: "15px", marginBottom: "0", }}>Jitendra Khairnar</h5>
                    <p>Head Workspace & Infrastructure</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/Trishita.png" alt="Trishita Bhattacharya" />
                </div>
                <div className="content">
                  <Link href="/trishita/">
                    <h5 style={{ marginTop: "15px", marginBottom: "0", }}>Trishita Bhattacharya</h5>
                    <p>Head Client Engagement (APAC)</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img src="/images/team/kanak-02.png" alt="Kanak Sahoo" />
                </div>
                <div className="content">
                  <Link href="/kanak/">
                    <h5 style={{ marginTop: "15px", marginBottom: "0", }}>Kanak Sahoo</h5>
                    <p>Marketing Manager</p>
                  </Link>
                </div>
              </div>
            </div>



          </div>

        </div>

        <div className="GCCJourney">
          <div className="container">
            <div className="row ptb-100 align-items-center">
              <div className="col-lg-6 col-md-6">
                <h2 className="align-items-center"
                  style={{
                    textAlign: "right",
                  }}
                >Ready to Begin Your GCC Journey?</h2>
              </div>
              <div className="col-lg-5 col-md-5"
                style={{
                  textAlign: "left",
                }}
              >
                <Link href="/contact-us/" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>

            </div>
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
                    <Link href="/The-Rise-of-GCC-in-India-Harnessing-the-Talent-rich-Landscape-for-Unparalleled-Benefits/">
                      <img style={{ width: "419px", height: "279px", }} src="/images/blog/amita-blog.png" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <Link href="#">Amita Bhosale</Link>
                        </li>
                        <li>August 23, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      <Link href="/blog/The-Rise-of-GCC-in-India-Harnessing-the-Talent-rich-Landscape-for-Unparalleled-Benefits/">
                        The Rise of GCC in India: Harnessing the Talent-rich Landscape for Unparalleled Benefits

                      </Link>
                    </h3>

                    <p>
                      In the digital age, Global Capability Centers (GCCs) are ...
                    </p>

                    <Link href="/blog/The-Rise-of-GCC-in-India-Harnessing-the-Talent-rich-Landscape-for-Unparalleled-Benefits/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-blog-post">
                  <div className="entry-thumbnail">
                    <Link href="/how-gccs-can-attain-outstanding-results/">
                      <img style={{ width: "419px", height: "279px", }} src="/images/blog/abhay_article.png" alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <Link href="#">Abhay Bhan</Link>
                        </li>
                        <li>August 10, 2023</li>
                      </ul>
                    </div>

                    <h3>
                      <Link href="/blog/how-gccs-can-attain-outstanding-results/">
                        How GCCs Can Attain Outstanding Results

                      </Link>
                    </h3>

                    <p>
                      In the ever-evolving landscape of business, organizations are continually seeking ways to enhance ...
                    </p>

                    <Link href="/blog/how-gccs-can-attain-outstanding-results/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>


              {/* <SwiperSlide>
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
              </SwiperSlide> */}
              
              <SwiperSlide>
                <div className="single-blog-post">
                  <div className="entry-thumbnail">
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

                      <Link href="/articles/gcc-evolution/">
                        GCC Evolution: From IT Support to Tech Innovation Hubs
                      </Link>
                    </h3>
                    <p>
                      Global Capability Centers (GCCs) have been integral to the growth and success of many businesses...
                    </p>
                    <Link href="/articles/gcc-evolution/" className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide>
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
              </SwiperSlide>*/}

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

      <ContactFormContent />
      {/* <CaseStudiesPost /> */}
      <Footer />
    </>
  )
}
export default Index;