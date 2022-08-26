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

function App() {
  const [user] = React.useState({
    user: {
      username: "cooljmessy",
      name: "Peter Messy",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002",
    },
  });

  const [borderStyle, setBorderStyle] = useState("All");

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user }}>
        <StyleContext.Provider value={{ borderStyle, setBorderStyle }}>
          <div className="App">
            <TitleAndName user={user} />
            <Tabs />
            <Routes>
              <Route path="/" element={<ListContainer />} />
              <Route path="/:topic" element={<ListContainer />} />
              <Route path="/articles/:article_id" element={<Article />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </StyleContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
