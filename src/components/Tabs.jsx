// import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "../component css/Tab.css";
// import { useState } from "react";

// map trough a get of topics to make tabs

const Tabs = () => {
  // const topic = document.location.pathname.slice(1);
  // could come in vvv
  // const [topicSelected, setTopicSelected] = useState("");
  // useEffect(() => {
  //   setTopicSelected(topic);
  // }, [topic]);

  return (
    <>
      <section className="Tab-Section">
        <Link to="/">
          <div className="Tab-All">
            ALL:<p>Read all about it</p>
          </div>
        </Link>
        <Link to="/coding">
          <div className="Tab-Coding">
            CODING:<p>Bil Gates was here</p>
          </div>
        </Link>
        <Link to="/cooking">
          <div className="Tab-Cooking">
            COOKING:<p>You are what you eat</p>
          </div>
        </Link>
        <Link to="/football">
          <div className="Tab-Football">
            FOOTBALL:<p>All the latest ball news</p>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Tabs;
