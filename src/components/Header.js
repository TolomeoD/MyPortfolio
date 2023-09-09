import { Link } from "react-router-dom"

export default function Header(props) {
  const path = window.location.pathname
  return (
    <div className="Header">
      <Link to={path === "/portfolio" ? "/" : "/portfolio"} >
        {path === "/portfolio" ? "Home" : "Portfolio"}
      </Link>
      <div className={path === "/portfolio" ? "Header-title" : "Header-title smaller"}>
        {props.title}
      </div>
    </div>
  )
}
