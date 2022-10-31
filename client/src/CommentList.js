import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment) => {
        let content;

        if(comment.status === 'approved'){
          content = comment.content;
        }else if(comment.status === 'pending'){
          content = 'This comment is awaiting moderation';
        }else if(comment.status === 'rejected'){
          content = 'Comment Rejected';
        }

        return <li key={comment.id}>{content}</li>;
      })}
    </div>
  );
};

export default CommentList;
