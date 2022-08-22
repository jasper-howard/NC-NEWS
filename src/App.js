import React from "react";
import "./App.css";
import ListContainer from "./components/ListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tabs from "./components/Tabs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>NC NEWS</h1>
        <Tabs />
        <Routes>
          <Route path="/:category" element={<ListContainer />} />
        </Routes>
        <ListContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
