import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <>
      <div className="widget-area" id="secondary">
        {/* Search form */}
        {/* <div className="widget widget_search">
          <form className="search-form">
            <label>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit" className="search-submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div> */}

        {/* Popular posts */}
        <div className="widget widget_posts_thumb">
          <h3 className="widget-title">Popular posts</h3>

          <article className="item">
            <Link href="blog/ultimate-guide-to-ai-trained-nearshore-software-development/" className="thumb">
              {/* <span className="fullimage cover bg1" role="img"></span>
               */}
              <span className="fullimage">
                <img src="/images/blog/ultimate-guide-ai-trained-new.jpeg" alt="image" />
              </span>
            </Link>
            <div className="info">
              <time>July 10, 2023</time>
              <h4 className="title usmall">
                <Link href="blog/ultimate-guide-to-ai-trained-nearshore-software-development/">
                  Ultimate Guide To AI-Trained Nearshore Software Development
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/blog/how-ai-is-revolutionizing-nearshore-software-development/" className="thumb">
              {/* <span className="fullimage cover bg2" role="img"></span> */}
              <span className="fullimage">
                <img src="/images/blog/how-ai-revolutionizing-nearshore-software.jpeg" alt="image" />
              </span>

            </Link>
            <div className="info">
              <time>July 11, 2023</time>
              <h4 className="title usmall">
                <Link href="/blog/how-ai-is-revolutionizing-nearshore-software-development/">
                  How AI Is Revolutionizing Nearshore Software Development: A Deep Dive
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/blog/future-of-software-development-ai-nearshore-teams/" className="thumb">
              {/* <span className="fullimage cover bg3" role="img"></span> */}
              <span className="fullimage">
                <img src="/images/blog/the-future-software-development.png" alt="image" />
              </span>
            </Link>
            <div className="info">
              <time>July 07, 2023</time>
              <h4 className="title usmall">
                <Link href="/blog/future-of-software-development-ai-nearshore-teams/">
                  The Future Of Software Development: Benefits Of AI-Trained Nearshore Teams
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>
          <article className="item">
            <Link href="/blog/transforming-business-with-ai-nearshore-teams/" className="thumb">
              {/* <span className="fullimage cover bg3" role="img"></span> */}
              <span className="fullimage">
                <img src="/images/blog/transforming-business-operations.jpeg" alt="image" />
              </span>
            </Link>
            <div className="info">
              <time>July 05, 2023</time>
              <h4 className="title usmall">
                <Link href="/blog/transforming-business-with-ai-nearshore-teams/">
                  Transforming Business Operations With AI-Trained Nearshore Software Development Teams
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>
          <article className="item">
            <Link href="/blog/choosing-ai-trained-nearshore-software-team/" className="thumb">
              {/* <span className="fullimage cover bg3" role="img"></span> */}
              <span className="fullimage">
                <img src="/images/blog/choosing-right-ai-trained-nearshore-min.jpeg" alt="image" />
              </span>
            </Link>
            <div className="info">
              <time>July 05, 2023</time>
              <h4 className="title usmall">
                <Link href="/blog/choosing-ai-trained-nearshore-software-team/">
                  Choosing The Right AI-Trained Nearshore Software Development Team: A Comprehensive Guide
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>
        </div>

        {/* Recent posts */}
        <div className="widget widget_recent_entries">
          <h3 className="widget-title">Recent Case Studies</h3>

          <ul>
            <li>
              <Link href="/swiftly-case-studies">
              Triosource's Successful Near Shoring Services For Swiftly
              </Link>
              <span className="post-date">July 14, 2023</span>
            </li>
            <li>
              <Link href="/Supercharges-case-studies/">
              Triosource Supercharges Sharpz's React Native App Development
              </Link>
              <span className="post-date">July 11, 2023</span>
            </li>
            <li>
              <Link href="/generative-ai-case-studies/">
              Harnessing Generative AI In Custom Development Environments
              </Link>
              <span className="post-date">July 12, 2023</span>
            </li>
            {/* <li>
              <Link href="/blog-details">
                Business debit Fees to increase in 2020
              </Link>
              <span className="post-date">March 18, 2020</span>
            </li>
            <li>
              <Link href="/blog-details">
                10 tips to reduce your card processing costs
              </Link>
              <span className="post-date">March 19, 2020</span>
            </li> */}
          </ul>
        </div>

        {/* Categories */}
        {/* <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link href="#">Business</Link>
            </li>
            <li>
              <Link href="#">Privacy</Link>
            </li>
            <li>
              <Link href="#">Technology</Link>
            </li>
            <li>
              <Link href="#">Tips</Link>
            </li>
            <li>
              <Link href="#">Uncategorized</Link>
            </li>
          </ul>
        </div> */}

        {/* Tags */}
        {/* <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            <a href="#">
              IT <span className="tag-link-count">(3)</span>
            </a>

            <a href="#">
              React <span className="tag-link-count">(3)</span>
            </a>

            <a href="#">
              Games <span className="tag-link-count">(2)</span>
            </a>

            <a href="#">
              Development <span className="tag-link-count">(2)</span>
            </a>

            <a href="#">
              Design <span className="tag-link-count">(1)</span>
            </a>

            <a href="#">
              Apps <span className="tag-link-count">(1)</span>
            </a>

            <a href="#">
              Marketing <span className="tag-link-count">(1)</span>
            </a>

            <a href="#">
              Tips <span className="tag-link-count">(2)</span>
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default BlogSidebar;
