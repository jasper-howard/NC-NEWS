import fetchAllArticles from "../api.js";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ListItem from "./ListItem.jsx";

const ListContainer = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllArticles()
      .then(({ articles }) => {
        setAllArticles(articles);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  const listItems = allArticles.map((article) => {
    return <ListItem article={article} />;
  });

  if (loading) return <em>LOADING...</em>;
  return <div>{listItems}</div>;
};

export default ListContainer;
