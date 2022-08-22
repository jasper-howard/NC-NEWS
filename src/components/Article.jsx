import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle, updateVotes } from "../api";
import "../component css/Button.css";

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
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticle(article_id)
      .then(({ article }) => {
        setArticle(article);
        setVotes(article.votes);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setErr(true);
      });
  }, [article_id]);

  const handleUpVote = (kind) => {
    setVotes((currentVote) => {
      return currentVote + 1;
    });
    updateVotes(article_id);
  };

  if (err) return <em>Article not found</em>;
  if (loading) return <em>LOADING...</em>;
  return (
    <>
      <div className="Article-Div">
        <section className="Article-Header">
          <h2 className="Article-H2">{article.title}</h2>
          <p className="Article-P">Topic: {article.topic}</p>
        </section>
        <p className="Article-P">{article.body}</p>
        <section className="Article-Button_Section">
          <button className="button-85-Left">comment</button>
          <p className="Inner-Button">Votes: {votes}</p>
          <button className="button-85-Right" onClick={handleUpVote}>
            +
          </button>
        </section>
      </div>
    </>
  );
};

export default Article;
