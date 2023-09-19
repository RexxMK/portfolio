import baggrund from "../images/baggrund.svg";
import forsidegif from "../images/kodeskysimpel.gif";

export default function Forside() {
  return (
    <section id="forside">
      <div id="velkommen">
        <h2>velkommen til</h2>
        <h2>Rikke Kodahls</h2>
        <h2>portfolio</h2>
      </div>
      <a href="">
        <button id="kontaktKnap" className="knap">
          kontakt mig
        </button>
      </a>

      <img
        id="forsidegif"
        src={forsidegif}
        alt="Illustration af mig selv bag skrivebord"
      />
    </section>
  );
}
