import logo from "../images/kologo.svg";

export default function Navigation() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav>
      <div id="logo">
        <a onClick={scrollToTop}>
          <img src={logo} alt="Mit logo" />
        </a>
      </div>
      <h2>Rikke Kodahl</h2>
      <div id="menupunkter">
        <a onClick={() => scrollToSection("omMig")}>om mig</a>
        <a onClick={() => scrollToSection("projekter")}>projekter</a>
        <a onClick={() => scrollToSection("kontakt")}>kontakt</a>
      </div>
    </nav>
  );
}
