// utils/fetchPosts.js
export async function fetchPosts() {
  try {
    const response = await fetch(
      "https://dev1.satincorp.com/wp-json/wp/v2/posts?per_page=100"
    );
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
