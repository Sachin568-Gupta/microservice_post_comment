import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentaCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = ({ refreshPost }) => {
  const [postList, setPostList] = useState({});
  const [refreshComment, setRefreshComment] = useState(false);

  const fetchPosts = async () => {
    const response = await axios.get("http://posts.com/posts");
    setPostList(response?.data || {});
  };

  useEffect(() => {
    fetchPosts();
  }, [refreshComment]);

  return (
    <div className="d-flex flex-row justify-content-between flex-wrap">
      {Object.values(postList).map((post) => (
        <div
          className="card"
          key={post.id}
          style={{ width: "30%", marginBottom: "20px" }}
        >
          <div className="card-body">
            <h3>{post?.title}</h3>

            <CommentList comments={post.comments} />
            <CommentaCreate
              postId={post.id}
              refreshComment={refreshComment}
              setRefreshComment={setRefreshComment}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
