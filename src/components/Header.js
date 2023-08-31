import { Link } from "react-router-dom"

export default function Header(props) {
  const path = window.location.pathname
  return (
    <div className="Header">
      <Link to={path === "/work" ? "/" : "/work"} >
        {path === "/work" ? "Home" : "Work"}
      </Link>
      <div className={path === "/work" ? "Header-title" : "Header-title smaller"}>
        {props.title}
      </div>
    </div>
  )
}
