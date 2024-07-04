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
