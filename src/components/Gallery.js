import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <ul>
      <li>
        <Link to="/work/DomainManager">Domain Manager</Link>
      </li>
      <li>
        <Link to="/work/Oneboard">OneBoard</Link>
      </li>
      <li>
        <Link to="/work/Where'sRobdo">Where's Robdo</Link>
      </li>
      <li>
        <Link to="/work/EthicalEats">Ethical Eats</Link>
      </li>
      <li>
        <Link to="/work/McDatabases'">McDatabases'</Link>
      </li>
    </ul>
  )
}