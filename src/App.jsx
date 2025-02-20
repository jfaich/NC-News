import { useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router";
import Home from "./Home";
import Article from "./Article";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/article/:article_id" element={<Article />}></Route>
      </Routes>
    </div>
  );
}

export default App;
