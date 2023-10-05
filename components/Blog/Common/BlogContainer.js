import React, { useEffect, useState, Component } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";

const BlogContainer = (postsData) => {
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
      <h1>Header</h1>
    </>
  );
};
export default BlogContainer;
