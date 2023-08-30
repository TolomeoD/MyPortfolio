import logo from "./../signature.svg";
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
    </div>
  )
}