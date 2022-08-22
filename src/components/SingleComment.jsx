import React from "react";
//import { Link } from "react-router-dom"; //could link to user
import "../component css/List-Article.css";

const SingleComment = ({ comment }) => {
  console.log(comment);
  return (
    <>
      <div className="Article-Div">
        <h2 className="Article-H2">{comment.title}</h2>
        <p className="Article-P">{comment.body}</p>
        <p className="Article-P">User: {comment.author}</p>
        <p className="Article-P">Votes: {comment.votes}</p>
      </div>
    </>
  );
};

export default SingleComment;
