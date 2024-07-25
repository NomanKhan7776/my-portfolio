import { useContext } from "react";
import { PostContext } from "../context/PostContext";

function Cards({ posts }) {
  const { deletePost, addLike } = useContext(PostContext);
  return (
    <div className="card my-4" style={{ width: "18rem" }}>
      <div className="flex justify-end">
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => deletePost(posts.id)}
        ></button>
      </div>
      <div className="card-body">
        <h2 className="card-title font-semibold text-lg">{posts.title}</h2>
        <p className="card-text ">{posts.message}</p>
        <div className="my-4 flex flex-wrap gap-1 box-border">
          {posts.tags.map((tag,i) => (
            <span key={i} className="badge text-bg-primary">
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => addLike(posts.id)}
          >
            Likes <span className="badge text-bg-secondary">{posts.likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
