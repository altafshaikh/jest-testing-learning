const axios = require("axios");

const postsUrl = "https://jsonplaceholder.typicode.com/posts";

export function fetchPosts(url: any) {
  return axios.get(url);
}

fetchPosts(postsUrl);
