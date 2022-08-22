import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "../component css/Tab.css";

// could make tab show start of top headline have hardcoded for now

const Tabs = () => {
  const { topic } = useParams();
  console.log(topic);
  return (
    <>
      <section className="Tab-Section">
        <Link to="/all">
          <div className="Tab-All">
            ALL:<p>Read all about it</p>
          </div>
        </Link>
        <Link to="/football">
          <div className="Tab-Football">
            FOOTBALL:<p>All the latest ball news</p>
          </div>
        </Link>
        <Link to="/coding">
          <div className="Tab-Coding">
            CODING:<p>Running a Node App</p>
          </div>
        </Link>
        <Link to="/cooking">
          <div className="Tab-Cooking">
            COOKING:<p>Seafood substitutions are increasing</p>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Tabs;
