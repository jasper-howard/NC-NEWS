import { useState } from "react";
import React from "react";

// could make tab show start of top headline have hardcoded for now

const Tabs = ({ article }) => {
  const [category, setCategory] = useState("");

  return (
    <>
      <section className="Top-Section">
        <div className="Top-1" onClick={setCategory("football")}>
          FOOTBALL:<p>All the latest ball news</p>
        </div>
        <div className="Top-2">
          CODING:<p>Running a Node App</p>
        </div>
        <div className="Top-3">
          COOKING:<p>Seafood substitutions are increasing</p>
        </div>
      </section>
    </>
  );
};

export default Tabs;
