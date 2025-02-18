import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Articles from "./Articles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Home page</h1>
      </div>
      <Articles></Articles>
    </>
  );
}

export default App;
