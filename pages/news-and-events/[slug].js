// pages/blog/[slug].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Live/Footer";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`https://dev1.satincorp.com/wp-json/wp/v2/posts?slug=${slug}`);
        // const response = await fetch(`https://dev1.satincorp.com/wp-json/wp/v2/posts?categories=130&page=${currentPage}&per_page=${pageSize}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const postData = await response.json();
        setPost(postData[0]); // Assuming slug is unique, so we take the first item from the array
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    }

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (!post.id) {
    // Handle loading state or error
    return null;
  }

  return (
    <>

      <Navbar />

      <PageBanner
        pageTitle={post.title.rendered}
        homePageUrl="/"
        homePageText="Home"
        activePageText="News and Events"
        bgImgClass="item-bg2"
      />

      <section className="blog-details-area ptb-110">
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
                  <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </div>
                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="fas fa-bookmark"></i>
                    </span>

                    <Link href="#">{post.category}</Link>
                    <Link href="#">Games</Link>
                    <Link href="#">Travel</Link>
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
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
