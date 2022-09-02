import React from "react";
import { Link } from "react-router-dom";
import "../component css/Tab.css";
import { StyleContext } from "../context/styleContext";
import { useContext } from "react";

const Tabs = () => {
  const { borderStyle } = useContext(StyleContext);
  /// why are tabs pranging out?? something to do with rerenders and async

  return (
    <>
      <section className="Tab-Section">
        <Link to="/">
          <div className={`Tab-All ${borderStyle ? null : "all"}`}>
            ALL:<p>Read all about it</p>
          </div>
        </Link>
        <Link to="/coding">
          <div
            className={`Tab-Coding ${
              borderStyle === "coding" ? "coding" : null
            }`}
          >
            CODING:<p>Bil Gates was here</p>
          </div>
        </Link>
        <Link to="/cooking">
          <div
            className={`Tab-Cooking ${
              borderStyle === "cooking" ? "cooking" : null
            }`}
          >
            COOKING:<p>You are what you eat</p>
          </div>
        </Link>
        <Link to="/football">
          <div
            className={`Tab-Football ${
              borderStyle === "football" ? "football" : null
            }`}
          >
            FOOTBALL:<p>All the latest ball news</p>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Tabs;
