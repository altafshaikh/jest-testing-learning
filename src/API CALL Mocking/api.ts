const axios = require("axios");
import { AxiosGetCall } from "./dependency";

const postsUrl = "https://jsonplaceholder.typicode.com/posts";

export async function fetchPosts(url) {
  const { data }: any = await AxiosGetCall(url);
  return data;
}

fetchPosts(postsUrl);
