import migimg from "../images/ommig.svg";
import kontaktimg from "../images/kontaktmig.svg";
import illustrator from "../images/illustrator.png";
import html from "../images/html-5.png";
import css from "../images/css-3.png";
import figma from "../images/figma.png";
import aftereffects from "../images/after-effects.png";
import javascript from "../images/java-script.png";
import react from "../images/atom.png";
import kfmlap from "../images/eksamenlap.svg";
import kfmmob from "../images/eksamenmob.svg";
import nipponlap from "../images/nipponlap.svg";
import nipponmob from "../images/nipponmob.svg";
import urtekramlap from "../images/urtekramlap.svg";
import urtekrammob from "../images/urtekrammob.svg";
import { useState } from "react";
import { useEffect } from "react";
import OmMig from "./OmMig";
import pil from "../images/arrow-down.svg";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://rikkekodahl.dk/wp/wp-json/wp/v2/posts?_embed&categories=6"
      );
      const data = await response.json();

      setPosts(data);
    }
    getData();
  }, []);

  return (
    <section id="omMig">
      <div className="toKolonner">
        <div id="omMigImg">
          <img src={migimg} alt="Billede af mig" />
        </div>

        <div id="omMigTekst">
          <h1>om mig</h1>
          <div>
            {posts.map((post) => (
              <OmMig key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>

      <div id="udtalelse">
        <div className="tekstIMidten">
          <h2>udtalelse fra medstuderende</h2>
        </div>
      </div>

      <div>
        <div className="tekstIMidten">
          <h2>værktøjer</h2>
        </div>

        <div className="tools">
          <div>
            <img
              src={illustrator}
              alt="Adobe Illustrator: Icons made by https://www.freepik.com title= Freepik  from https://www.flaticon.com/ title= Flaticon www.flaticon.com"
            />
            <h3>adobe illustrator</h3>
          </div>
          <div>
            <img
              src={html}
              alt="HTML: Icons made by https://www.freepik.com title= Freepik from https://www.flaticon.com/ title= Flaticon www.flaticon.com"
            />
            <h3>html</h3>
          </div>
          <div>
            <img
              src={css}
              alt="CSS: Icons made by https://www.flaticon.com/authors/pixel-perfect title= Pixel perfect Pixel perfect from https://www.flaticon.com/ title=Flaticon www.flaticon.com"
            />
            <h3>css</h3>
          </div>
          <div>
            <img
              src={figma}
              alt="Figma: Icons made by https://www.freepik.com title= Freepik from https://www.flaticon.com/ title= Flaticon www.flaticon.com"
            />
            <h3>figma</h3>
          </div>
        </div>

        <div className="tools">
          <div>
            <img
              src={aftereffects}
              alt="Adobe After Effects: Icons made by https://www.freepik.com title= Freepik from https://www.flaticon.com/ title= Flaticon www.flaticon.com"
            />
            <h3>adobe after effects</h3>
          </div>
          <div>
            <img
              src={react}
              alt="REACT: Icons made by https://www.freepik.com title= Freepik  from https://www.flaticon.com/ title= Flaticon www.flaticon.com"
            />
            <h3>react</h3>
          </div>
          <div>
            <img
              src={javascript}
              alt="JavaScript: Icons made by https://www.flaticon.com/authors/edtim title=edt.im edt.im from https://www.flaticon.com/ title=Flaticon www.flaticon.com"
            />
            <h3>javascript</h3>
          </div>
        </div>
      </div>

      <section id="projekter">
        <h1>projekter</h1>

        <div id="kfm">
          <div className="projektBeskrivelse">
            <h2>kristian f. møller</h2>
            <p>
              Min gruppe og jeg arbejdede med boghandlen Kristian F. Møller ifm.
              eksamensprojektet på 2. semester. Her lavede vi et redesign af
              Kristian F. Møllers website, der havde til formål at udstråle den
              visuelle identitet, man ser i den fysiske butik.{" "}
            </p>
            <p>Har du lyst til at se mere?</p>{" "}
            <p>
              Så klik her
              <img className="pil" src={pil} alt="Pil nedad" />
            </p>
            <Link to="https://xd.adobe.com/view/2afcd91f-e249-4340-ac49-b7ba253c1748-7faf/?fullscreen&hints=off">
              {" "}
              <button className="seMereKnap">se mere</button>
            </Link>
          </div>

          <div className="mockup">
            <img
              className="mockupLap"
              src={kfmlap}
              alt="Mockup af mit eksamensprojekt fra 2. semester - Laptop"
            />
            <img
              className="mockupMob"
              src={kfmmob}
              alt="Mockup af mit eksamensprojekt fra 2. semester - Mobil"
            />
          </div>
        </div>

        <div id="nippon">
          <div className="projektBeskrivelse">
            <h2>nippon</h2>
            <p>
              I starten af 2. semester fik vi en fiktiv case, hvor vi i grupper
              skulle lave et website for et japanskinspireret måltidskassefirma
              kaldet Nippon. Her skulle man bl.a. kunne sammensætte sin egen
              måltidskasse efter smag, antal personer og antal dage.{" "}
            </p>
            <p>Har du lyst til at se mere?</p>{" "}
            <p>
              Så klik her
              <img className="pil" src={pil} alt="Pil nedad" />
            </p>
            <Link to="https://xd.adobe.com/view/78cf6335-36f6-44ec-8efd-520d28ebc2fc-2d9c/?fullscreen&hints=off">
              {" "}
              <button className="seMereKnap">se mere</button>
            </Link>
          </div>
          <div className="mockup">
            <img
              className="mockupLap"
              src={nipponlap}
              alt="Mockup af mit måltidskasseprojekt - Laptop"
            />
            <img
              className="mockupMob"
              src={nipponmob}
              alt="Mockup af mit måltidskasseprojekt - Mobil"
            />
          </div>
        </div>

        <div id="urtekram">
          <div className="projektBeskrivelse">
            <h2>urtekram</h2>
            <p>
              Til min eksamen på 1. semester skulle jeg lave et oplevelsessite
              for et eksisterende dagligdagsprodukt. Her valgte jeg at arbejde
              med Urtekrams Pasta Fettucine, hvor jeg bl.a. lavede et redesign
              af Urtekrams logo og pastaens indpakning.{" "}
            </p>
            <p>Har du lyst til at se mere?</p>{" "}
            <p>
              Så klik her
              <img className="pil" src={pil} alt="Pil nedad" />
            </p>
            <Link to="https://xd.adobe.com/view/04aedd00-c51e-4707-90f8-818264be9ce9-51fd/?fullscreen&hints=off">
              {" "}
              <button className="seMereKnap">se mere</button>
            </Link>
          </div>
          <div className="mockup">
            <img
              className="mockupLap"
              src={urtekramlap}
              alt="Mockup af mit eksamensprojekt fra 1. semester - Laptop"
            />
            <img
              className="mockupMob"
              src={urtekrammob}
              alt="Mockup af mit eksamensprojekt fra 1. semester - Mobil"
            />
          </div>
        </div>
      </section>

      <section id="kontakt">
        <div className="toKolonner">
          <div id="kontaktImg">
            <img src={kontaktimg} alt="Billede af mig" />
          </div>

          <div id="kontaktTekst">
            <h1>kontakt</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
