import { fetchAllArticles } from "../api.js";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ListItem from "./ListItem.jsx";
import { useParams } from "react-router-dom";

const ListContainer = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    fetchAllArticles(topic)
      .then(({ articles }) => {
        setAllArticles(articles);
      })
      .then(() => {
        setLoading(false);
      });
  }, [topic]);

  const listItems = allArticles.map((article, index) => {
    return <ListItem article={article} key={index} />;
  });

  if (loading) return <em>LOADING...ListContainer</em>;
  return <div>{listItems}</div>;
};

export default ListContainer;
