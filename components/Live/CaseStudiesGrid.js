import React, { Component } from "react";
import Link from "next/link";

const CaseStudiesGrid = () => {
  return (
    <>
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>See how Triosource is helping teams.</h2>
            <h2> get organized and work smarter</h2>
            {/* <p>
              Our outsourced engineers can plug directly into your teams. Triosource also creates dedicated teams of engineers with a project based approach. Our consulting approach allows for a hybrid. We can work however you work.
            </p> */}
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/swiftly-case-studies/">
                    <img src="/images/blog/blog1.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>July 14, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/swiftly-case-studies/">
                      Triosource's Successful Near Shoring Services for Swiftly
                    </Link>
                  </h3>

                  <p>
                    In 2023, Swiftly, a cutting-edge retail technology platform, was in a difficult position. They were struggling to find the right software engineers for their growing roster of projects....
                  </p>

                  <Link href="/swiftly-case-studies/" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
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
                    Sharpz is a sports betting social network, with a pre-existing iOS app. Their platform allows users to create an account, link to their online sports-books and the repost their bets with text, photo or video...
                  </p>

                  <Link href="/Supercharges-case-studies/" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
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
                      Harnessing Generative AI in Custom Development Environments
                    </Link>
                  </h3>
                  <p>
                    Generative Artificial Intelligence (AI) is revolutionizing the way developers create custom solutions. This case study explores the success story of TechGen, a software development company....
                  </p>

                  <Link href="/generative-ai-case-studies/" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/case-studies-details">
                    <img src="/images/blog/blog4.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>March 13, 2020</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/case-studies-details">
                      Add And Show Image With Size From Elementor Widget
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="/case-studies-details" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/case-studies-details">
                    <img src="/images/blog/blog5.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>March 14, 2020</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/case-studies-details">
                      How To The Active Menu Based On URL In Next.JS?
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="/case-studies-details" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/case-studies-details">
                    <img src="/images/blog/blog6.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>March 14, 2020</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/case-studies-details">
                      Instagram Feed Add To Your WordPress Site
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="/case-studies-details" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div> */}

            {/* Pagination */}
            {/* <div className="col-lg-12 col-sm-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>

                <a href="#" className="page-numbers">
                  1
                </a>

                <a href="#" className="page-numbers current">
                  2
                </a>

                <a href="#" className="page-numbers">
                  3
                </a>

                <a href="#" className="page-numbers">
                  4
                </a>

                <a href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
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
export default CaseStudiesGrid;
