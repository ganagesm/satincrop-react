import React, { useEffect, useState, Component } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";

const BlogContainer = () => {
  // console.log("id", id);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`https://dev1.satincorp.com/wp-json/wp/v2/posts`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const postsData = await response.json();
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []);
  return (
    <>
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="row">
          {posts.map((post, index) => (
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post" key={index}>
                <div className="entry-thumbnail">
                  <Link href={post.link}>
                    <img src={post.featured_image_url[0]} alt="image" />
                    {/* <div 
                    dangerouslySetInnerHTML={{__html: post.featured_image_url[0]}}
                    /> */}
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">{post.author_info.name}</Link>
                      </li>
                      <li>
                      <strong>Category :</strong> {post.category}
                      </li>
                      <li>{post.date_info}</li>
                    </ul>
                  </div>

                  <h3>
                  <div 
                    dangerouslySetInnerHTML={{__html: post.title.rendered}}
                    />
                  </h3>

                 
                  <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                  
                  {/* <Link  className="learn-more-btn" href={`/blogs/${post.slug}`}> Read More <i className="flaticon-add"></i></Link> */}

                  <Link  className="learn-more-btn" href={`/blogs/${post.id}`}>
                    Read More <i className="flaticon-add"></i></Link>
                </div>
              </div>
            </div>
 ))}
            {/* Pagination */}
            <div className="col-lg-12 col-sm-12">
              {/* <div className="pagination-area">
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
              </div> */}
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
export default BlogContainer;
