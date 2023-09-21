import React from "react";
import Link from "next/link";

const BlogPostsSection = () => {
  return (
    <>
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Recent Case Studies</h2>
            <p>
              Learn more about our work through case studies and technology specific articles.
            </p>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/sa-technologies-partner-for-a-world-class-fin-tech-firm/">
                    <img src="/images/blog/blog1.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>June 11, 2023</li>
                    </ul>
                  </div>
                  <h3>
                    <Link href="/sa-technologies-partner-for-a-world-class-fin-tech-firm/">
                      SA Technologies Partner for a world-class Fin-tech firm
                    </Link>
                  </h3>
                  <p>
                  SA Technologies is a IT Company and quality assurance company that has worked with various clients from different industries over the years. 
                  </p>
                  <Link href="/blog-details" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="sa-technologies-partner-for-us-based-water-meter-manufacturing/">
                    <img src="/images/blog/blog2.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>July 11, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="sa-technologies-partner-for-us-based-water-meter-manufacturing/">
                    A US-based Water Meter Manufacturing Giant Achieved a 60%

                    </Link>
                  </h3>
                  <p>
                  The objective of this case study is to highlight how a US-based water meter manufacturing giant achieved a 60% reduction
                  </p>

                  <Link href="case-study-on-sa-technologies-partner-for-a-world-class-fin-tech-firm/" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/performance-testing-enabled-a-top-tier-insurance-company/">
                    <img src="/images/blog/blog3.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>July 12, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/performance-testing-enabled-a-top-tier-insurance-company/">
                    Performance testing has enabled a top-tier insurance company to

                    </Link>
                  </h3>
                  <p>
                  SA Technologies is an IT Company that provides a range of testing services to businesses across industries.
                  </p>

                  <Link href="/performance-testing-enabled-a-top-tier-insurance-company/" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
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
        <div className="shape-img7">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
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

export default BlogPostsSection;
