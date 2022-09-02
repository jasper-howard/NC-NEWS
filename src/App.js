import React, { useState } from "react";
import "./App.css";
import ListContainer from "./components/ListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tabs from "./components/Tabs";
import Article from "./components/Article";
import { UserContext } from "./context/userContext";
import TitleAndName from "./components/TitleAndName";
import Error from "./components/Error";
import { StyleContext } from "./context/styleContext";
import UserSelect from "./components/UserSelect";

function App() {
  const [user, setUser] = React.useState({
    user: false,
  });

  const [borderStyle, setBorderStyle] = useState("All");

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <StyleContext.Provider value={{ borderStyle, setBorderStyle }}>
          <div className="App">
            <TitleAndName />
            <Tabs />
            <Routes>
              <Route path="/" element={<ListContainer />} />
              <Route path="/:topic" element={<ListContainer />} />
              <Route path="/articles/:article_id" element={<Article />} />
              <Route path="*" element={<Error />} />
              <Route path="/login" element={<UserSelect />} />
            </Routes>
          </div>
        </StyleContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
