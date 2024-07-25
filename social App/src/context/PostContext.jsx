import { createContext, useEffect, useReducer, useState } from "react";

export const PostContext = createContext({
  posts: [],
  tags: [],
  addTag: () => {},
  addPost: () => {},
  deletePost: () => {},
  addLike: () => {},
  clearTag: () => {},
});

const postReducer = (post, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [
        ...post,
        {
          title: action.title,
          message: action.message,
          id: post.length + 1,
          likes: 0,
          tags: action.tags,
        },
      ];
    case "DELETE_POST":
      return post.filter((posts) => posts.id !== action.id);
    case "ADD_LIKES":
      return post.map((posts) =>
        posts.id === action.id ? { ...posts, likes: posts.likes + 1 } : posts
      );
    default:
      return post;
  }
};

const PostContextValue = ({ children }) => {
  const [posts, dispatchPosts] = useReducer(postReducer, [], () => {
    const localData = localStorage.getItem("posts");
    try {
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Failed to parse localStorage data:", error);
      return [];
    }
  });
  const [tags, setTags] = useState([]);
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);
  const addPost = (title, message) => {
    const addPostRed = {
      type: "ADD_POST",
      title,
      message,
      tags,
    };
    dispatchPosts(addPostRed);
    setTags([]);
  };
  const deletePost = (id) => {
    const delPost = {
      type: "DELETE_POST",
      id,
    };
    dispatchPosts(delPost);
  };
  const addLike = (id) => {
    const likes = {
      type: "ADD_LIKES",
      id,
    };
    dispatchPosts(likes);
  };
  const addTag = (tag) => {
    setTags((prevtag) => [...prevtag, tag]);
  };
  const clearTag = () => {
    setTags([]);
  };
  return (
    <PostContext.Provider
      value={{ posts, addPost, deletePost, addLike, addTag, tags, clearTag }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContextValue;
