import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../api";
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
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticle(article_id)
      .then(({ article }) => {
        setArticle(article);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [article_id]);

  if (loading) return <em>LOADING...</em>;
  if (err) return <em>{err}</em>;
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
          {/* <section className="Inner-Button"></section> */}
          <p className="Inner-Button">Votes: {article.votes}</p>
          <button className="button-85-Right">+</button>
          {/* <button className="button-85-Right">-</button> */}
        </section>
      </div>
    </>
  );
};

export default Article;
