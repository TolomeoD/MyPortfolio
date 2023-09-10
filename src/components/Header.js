import { Link } from "react-router-dom"

export default function Header(props) {
  const path = window.location.pathname
  console.log(path)
  return (
    <div className="Header">
      <Link to={path === "/MyPortfolio/portfolio" ? "/MyPortfolio" : "/MyPortfolio/portfolio"} >
        {path === "/MyPortfolio/portfolio" ? "Home" : "Portfolio"}
      </Link>
      <div className={path === "/MyPortfolio/portfolio" ? "Header-title" : "Header-title smaller"}>
        {props.title}
      </div>
    </div>
  )
}
