import migimg from "../images/ommigimg.svg";
import illustrator from "../images/illustrator.png";
import html from "../images/html-5.png";
import css from "../images/css-3.png";
import figma from "../images/figma.png";
import aftereffects from "../images/after-effects.png";
import javascript from "../images/java-script.png";
import react from "../images/atom.png";
import kfmlap from "../images/eksamenlap.svg";
import kfmmob from "../images/eksamenmob.svg";
import { useState } from "react";
import { useEffect } from "react";
import OmMig from "./OmMig";

export default function Sections() {
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
          <div className="projektBeskrivelse"></div>

          <div className="mockup">
            <img
              src={kfmlap}
              alt="Mockup af mit eksamensprojekt fra 2. semester - Laptop"
            />
            <img
              src={kfmmob}
              alt="Mockup af mit eksamensprojekt fra 2. semester - Mobil"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
