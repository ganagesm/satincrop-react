import React from "react";
import Link from "next/link";
// import BlogSidebar from "./BlogSidebar";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentChoosingRightAITrainedNearshore from "../../components/Blog/BlogDetailsContentChoosingRightAITrainedNearshore";
import Footer from "../../components/Live/Footer";

const BlogDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Committed to excelling in Digital Engineering and Generative AI"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      {/* <BlogDetailsContentChoosingRightAITrainedNearshore /> */}
      <section className="blog-details-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="blog-details">
                <div className="article-image">
                  <img src="/images/blog/choosingRightAITrainedNearshore-min.png" alt="image" />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        July 05, 2023
                      </li>
                      <li>
                        <span>Posted By:</span>
                        <Link href="#">John Anderson</Link>
                      </li>
                    </ul>
                  </div>

                  <h5>
                  Bangalore, India 
                  </h5>

                  <h3>News Summary</h3>

                  <p>
                  SA Technologies is excited to announce a new milestone – the launch of our Offshore Development Centre in Bangalore!  Committed to excelling in Digital Engineering and Generative AI, This new center is dedicated to transforming our support for our esteemed global customers. </p>
                  <p>Strategically located in the heart of India’s tech capital “Bangalore”, this state-of-the-art facility marks a crucial advancement in our mission to continuously adapt, innovate and lead in the global IT industry.  
Our new Bangalore office will serve as a hub for offshore development and Generative AI, strengthening our capabilities to offer cutting-edge, industry-leading solutions. </p>

<p>Our <b>Vice President of India Operations, Mr. Ritesh Sharma,</b> inaugurated the center amidst our enthusiastic team. On this significant occasion, he emphasized, ‘Bangalore’s rich talent pool and our expanded capabilities in offshore development and Generative AI will be instrumental in driving our continued growth. </p>
<p>The new center promises an immersive environment fostering creativity and professional growth, underscoring our commitment to talent development and technological advancement.  

</p>
<p>Thank you for your continuous support. We look forward to navigating this exciting chapter together. 

</p>
                </div>

                <div className="article-footer">
                  {/* <div className="article-tags">
                    <span>
                      <i className="fas fa-bookmark"></i>
                    </span>

                    <Link href="#">Fashion</Link>
                    <Link href="#">Games</Link>
                    <Link href="#">Travel</Link>
                  </div> */}

                  {/* <div className="article-share">
                    <ul className="social">
                      <li>
                        <a href="https://www.facebook.com/TrioSource/" target="_blank" rel="noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/TrioSource" target="_blank" rel="noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/triosource/" target="_blank" rel="noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>

              {/* Blog Comments Area */}
              {/* <BlogCommentsArea /> */}
            </div>

            {/* <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetails;
