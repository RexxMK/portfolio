import migimg from "../images/om.svg";
import kontaktimg from "../images/smil_2.svg";
import streg from "../images/streg.svg";
import citatleft from "../images/citatleft.svg";
import citatright from "../images/citatright.svg";
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
import email from "../images/email.svg";
import linkedin from "../images/linkedin.svg";
import facebook from "../images/facebook.svg";
import vue from "../images/vue.png";
import nuxt from "../images/nuxt.png";
import ntsShowcase from "../images/ntsLink.png";
import aaShowcase from "../images/aaLink.png";

export default function Posts() {
  //Her henter jeg et indlæg fra WordPress
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
    //OM MIG
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

      {/*UDTALELSE */}
      <div>
        <div className="tekstIMidten">
          <h2>udtalelser fra tidligere medstuderende</h2>
        </div>
        <div className="udtalelse">
          {" "}
          <img className="stregLeft" src={streg} alt="Streg" />
          <div>
            <img className="citatLeft" src={citatleft} alt="Citationstegn" />
            <p>
              Jeg har arbejdet sammen med Rikke adskillige gange på 1 og 2
              semester af Multimediedesigner-uddannelsen og hun er en fornøjelse
              at arbejde sammen med. Rikke er imødekommende, sjov og venlig.
              Udover at være en haj til frontend bidrager hun også med sin
              kreativitet og unikke, skarpe idéer. Rikke er en ægte teamplayer,
              der også formår at arbejde selvstændigt og fordybet. Rikke er
              grundig i sit arbejde og er en person man kan regne med. Og hun er
              en gevinst for enhver, der har hende på sit team. - Og så er hun
              utrolig sjov og energisk at være i selskab med.
            </p>

            <p className="fedTekst">
              - Katrine Brun Lunding (Multimediedesigner){" "}
              <span>
                <img
                  className="citatRight"
                  src={citatright}
                  alt="Citationstegn"
                />
              </span>
            </p>
          </div>
          <img className="stregRight" src={streg} alt="Streg" />
        </div>

        <div className="udtalelse">
          {" "}
          <img className="stregLeft" src={streg} alt="Streg" />
          <div>
            <img className="citatLeft" src={citatleft} alt="Citationstegn" />
            <p>
              Jeg har haft den store fornøjelse af at arbejde sammen med Rikke
              på flere projekter på multimedieuddannelsen på Erhvervsakademi
              Aarhus, og jeg vil varmt anbefale hende. Rikke er yderst
              arbejdsom, kreativ og dedikeret til sit arbejde. Hun formår altid
              at levere projekter til tiden og på professionel vis. Hendes
              kreative evner og øje for detaljer er virkelig enestående, og jeg
              er altid imponeret over det endelige resultat af hendes arbejde.
            </p>
            <p>
              Rikke har en imponerende flair for de tekniske aspekter af
              multimediedesign. Hun er altid opdateret på de nyeste trends og
              teknologier inden for faget, og hendes ekspertise går langt ud
              over det forventede. Hendes indsigt i programmering, animationer,
              video og grafik er bemærkelsesværdig, og hun formår altid at
              udnytte disse værktøjer til at skabe imponerende resultater.
            </p>
            <p>
              Sidst, men bestemt ikke mindst, er Rikke en stor kilde til daglige
              gode grin. Hendes positive energi og sans for humor gør, at
              arbejdsmiljøet altid er sjovt og behageligt. Hun formår at skabe
              en rar stemning, hvor alle føler sig velkomne og inspirerede.
              Samlet set er Rikke en dygtig multimediedesigner, der er
              passioneret for sit arbejde. Hendes tekniske færdigheder, kreative
              tankegang og evne til at skære ind til benet er uvurderlige
              ressourcer.
            </p>
            <p>
              Jeg kan varmt anbefale Rikke til enhver virksomhed eller projekt,
              der ønsker en talentfuld og dedikeret multimediedesigner, der også
              kan forvandle arbejdsdagen til en fornøjelse.
            </p>

            <p className="fedTekst">
              - Marie-Louise Spjeldnaes Johansen (Tidligere
              multimediedesignstuderende på EAA og folkeskolelærer){" "}
              <span>
                <img
                  className="citatRight"
                  src={citatright}
                  alt="Citationstegn"
                />
              </span>
            </p>
          </div>
          <img className="stregRight" src={streg} alt="Streg" />
        </div>
      </div>

      {/*VÆRKTØJER*/}
      <div>
        <div className="tekstIMidten">
          <h2>værktøjer</h2>
        </div>

        <div className="tools">
          <div>
            <img
              src={vue}
              alt=" Icons made by https://www.flaticon.com/authors/pocike title= pocike from https://www.flaticon.com/ title= Flaticon www.flaticon.com"
            />
            <h3>vue</h3>
          </div>

          <div>
            <img src={nuxt} alt="nuxt logo" />
            <h3>nuxt</h3>
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

        <div className="tools">
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

          <div>
            <img
              src={aftereffects}
              alt="Adobe After Effects: Icons made by https://www.freepik.com title= Freepik from https://www.flaticon.com/ title= Flaticon www.flaticon.com"
            />
            <h3>adobe after effects</h3>
          </div>

          <div>
            <img
              src={illustrator}
              alt="Adobe Illustrator: Icons made by https://www.freepik.com title= Freepik  from https://www.flaticon.com/ title= Flaticon www.flaticon.com"
            />
            <h3>adobe illustrator</h3>
          </div>
        </div>
      </div>

      {/*PROJEKTER*/}
      <section id="projekter">
        <h1>projekter</h1>
        {/*KRISTIAN F. MØLLER*/}
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
            <Link to="https://xd.adobe.com/view/2afcd91f-e249-4340-ac49-b7ba253c1748-7faf/?fullscreen&hints=off">
              <img
                className="mockupLap"
                src={kfmlap}
                alt="Mockup af mit eksamensprojekt fra 2. semester - Laptop"
              />
            </Link>
            <img
              className="mockupMob"
              src={kfmmob}
              alt="Mockup af mit eksamensprojekt fra 2. semester - Mobil"
            />
          </div>
        </div>

        {/* LIMBO SHOWCASE */}
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
            <Link to="https://rikkekodahl.dk/ShowcaseTemplate/NotToScale/">
              {" "}
              <button className="seMereKnap">se mere</button>
            </Link>
          </div>
          <div className="mockup">
            <Link to="https://rikkekodahl.dk/ShowcaseTemplate/NotToScale/">
              <img
                className="mockupLap"
                src={ntsShowcase}
                alt="Mockup af mit måltidskasseprojekt - Laptop"
              />
            </Link>
          </div>
        </div>

        <div id="urtekram">
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
            <Link to="https://rikkekodahl.dk/ShowcaseTemplate/AfterAugust/">
              {" "}
              <button className="seMereKnap">se mere</button>
            </Link>
          </div>
          <div className="mockup">
            <Link to="https://rikkekodahl.dk/ShowcaseTemplate/AfterAugust/">
              <img
                className="mockupLap"
                src={aaShowcase}
                alt="Mockup af mit måltidskasseprojekt - Laptop"
              />
            </Link>
          </div>
        </div>

        {/*KRISTIAN F. MØLLER*/}
        {/* <div id="kfm">
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
            <Link to="https://xd.adobe.com/view/2afcd91f-e249-4340-ac49-b7ba253c1748-7faf/?fullscreen&hints=off">
              <img
                className="mockupLap"
                src={kfmlap}
                alt="Mockup af mit eksamensprojekt fra 2. semester - Laptop"
              />
            </Link>
            <img
              className="mockupMob"
              src={kfmmob}
              alt="Mockup af mit eksamensprojekt fra 2. semester - Mobil"
            />
          </div>
        </div> */}

        {/*NIPPON*/}
        {/* <div id="nippon">
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
            <Link to="https://xd.adobe.com/view/78cf6335-36f6-44ec-8efd-520d28ebc2fc-2d9c/?fullscreen&hints=off">
              <img
                className="mockupLap"
                src={nipponlap}
                alt="Mockup af mit måltidskasseprojekt - Laptop"
              />
            </Link>
            <img
              className="mockupMob"
              src={nipponmob}
              alt="Mockup af mit måltidskasseprojekt - Mobil"
            />
          </div>
        </div> */}

        {/*URTEKRAM*/}
        {/* <div id="urtekram">
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
            <Link to="https://xd.adobe.com/view/04aedd00-c51e-4707-90f8-818264be9ce9-51fd/?fullscreen&hints=off">
              <img
                className="mockupLap"
                src={urtekramlap}
                alt="Mockup af mit eksamensprojekt fra 1. semester - Laptop"
              />
            </Link>
            <Link to="https://xd.adobe.com/view/5f81e4c6-35c0-442a-801a-3626d0a03f8f-0ad2/?fullscreen&hints=off">
              <img
                className="mockupMob"
                src={urtekrammob}
                alt="Mockup af mit eksamensprojekt fra 1. semester - Mobil"
              />
            </Link>
          </div>
        </div> */}
      </section>

      {/*KONTAKT*/}
      <section id="kontakt">
        <div className="toKolonner">
          <div id="kontaktImg">
            <img src={kontaktimg} alt="Billede af mig" />
          </div>

          <div id="kontaktTekst">
            <h1>kontakt</h1>
            <div id="kontaktInfo">
              <p>
                Hvis jeg virker som et godt match til jeres praktikantstilling,
                så kontakt mig endelig på følgende steder, så kan vi måske finde
                ud af noget.
              </p>
              <a href="mailto:rikkekodahl.dk">
                <img src={email} alt="Email ikon" />
                <p>rikkekodahl@live.dk</p>
              </a>

              <a href="https://www.linkedin.com/in/rikke-kodahl-84653524a/">
                <img src={linkedin} alt="LinkedIn ikon" />
                <p>Besøg mig på LinkedIn</p>
              </a>

              <a href="https://www.facebook.com/rikke.kodahl">
                <img src={facebook} alt="Facebook ikon" />
                <p>Find mig på facebook</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
