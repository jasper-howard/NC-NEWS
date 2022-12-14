import React from "react";
import "../component css/List-Article.css";
import "../component css/Comment.css";
import { UserContext } from "../context/userContext";
import { useContext, useState } from "react";
import { postComment } from "../api";
import OptimisticComment from "./OptimisticCommnet";
import DivWithContext from "./DivWithContext";

const AddComment = ({ topic, article_id }) => {
  const [currText, setCurrText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [commentRes, setCommentRes] = useState({});
  const [apiErr, setApiErr] = useState(false);
  const {
    user: { user },
  } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment({
      username: user.username,
      body: currText,
      article_id: article_id,
    })
      .then(({ data }) => {
        setCommentRes(data.comment);
        setSubmitted(true);
      })
      .catch((err) => {
        setApiErr(true);
      });
  };
  return (
    <>
      <div className={`AddComment ${topic}`}>
        <form onSubmit={handleSubmit}>
          <br />
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
            required="true"
          ></textarea>
          <br></br>
          <br></br>
          <button className={`${topic}-s`}>add comment</button>
        </form>
        <br></br>
        <br></br>
      </div>
      {apiErr ? (
        <DivWithContext>
          <em className="Message">comment post failure</em>
        </DivWithContext>
      ) : null}
      {submitted ? (
        <OptimisticComment
          topic={topic}
          body={currText}
          comment_id={commentRes.comment_id}
          setSubmitted={setSubmitted}
        />
      ) : null}
    </>
  );
};

export default AddComment;
