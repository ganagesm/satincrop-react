import React from "react";
import Link from "next/link";
// import BlogCommentsArea from "./BlogCommentsArea";
import SwiftlyBlogSidebar from "./SwiftlyBlogSidebar";

const BlogDetailsContent = () => {
  return (
    <>
      <section className="blog-details-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details">
                <div className="article-image">
                  <img src="/images/blog/blog-details.jpg" alt="image" />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        14 July, 2023
                      </li>
                      <li>
                        <span>Posted By:</span>
                        <Link href="#">John Anderson</Link>
                      </li>
                    </ul>
                  </div>

                  <h2>Triosource's Successful Near Shoring Services for Swiftly</h2>

                  <h3>Overview</h3>
                  <p>
                    In 2023, Swiftly, a cutting-edge retail technology platform, was in a difficult position. They were struggling to find the right software engineers for their growing roster of projects. Swiftly's checklist was clear: they needed people fluent in English, able to be online during U.S. working hours (any US time zone), and with enough experience to deliver high quality work semi-independently. On top of this, Swiftly needed engineers who were familiar with modern technologies like Kotlin for backends, Kubernetes, and Azure DevOps.
                  </p>

                  <h3>The Triosource Solution</h3>
                  <p>Thanks to its connections in Latin America, Triosource was ready for this challenge. We tapped into our local knowledge and networks to identify the right people for the job. Swiftly wasn’t just looking for tech skills, but professionals with impressive careers. We found software engineers who already had extensive experience working for companies like Uber, PayPal, Salesforce, Goldman Sachs, BBC, Upwork, Chicago Mercantile Exchange, Mercado Libre, and AWS. </p>

                  <p>Triosource’s ability to find professionals who could align their schedules with any U.S. time zone and communicate fluently in English was a big win. It paved the way for smooth operations and effective communication.</p>

                  <h3>Results</h3>
                  <p>It wasn't long before Swiftly saw the benefits of their partnership with Triosource. The software developers sourced from Latin America exceeded their expectations, both in terms of tech skills and industry experience.</p>

                  <p>Even better, these talented engineers cost about 60% less than their U.S. counterparts. This allowed Swiftly to keep their budget low without compromising on the quality of their engineering team.</p>
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="fas fa-bookmark"></i>
                    </span>

                    {/* <Link href="#">Fashion</Link>
                    <Link href="#">Games</Link>
                    <Link href="#">Travel</Link> */}
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Blog Comments Area */}
              {/* <BlogCommentsArea /> */}
            </div>

            <div className="col-lg-4 col-md-12">
              {/* <SwiftlyBlogSidebar /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsContent;
