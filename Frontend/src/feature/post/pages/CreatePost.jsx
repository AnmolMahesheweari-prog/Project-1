import { useState, useRef } from "react";
import "../style/createPost.scss";
import { usePost } from "../hooks/usePost";
import { useNavigate } from "react-router";

const createPost = () => {
  const navigate = useNavigate();
  const [caption, setcaption] = useState("");
  const postRef = useRef(null);
  const { loading, handlePost } = usePost();

  async function handleSubmit(e) {
    e.preventDefault();

    const file = postRef.current.files[0];

    await handlePost(file, caption);
    navigate("/");
  }

  if (loading) {
    return (
      <main>
        <h1>loading...</h1>
      </main>
    );
  }
  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="selectpost"> select Photo</label>

          <input
            ref={postRef}
            hidden
            type="file"
            name="selectpost"
            id="selectpost"
          />
          <input
            onChange={(e) => {
              setcaption(e.target.value);
            }}
            type="text"
            name="caption"
            placeholder="enter caption"
          />
          <button> create Post</button>
        </form>
      </div>
    </>
  );
};

export default createPost;
