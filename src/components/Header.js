import { Link } from "react-router-dom"

export default function Header() {
  const path = window.location.pathname
  return (
    <div className="Header">
      <Link to={path === "/work" ? "/" : "/work"} >
        {path === "/work" ? "Home" : "Work"}
      </Link>
      <h1>Work/Title</h1>
    </div>
  )
}
