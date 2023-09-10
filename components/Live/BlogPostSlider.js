// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
// import Link from "next/link";

// const BlogPostSlider = () => {
//   return (
//     <>
//       <div className="partner-section ptb-50">
//         <div className="container">
//           <div className="section-title">
//             <h2>Our Latest Blogs</h2>
//             <p>
//               Learn more about our work through Blog post and technology specific articles.
//             </p>
//           </div>
//           <Swiper
//             spaceBetween={20}
//             autoplay={{
//               delay: 900,
//               disableOnInteraction: true,
//               pauseOnMouseEnter: true,
//             }}
//             breakpoints={{
//               0: {
//                 slidesPerView: 2,
//               },
//               576: {
//                 slidesPerView: 2,
//               },
//               768: {
//                 slidesPerView: 3,
//               },
//               1200: {
//                 slidesPerView: 3,
//               },
//             }}
//             modules={[Autoplay]}
//             className="partner-slides"
//           >
//             <div className="row justify-content-center">
//               <SwiperSlide>
//                 <div className="single-blog-post">
//                   <div className="entry-thumbnail">
//                     <Link href="/technology-impact-sox-auditing/">
//                       <img src="/images/blog/ultimate-guide-ai-trained-new.jpeg" alt="image" />
//                     </Link>
//                   </div>

//                   <div className="entry-post-content">
//                     <div className="entry-meta">
//                       <ul>
//                         <li>
//                           <Link href="#">Admin</Link>
//                         </li>
//                         <li>July 10, 2023</li>
//                       </ul>
//                     </div>

//                     <h3>
//                       <Link href="/blog/technology-impact-sox-auditing/">
//                       The Impact of Technology on SOX Internal Auditing Processes

//                       </Link>
//                     </h3>

//                     <p>
//                     The integration of technology into Sarbanes-Oxley (SOX) internal auditing processes is a game-changing...
//                     </p>

//                     <Link href="/blog/technology-impact-sox-auditing/" className="learn-more-btn">
//                       Read More <i className="flaticon-add"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="single-blog-post">
//                   <div className="entry-thumbnail">
//                     {/* <Link href="/blog/sa-technologies-inc-introducing-brand-new-offshore-development-centre-bangalore/">
//                       <img src="/images/blog/how-ai-revolutionizing-nearshore-software.jpeg" alt="image" />
//                     </Link> */}

//                     <Link href="/articles/gcc-evolution/">
//                       <img src="/images/blog/how-ai-revolutionizing-nearshore-software.jpeg" alt="image" />
//                     </Link>
//                   </div>

//                   <div className="entry-post-content">
//                     <div className="entry-meta">
//                       <ul>
//                         <li>
//                           <Link href="#">Admin</Link>
//                         </li>
//                         <li>July 11, 2023</li>
//                       </ul>
//                     </div>

//                     <h3>
//                       {/* <Link href="/blog/sa-technologies-inc-introducing-brand-new-offshore-development-centre-bangalore/">
//                       Committed to excelling in Digital Engineering and Generative AI
//                       </Link> */}

//                       <Link href="/articles/gcc-evolution/">
//                       Committed to excelling in Digital Engineering and Generative AI
//                       </Link>
//                     </h3>
//                     <p>
//                     SA Technologies is excited to announce a new milestone – the launch of our Offshore Development Centre...
//                     </p>

//                     {/* <Link href="/blog/sa-technologies-inc-introducing-brand-new-offshore-development-centre-bangalore/" className="learn-more-btn">
//                       Read More <i className="flaticon-add"></i>
//                     </Link> */}

//                     <Link href="/articles/gcc-evolution/" className="learn-more-btn">
//                       Read More <i className="flaticon-add"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="single-blog-post">
//                   <div className="entry-thumbnail">
//                     <Link href="/blog/navigating-challenges-it-controls-sox-compliance/">
//                       <img src="/images/blog/the-future-software-development.png" alt="image" />
//                     </Link>
//                   </div>

//                   <div className="entry-post-content">
//                     <div className="entry-meta">
//                       <ul>
//                         <li>
//                           <Link href="#">Admin</Link>
//                         </li>
//                         <li>July 07, 2023</li>
//                       </ul>
//                     </div>

