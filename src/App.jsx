import { useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router";
import Home from "./Home";
import Article from "./Article";
import Header from "./Header";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <Header></Header>
      <NavBar className="nav-bar"></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/article/:article_id" element={<Article />}></Route>
      </Routes>
    </div>
  );
}

export default App;
