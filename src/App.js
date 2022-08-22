import React from "react";
import "./App.css";
import ListContainer from "./components/ListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tabs from "./components/Tabs";
import Article from "./components/Article";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>NC NEWS</h1>
        <Tabs />
        <Routes>
          <Route path="/:topic" element={<ListContainer />} />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
