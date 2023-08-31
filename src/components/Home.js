import logo from "./../signature.svg";
import image from "./../logo192.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Software Engineer
        </p>
        <Link
          className="Home-link"
          to="/work"
        >
          Work
        </Link>
      </header>
      <div>
        <img src={logo} alt="logo" />
        <div>
          About Me
        </div>
        <div>
          Hello, my name is Dominick Tolomeo and I am a 4th year Computer Science Student at Oregon State University.
        </div>
      </div>
    </div>
  )
}