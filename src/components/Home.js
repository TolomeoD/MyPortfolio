import logo from "./../images/signature.svg";
import '@fontsource/vt323';
import { Link } from "react-router-dom";
import { Link as ScrollDown }  from "react-scroll"

export default function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <div className="typewriter">
          <span>
            Software Engineer
          </span>
        </div>
        <Link
          className="Home-link"
          to="portfolio"
        >
          Portfolio
        </Link>
        <ScrollDown to="/about" spy={true} smooth={true} offset={50} duration={500} className="scroll-down" >
          <i className="fas fa-angles-down" />
        </ScrollDown>
      </header>
    </div>
  )
}
