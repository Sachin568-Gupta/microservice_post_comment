import React, { useState } from "react";
import axios from "axios";

const PostCreate = ({ refreshPost, setRefreshPost }) => {
  const [title, setTitle] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://posts.com/posts/create", { title });
    setTitle("");
    setRefreshPost(!refreshPost);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
