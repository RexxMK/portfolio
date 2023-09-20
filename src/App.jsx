import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Forside from "./components/Forside";
import Navigation from "./components/Navigation";
import Sections from "./components/Sections";
import MobilLogo from "./components/MobilLogo";

function App() {
  return (
    <>
      <Navigation />
      <MobilLogo />
      <Forside />
      <Sections />
    </>
  );
}

export default App;
