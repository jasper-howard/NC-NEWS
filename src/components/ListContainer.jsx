import { fetchAllArticles } from "../api.js";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ListItem from "./ListItem.jsx";
import { useParams, useSearchParams } from "react-router-dom";
import { StyleContext } from "../context/styleContext";
import NC_DIV from "./NC_DIV.jsx";

const ListContainer = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiErr, setApiErr] = useState(false);
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryObj = Object.fromEntries([...searchParams]);
  const [sort_by, setSort_by] = useState(queryObj.sort_by);
  const [order, setOrder] = useState(queryObj.order);
  const { setBorderStyle } = useContext(StyleContext);
  const queryAssignObj = {};

  if (sort_by) {
    queryAssignObj.sort_by = sort_by;
  }
  if (!sort_by) {
    delete queryAssignObj.sort_by;
  }
  if (order) {
    queryAssignObj.order = order;
  }
  if (!order) {
    delete queryAssignObj.order;
  }

  useEffect(() => {
    setBorderStyle(topic);
    setApiErr(false);

    fetchAllArticles(topic, sort_by, order)
      .then(({ articles }) => {
        setAllArticles(articles);
        setLoading(false);
        setSearchParams(queryAssignObj); /// wants this in dependencies but then it glitches
      })
      .catch((err) => {
        setApiErr(true);
        console.log(err);
      });
  }, [topic, sort_by, order, setSearchParams]);

  const listItems = allArticles.map((article, index) => {
    return <ListItem article={article} key={index} />;
  });

  return apiErr ? (
    <NC_DIV>
      <em className="Message">news not found</em>
    </NC_DIV>
  ) : loading ? (
    <NC_DIV>
      <em className="Message">LOADING... articles</em>
    </NC_DIV>
  ) : (
    <div>
      <section className="Form-Section">
        <form>
          <label>SORT: </label>
          <select
            onChange={(event) => {
              setSort_by(event.target.value);
            }}
            className="Select"
          >
            <option value="created_at">Date</option>
            <option value="comment_count">Comment count</option>
            <option value="votes">Votes</option>
          </select>
        </form>
        <form>
          <label>ORDER: </label>
          <select
            onChange={(event) => {
              setOrder(event.target.value);
            }}
            className="Select"
          >
            <option value="DESC">Descending</option>
            <option value="ASC">Asending</option>
          </select>
        </form>
      </section>
      <div className="ListContainer">{listItems}</div>
    </div>
  );
};

export default ListContainer;
