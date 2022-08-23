import React from "react";
import "../component css/List-Article.css";

const OptimisticComment = ({ username, body, topic }) => {
  return (
    <>
      <div className={`Article-Div ${topic}`}>
        <p className="Article-P">{body}</p>
        <p className="Article-P">User: {username}</p>
        <p className="Article-P">Votes: 0</p>
      </div>
    </>
  );
};

export default OptimisticComment;
