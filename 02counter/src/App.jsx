import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 5;
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
    // console.log("clicked", counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
    // console.log("clicked", counter);
  };

  return (
    <>
      <h1>Counter app</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
