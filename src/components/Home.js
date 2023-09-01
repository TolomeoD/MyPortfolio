import logo from "./../images/signature.svg";
import profile from "./../images/IMG_8625.jpg";
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
          to="/portfolio"
        >
          Portfolio
        </Link>
      </header>
      <div className="About-me-container">
        <div className="profile">
          <img src={profile} alt="logo" />
        </div>
        <div className="About-me">
          <div className="title">
            Who is this guy?
          </div>
          <p>
            Hello, my name is Dominick Tolomeo and I am currently a 4th year Computer Science major at Oregon State University.
            I have previously worked for CSC and Oneboard as a UI/UX Developer.  My interests include artificial intelegence,
            game design, data science, and web development.  
          </p>
        </div>
      </div>
    </div>
  )
}