import React, { useState } from "react";
import axios from "axios";

const CommentaCreate = ({ postId, refreshComment, setRefreshComment }) => {
  const [content, setContent] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });
    setContent("");
    setRefreshComment(!refreshComment);
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            className="form-control"
            value={content}
            type="text"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
};

export default CommentaCreate;
