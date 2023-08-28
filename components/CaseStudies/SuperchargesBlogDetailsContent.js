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
                  <img src="/images/blog/app-development.jpeg" alt="image" />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        11 July, 2023
                      </li>
                      <li>
                        <span>Posted By:</span>
                        <Link href="#">John Anderson</Link>
                      </li>
                    </ul>
                  </div>

                  <h2>Triosource Supercharges Sharpz's React Native App Development</h2>

                  <h3>Overview</h3>
                  <p>
                    Sharpz is a sports betting social network, with a pre-existing iOS app. Their platform allows users to create an account, link to their online sports-books and the repost their bets with text, photo or video content attached. The app also allows users to friend other users, follow other users, and then like/dislike/share other users posts.
                  </p>
                  <p>Sharpz reached an agreement with Triosource to develop a React Native app based on their current iOS app, giving Sharpz a single code base to manage on both iOS and Android.</p>

                  <h3>Challenge</h3>
                  <p>Under normal circumstances, we could have just developed this React Native app manually, coding each piece from the original Figma designs and engineering specs. But since the release of Generative AI, we’ve realized the need to shift as much of our development work onto AI as we can. Ideally, we would have liked to have Generative AI directly code for us in the IDE, but after trying this, we realized the constraints around memory and the API input length made this approach infeasible.</p>

                  <h3>Solution</h3>
                  <p>We decided to use our tried-and-tested base React Native architecture to kickstart the project. This is done for all projects to save time and ensure that best practices are enforced and followed  from the start.</p>

                  <p>After reviewing the Figma and engineering spec provided by Sharpz, the we created more specific specs for each feature, focusing on the UI first. This helped to structure the work we requested from Generative AI.</p>
                  <p>The ultimate approach we landed on was to have Generative AI generate single files of code that could be incorporated into the broader project one at a time. This still allowed to develop rapidly while also giving us the ability to check that each file or set of files added resulted in the desired outcome. These files would then be connected to other elements of the project as they were developed. Obviously this method does require an engineer, and still requires a moderate amount of manual coding, but dramatically speeds up development.</p>


                  <h3>Outcomes</h3>
                  <p>The results were promising. Generative AI was able to produce React Native code that compiled nearly every time. About 80% of the time this code did require tweaking to actually achieve the desired outcomes, usually around runtime issues related to UI. However, even with the needed modifications, the process led to a significant acceleration in development time.</p>
                  <p>Compared to the original estimates for project completion, Triosource found that using Generative AI led to a 5x speed increase in development time. In particular, when focusing on UI work, we saw an outstanding 16x speed increase.</p>


                  <h3>Conclusion</h3>
                  <p>Triosource's approach to the Sharpz React Native app development illustrates the potential for AI in software development. The use of AI tools like Generative AI can significantly decrease dev times, even when some human input is required. In our personal opinions, we think AI will be generating a significant amount of code over the next 5 years, but most of that code will still need to be human edited.</p>
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
