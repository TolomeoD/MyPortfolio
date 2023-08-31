import { Link } from "react-router-dom"

export default function Header(props) {
  const path = window.location.pathname
  return (
    <div className="Header">
      <Link to={path === "/work" ? "/" : "/work"} >
        {path === "/work" ? "Home" : "Work"}
      </Link>
      <div className="Header-title">
        {props.title}
      </div>
    </div>
  )
}
