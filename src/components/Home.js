import logo from "./images/signature.svg";
import '@fontsource/vt323';
import { Link } from "react-router-dom";

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
      </header>
    </div>
  )
}
