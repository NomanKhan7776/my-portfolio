import { useContext, useRef, useState } from "react";
import { PostContext } from "../context/PostContext";

function CreatePost() {
  const title = useRef(null);
  const message = useRef(null);
  const tagsVal = useRef(null);
  const { addPost, addTag, clearTag } = useContext(PostContext);
  const [error, setError] = useState({});
  const handleTags = (e) => {
    e.preventDefault();
    const tagsValue = tagsVal.current.value;
    if (tagsValue) {
      addTag(tagsValue);
      tagsVal.current.value = "";
    }
  };
  const handlePost = (e) => {
    e.preventDefault();
    const titleValue = title.current.value;
    const messageValue = message.current.value;
    let errorMsg = {};
    if (!title.current.value.trim()) {
      errorMsg.title = "title is required";
    }
    if (!message.current.value.trim()) {
      errorMsg.message = "message is required";
    }
    if (Object.keys(errorMsg).length > 0) {
      setError(errorMsg);
      return;
    }
    addPost(titleValue, messageValue);
    clearTag();
    title.current.value = "";
    message.current.value = "";
    tagsVal.current.value = "";
    setError({});
  };
  return (
    <form className="my-4 flex flex-col items-center" onSubmit={handlePost}>
      <div className="mb-3 w-full">
        <label htmlFor="title" className="form-label text-2xl font-bold">
          Title
        </label>
        <input
          ref={title}
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
        />
        {error.title && <p className="text-red-500">{error.title}</p>}
      </div>
      <div className="mb-3 w-full">
        <label htmlFor="message" className="form-label text-2xl font-bold">
          Post Message
        </label>
        <textarea
          ref={message}
          className="form-control"
          id="message"
        ></textarea>
        {error.message && <p className="text-red-500">{error.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label text-2xl font-bold">
          Tags
        </label>
        <div className="flex w-full">
          <input
            ref={tagsVal}
            type="text"
            className="form-control mr-1"
            id="tags"
            aria-describedby="emailHelp"
          />
          <button className="btn btn-primary" onClick={handleTags}>
            Tag
          </button>
        </div>
      </div>
      <button type="submit" className="btn btn-primary w-1/3">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
