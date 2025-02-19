import { Link, useParams } from "react-router";
import Articles from "./Articles";
import { useEffect, useState, react } from "react";

function Home() {
  return (
    <div>
      <Articles className="article-card"></Articles>
    </div>
  );
}

export default Home;
