import { useContext } from "react";
import Cards from "./Cards";
import { PostContext } from "../context/PostContext";

function PostList() {
  const { posts } = useContext(PostContext);
  if (posts.length === 0) {
    return <h1 className="text-3xl font-bold">There Is No Post</h1>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => {
        return <Cards key={post.id} posts={post} />;
      })}
    </div>
  );
}

export default PostList;
