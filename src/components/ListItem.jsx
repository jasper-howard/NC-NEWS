import React from "react";
import "../component_css/List-Article.css";

const listItem = ({ article }) => {
  return (
    <>
      <div className="Article-Div">
        <h2 className="Article-H2">{article.title}</h2>
        <p className="Article-P">{article.body.slice(0, 140)} ...MORE</p>
        <p className="Article-P">{article.topic}</p>
      </div>
    </>
  );
};

export default listItem;
