import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-3xl mb-4">
        Tailwind Test
      </h1>
      <Card name="Ritwik" btnText="Visit me" />
      <Card name="John" btnText="Subscribe" />
    </>
  );
}

export default App;
