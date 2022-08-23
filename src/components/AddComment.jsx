import React from "react";
import "../component css/List-Article.css";
import "../component css/Comment.css";
import { UserContext } from "../context/userContext";
import { useContext, useState } from "react";
import { postComment } from "../api";
import OptimisticComment from "./OptimisticCommnet";

const AddComment = ({ topic, article_id }) => {
  const [currText, setCurrText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const {
    user: { user }, // why are you mad ?
  } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment({
      username: user.username,
      body: currText,
      article_id: article_id,
    });
    setSubmitted(true);
  };
  return (
    <>
      <div className={`AddComment ${topic}`}>
        <form onSubmit={handleSubmit}>
          <label>hello {user.username} add a comment here</label>
          <br></br>
          <br></br>
          <textarea
            value={currText}
            onChange={(event) => {
              setCurrText(event.target.value);
            }}
            className="Add_Comment-text_box"
            placeholder="What do yo want to say?"
          ></textarea>
          <br></br>
          <br></br>
          <button className="button-85-Left">add comment</button>
        </form>
        <br></br>
        <br></br>
      </div>
      {submitted ? (
        <OptimisticComment
          topic={topic}
          body={currText}
          username={user.username}
        />
      ) : null}
    </>
  );
};

export default AddComment;
