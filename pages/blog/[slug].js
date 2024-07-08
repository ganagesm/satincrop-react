// pages/blog/[slug].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { ArticleJsonLd } from "next-seo";

import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState({});
  const postApi = "https://dev1.satincorp.com/wp-json/wp/v2/";

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`${postApi}posts?slug=${slug}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
          console.log(post);
        }

        const postData = await response.json();
        setPost(postData[0]); // Assuming slug is unique, so we take the first item from the array
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    }

    if (slug) {
      fetchPost();
      console.log(post);
    }
  }, [slug]);

  if (!post.id) {
    // Handle loading state or error
    return null;
  }

  return (
    <>
      <ArticleJsonLd
        type="BlogPosting"
        url={`https://www.satincorp.com/blog/${post.slug}`}
        title={post.title}
        headline={post.title}
        description={post.description}
        datePublished={post.date_gmt}
        dateModified={post.modified_gmt}
        siteName={post.og_site_name}
        publisherName="SA Technologies"
        publisherLogo="https://www.satincorp.com/images/sa-logo.svg"
        openGraph={{
          type: "article",
          url: `https://www.satincorp.com/blog/${post.slug}`,
          article: {
            publishedTime: post.datePublished,
            author: {
              type: "Organization",
              name: "SA Technologies",
            },
          },
        }}
      />
      <Head>
        <title>{post.yoast_head_json.og_title}</title>
        <meta
          property="og:title"
          content={post.yoast_head_json.description}
          key="title"
        />
        <meta
          name="description"
          content={post.yoast_head_json.description}
          key=""
        />
        <meta
          property="og:image"
          content={post.yoast_head_json.og_image[0].url}
        />
        <link rel="canonical" href={`https://www.satincorp.com/blog/${slug}`} />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle={post.title.rendered}
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
        bgImgClass="item-bg2"
      />
      <section className="blog-details-area blogCustom-style ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="blog-details">
                <div className="article-image">
                  <img src={post.featured_image_url[0]} alt="image" />
                </div>
                <div className="article-content">
                  {/* Render individual blog post content here */}
                  <h1>{post.title.rendered}</h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  />
                </div>
                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="fas fa-bookmark"></i>
                    </span>

                    <Link href="#">{post.category}</Link>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <a
                          href="https://www.facebook.com/satincorp"
                          target="_blank"
                          rel="noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/SatechGlobal"
                          target="_blank"
                          rel="noreferrer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            fill="#212529"
                            viewBox="0 0 512 512">
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/sa-technologies-inc/"
                          target="_blank"
                          rel="noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      {/* <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
