import forsidegif from "../images/forsideani.gif";

export default function Forside() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="forside">
      <div id="velkommen">
        <h2>velkommen til</h2>
        <h2>Rikke Kodahls</h2>
        <h2>portfolio</h2>
      </div>
      <a onClick={() => scrollToSection("kontakt")}>
        <button id="kontaktKnap">kontakt mig</button>
      </a>

      <img
        id="forsidegif"
        src={forsidegif}
        alt="Illustration af mig selv bag skrivebord"
      />
    </section>
  );
}
