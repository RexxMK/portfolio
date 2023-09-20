import logo from "../images/kologo.svg";

export default function MobilLogo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="logoMobil">
      <a onClick={scrollToTop}>
        <img src={logo} alt="Mit logo" />
      </a>
    </div>
  );
}
