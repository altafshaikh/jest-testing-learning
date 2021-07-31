const axios = require("axios");
import { fetchPosts } from "./module";

// mocking
jest.mock("axios");

/*
Mocking JS Libraries are easy

mock them Like This

*/

const mockPostsUrl = "https://jsonplaceholder.typicode.com/posts";

const mockPostList = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit my mock data",
    body:
      "quia et suscipit\n" +
      "suscipit recusandae consequuntur expedita et cum\n" +
      "reprehenderit molestiae ut ut quas totam\n" +
      "nostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body:
      "est rerum tempore vitae\n" +
      "sequi sint nihil reprehenderit dolor beatae ea dolores neque\n" +
      "fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n" +
      "qui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\n" +
      "voluptatem occaecati omnis eligendi aut ad\n" +
      "voluptatem doloribus vel accusantium quis pariatur\n" +
      "molestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipisci\n" +
      "sit amet autem assumenda provident rerum culpa\n" +
      "quis hic commodi nesciunt rem tenetur doloremque ipsam iure\n" +
      "quis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body:
      "repudiandae veniam quaerat sunt sed\n" +
      "alias aut fugiat sit autem sed est\n" +
      "voluptatem omnis possimus esse voluptatibus quis\n" +
      "est aut tenetur dolor neque",
  },
];

describe("Module Testing Mock API CAlls", () => {
  it("should return 5 posts)", async () => {
    axios.get.mockResolvedValue(mockPostList);
    const data = await fetchPosts(mockPostsUrl);
    expect(data).toEqual(mockPostList);
  });
});
