import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Forside from "./components/Forside";
import Navigation from "./components/Navigation";
import Sections from "./components/Sections";

function App() {
  return (
    <>
      <Navigation />
      <Forside />
      <Sections />
    </>
  );
}

export default App;
