import React from "react";
import { Link } from "react-router-dom";
import "../component css/List-Article.css";

const listItem = ({ article }) => {
  return (
    <>
      <Link to={`/articles/${article.article_id}`}>
        <div className="Article-Div">
          <h2 className="Article-H2">{article.title}</h2>
          <p className="Article-P">{article.body.slice(0, 140)} ...MORE</p>
          <p className="Article-P">{article.topic}</p>
        </div>
      </Link>
    </>
  );
};

export default listItem;