//                     <h3>
//                       <Link href="/blog/navigating-challenges-it-controls-sox-compliance/">
//                       Navigating the Challenges of IT Controls in SOX Compliance
//                       </Link>
//                     </h3>
//                     <p>
//                     Sarbanes-Oxley (SOX) compliance is a critical aspect of maintaining transparent and accurate financial reporting.
//                     </p>

//                     <Link href="/blog/navigating-challenges-it-controls-sox-compliance/" className="learn-more-btn">
//                       Read More <i className="flaticon-add"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="single-blog-post">
//                   <div className="entry-thumbnail">
//                     <Link href="/blog/robust-sox-framework-best-practices/">
//                       <img src="/images/blog/transforming-business-operations.jpeg" alt="image" />
//                     </Link>
//                   </div>

//                   <div className="entry-post-content">
//                     <div className="entry-meta">
//                       <ul>
//                         <li>
//                           <Link href="#">Admin</Link>
//                         </li>
//                         <li>July 05, 2023</li>
//                       </ul>
//                     </div>

//                     <h3>
//                       <Link href="/blog/robust-sox-framework-best-practices/">
//                       Building a Robust SOX Framework: Essential Best Practices
//                       </Link>
//                     </h3>
//                     <p>
//                     The Sarbanes-Oxley Act (SOX) was a response to a series of high-profile financial scandals..
//                     </p>

//                     <Link href="/blog/robust-sox-framework-best-practices/" className="learn-more-btn">
//                       Read More <i className="flaticon-add"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </SwiperSlide>

//             </div>
//           </Swiper>
//         </div>

//         <div className="dot-shape1">
//           <img src="/images/shape/dot1.png" alt="image" />
//         </div>
//         <div className="shape-img2">
//           <img src="/images/shape/shape2.svg" alt="image" />
//         </div>
//         <div className="shape-img4">
//           <img src="/images/shape/shape4.svg" alt="image" />
//         </div>
//         <div className="shape-img5">
//           <img src="/images/shape/shape5.svg" alt="image" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogPostSlider;


import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState, Component } from 'react';
import { useRouter } from 'next/router';
import { Autoplay } from "swiper";
import Link from "next/link";

const BlogPostSlider = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10; // Number of posts per page
  const postApi = 'https://dev1.satincorp.com/wp-json/wp/v2';

  const router = useRouter();


  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${postApi}/posts?page=${currentPage}&per_page=${pageSize}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const postsData = await response.json();
        setPosts(postsData);

        // Set the total pages based on the response headers
        const totalPagesHeader = response.headers.get('X-WP-TotalPages');
        setTotalPages(parseInt(totalPagesHeader, 10) || 1);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, [currentPage]);
  console.log("currentPage", currentPage);

  const handlePrevPage = () => {
    if (currentPage > 10) {
      setCurrentPage(currentPage - 10);
    }
  };
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Update the URL with the new page number
      router.push(`/blog?page=${newPage}`);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <div className="partner-section ptb-50">
        <div className="container">
          <div className="section-title">
            <h2>Our Latest Blogs</h2>
            <p>
              Learn more about our work through Blog post and technology specific articles.
            </p>
          </div>
          <Swiper
            spaceBetween={20}
            autoplay={{
              delay: 900,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay]}
            className="partner-slides"
          >
            <div className="row justify-content-center">
              {posts.map((post, index) => (
                <SwiperSlide>
                  <div className="single-blog-post" key={index}>
                  <div className="entry-thumbnail">
                    {/* <Link href={`/blog/${post.id}`}> */}
                    <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
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
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                    </h3>


                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />

                    {/* <Link  className="learn-more-btn" href={`/blogs/${post.slug}`}> Read More <i className="flaticon-add"></i></Link> */}

                    {/* <Link className="learn-more-btn" href={`/blog/${post.slug}/${post.id}`}> Read More <i className="flaticon-add"></i></Link> */}
                    <Link className="learn-more-btn" href="/blog/[slug]" as={`/blog/${post.slug}`}> Read More <i className="flaticon-add"></i></Link>

                  </div>
                </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
      </div>
    </>
  );
};

export default BlogPostSlider;
