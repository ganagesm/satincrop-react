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
                  <Link href="/swiftly-case-studies/">
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
                    <Link href="/swiftly-case-studies/">
                      Swiftly's secret nearshore weapon
                    </Link>
                  </h3>
                  <p>
                  In 2023, Swiftly, a cutting-edge retail technology platform, was in a difficult position. They were struggling to find the right software engineers for their growing roster of projects.
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
                  <Link href="/Supercharges-case-studies/">
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
                    <Link href="/Supercharges-case-studies/">
                    Triosource Supercharges Sharpz's React Native App Development
                    </Link>
                  </h3>
                  <p>
                  Sharpz is a sports betting social network, with a pre-existing iOS app. Their platform allows users to create an account, link to their online sports-books.
                  </p>

                  <Link href="/Supercharges-case-studies/" className="learn-more-btn">
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
                  <Link href="/generative-ai-case-studies/">
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
                    <Link href="/generative-ai-case-studies/">
                    Harnessing Generative AI In Custom Development Environments
                    </Link>
                  </h3>
                  <p>
                  Generative Artificial Intelligence (AI) is revolutionizing the way developers create custom solutions. This case study explores the success story of TechGen.
                  </p>

                  <Link href="/generative-ai-case-studies/" className="learn-more-btn">
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
