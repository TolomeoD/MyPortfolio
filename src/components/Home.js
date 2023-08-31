import logo from "./../signature.svg";
import image from "./../logo192.png";
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
          to="/work"
        >
          Work
        </Link>
      </header>
      <div className="About-me-container">
        <img src={image} alt="logo" />
        <div className="About-me">
          <div className="title">
            About Me
          </div>
          <p>
            Hello, my name is Dominick Tolomeo and I am a 4th year Computer Science Student at Oregon State University.
          </p>
        </div>
      </div>
    </div>
  )
}