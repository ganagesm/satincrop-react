import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/Live/HeroBanner";
import Services from "../components/Live/Services";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import FunFacts from "../components/Live/FunFacts";
import PartnerContent from "../components/Live/PartnerContent";
import Testimonials from "../components/Live/Testimonials";
import TechSlider from "../components/Live/TechSlider";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import AboutContact from "../components/Live/AboutContent";
import CEOCorner from "../components/Live/CEOCorner";
import Offices from "../components/Live/Offices";
import MainServices from "../components/Live/MainServices";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Link from "next/link";


const Index = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <AboutContact />
      <PartnerContent />
      <Services />
      {/* <MainServices /> */}
      <TechSlider />
      <Offices />
      <CEOCorner />
      <div className="partner-section">
        <div className="container">
          <div className="section-title">
            <h2> News</h2>
            {/* <p>
              Learn more about our work through Blog post and technology specific articles.
            </p> */}
          </div>
          <div className="row justify-content-center">

            <div className="col-lg-12 col-sm-12">
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
                        <Link href="https://www.linkedin.com/pulse/10-key-lessons-ai-teach-your-kids-week-manoj-joshi/">
                          <img src="/images/blog/ultimate-guide-ai-trained-new.jpeg" alt="image" />
                        </Link>
                      </div>

                      <div className="entry-post-content">
                        <div className="entry-meta">
                          <ul>
                            <li>July 24, 2023</li>
                          </ul>
                        </div>

                        <h3>
                          <Link href="https://www.linkedin.com/pulse/10-key-lessons-ai-teach-your-kids-week-manoj-joshi/">
                            10 Key Lessons About AI to Teach Your Kids This Week
                          </Link>
                        </h3>

                        <p>
                          As AI becomes increasingly integrated into our...
                        </p>

                        <Link href="https://www.linkedin.com/pulse/10-key-lessons-ai-teach-your-kids-week-manoj-joshi/" className="learn-more-btn">
                          Read More <i className="flaticon-add"></i>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-blog-post">
                      <div className="entry-thumbnail">
                        <Link href="https://www.linkedin.com/pulse/harnessing-power-generative-ai-healthcare-manoj-joshi/">
                          <img src="/images/blog/how-ai-revolutionizing-nearshore-software.jpeg" alt="image" />
                        </Link>
                      </div>

                      <div className="entry-post-content">
                        <div className="entry-meta">
                          <ul>
                            <li>July 29, 2023</li>
                          </ul>
                        </div>

                        <h3>
                          <Link href="https://www.linkedin.com/pulse/harnessing-power-generative-ai-healthcare-manoj-joshi/">
                            Harnessing the Power of Generative AI in Healthcare
                          </Link>
                        </h3>
                        <p>
                          Generative AI is poised to revolutionize...
                        </p>

                        <Link href="https://www.linkedin.com/pulse/harnessing-power-generative-ai-healthcare-manoj-joshi/" className="learn-more-btn">
                          Read More <i className="flaticon-add"></i>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-blog-post">
                      <div className="entry-thumbnail">
                        <Link href="https://www.linkedin.com/posts/activity-7090762776842809344-M6Dp/">
                          <img src="/images/blog/the-future-software-development.png" alt="image" />
                        </Link>
                      </div>

                      <div className="entry-post-content">
                        <div className="entry-meta">
                          <ul>
                            <li>July 26, 2023</li>
                          </ul>
                        </div>

                        <h3>
                          <Link href="https://www.linkedin.com/posts/activity-7090762776842809344-M6Dp/">
                            Generative AI in Healthcare: A Revolutionary Breakthrough
                          </Link>
                        </h3>
                        <p>
                          Medical professionals are heralding generative..
                        </p>

                        <Link href="https://www.linkedin.com/posts/activity-7090762776842809344-M6Dp/" className="learn-more-btn">
                          Read More <i className="flaticon-add"></i>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-blog-post">
                      <div className="entry-thumbnail">
                        <Link href="https://www.linkedin.com/posts/activity-7090762776842809344-M6Dp/">
                          <img src="/images/blog/the-future-software-development.png" alt="image" />
                        </Link>
                      </div>

                      <div className="entry-post-content">
                        <div className="entry-meta">
                          <ul>
                            <li>July 26, 2023</li>
                          </ul>
                        </div>

                        <h3>
                          <Link href="https://www.linkedin.com/posts/activity-7090762776842809344-M6Dp/">
                            Generative AI in Healthcare: A Revolutionary Breakthrough
                          </Link>
                        </h3>
                        <p>
                          Medical professionals are heralding generative..
                        </p>

                        <Link href="https://www.linkedin.com/posts/activity-7090762776842809344-M6Dp/" className="learn-more-btn">
                          Read More <i className="flaticon-add"></i>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>

        </div>

        {/* <div className="dot-shape1">
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
        </div> */}
      </div>
      <Testimonials />
      <CaseStudiesPost />
      <BlogPostSlider />
      <Footer />

    </>
  )
}
export default Index;