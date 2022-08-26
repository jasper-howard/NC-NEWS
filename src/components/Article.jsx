import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle, fetchComments, updateVotesArticle } from "../api";
import "../component css/Button.css";
import SingleComment from "./SingleComment";
import AddComment from "./AddComment";
import DivWithContext from "./DivWithContext";
import useImageGen from "../hooks/useImageGen";
import { LinearProgress } from "@mui/material";

const Article = () => {
  const [article, setArticle] = useState({
    title: "loading",
    body: "loading",
    topic: "loading",
    votes: "loading",
  });
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [votes, setVotes] = useState(0);
  const [comments, setComments] = useState([
    {
      comment_id: 31,
      votes: 11,
      created_at: "2020-09-26T17:16:00.000Z",
      body: "Sit sequi odio suscipit. Iure quisquam qui alias distinctio eos officia enim aut sit. Corrupti ut praesentium ut iste earum itaque qui. Dolores in ab rerum consequuntur. Id ab aliquid autem dolore.",
      author: "weegembump",
    },
  ]);
  const { article_id } = useParams();

  const { imageWait, url, handleImgGen } = useImageGen(article.title);

  useEffect(() => {
    fetchArticle(article_id)
      .then(({ article }) => {
        setArticle(article);
        setVotes(article.votes);
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setErr(true);
      });

    fetchComments(article_id)
      .then((comments) => {
        setComments(comments);
      })
      .catch(() => {
        setErr(true);
      });
  }, [article_id]);

  const commentArray = comments.map((comment) => {
    return (
      <SingleComment
        key={comment.comment_id}
        topic={article.topic}
        comment={comment}
      />
    );
  });

  const handleUpVote = (polarity) => {
    let value = 1;
    if (polarity === "down") {
      value = -1;
    }
    setVotes((currentVote) => {
      return currentVote + value;
    });
    updateVotesArticle(article_id, value);
  };

  return err ? (
    <DivWithContext>
      <em className="Message">article not found</em>
    </DivWithContext>
  ) : loading ? (
    <DivWithContext>
      <em className="Message">loading...</em>
    </DivWithContext>
  ) : (
    <>
      <div className={`Article-Div ${article.topic}`}>
        <section className="Article-Header">
          <h2 className="Article-H2">{article.title}</h2>
          <img src={url} alt="" />
          <section className="Button-Section">
            <button className={`${article.topic}-s`} onClick={handleImgGen}>
              get image from ai
            </button>

            <p>{imageWait}</p>
          </section>
          {imageWait === "plz wait" ? (
            <LinearProgress
              sx={{
                width: "80%",
                marginLeft: "8%",
                color: "pink",
              }}
            />
          ) : null}
          <p className="Article-P">Topic: {article.topic}</p>
        </section>
        <p className="Article-P">{article.body}</p>
        <section className="Article-Button_Section">
          <p className="Inner-Button">Votes: {votes}</p>
          <button
            className={`${article.topic}-s`}
            onClick={() => {
              handleUpVote("up");
            }}
          >
            +
          </button>
          <button
            className={`${article.topic}-s`} ///set default dimensions
            onClick={() => {
              handleUpVote("down");
            }}
          >
            --
          </button>
        </section>
      </div>
      <section className="Article-Comments-">
        <AddComment
          topic={article.topic}
          article_id={article_id}
          setLoading={setLoading}
        />
      </section>
      <section className="Article-Comments">{commentArray}</section>
    </>
  );
};

export default Article;
