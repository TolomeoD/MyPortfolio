import image from "./../logo192.png"
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <ul className="Gallery">
      <li className="Card">
        <Link to="/work/DomainManager">
          <img src={image} className="Gallery-image" alt="logo" />
          <div className="Card-title">
            Domain Manager
          </div>
          <p>
            Assisted in the creation of a new online domain management platform. 
            Contributed as a member of the web development team to enhance user interface and user experience.
          </p>
        </Link>
      </li>
      <li className="Card">
        <Link to="/work/Oneboard">
          <img src={image} className="Gallery-image" alt="logo" />
          <div className="Card-title">
            Oneboard
          </div>
          <p>
            Designed and developed multiple UI components utilizing React and Redux for Oneboard,
            contributing to the company's web application enhancements.
          </p>
        </Link>
      </li>
      <li className="Card">
        <Link to="/work/Where'sRobdo">
          <img src={image} className="Gallery-image" alt="logo" />
          <div className="Card-title">
            Where's Robdo
          </div>
          <p>
            Where's Robdo esque game.
          </p>
        </Link>
      </li>
      <li className="Card">
        <Link to="/work/EthicalEats">
          <img src={image} className="Gallery-image" alt="logo" />
          <div className="Card-title">
            Ethical Eats
          </div>
          <p>
            App designed to display food that fit your ethical diet.
          </p>
        </Link>
      </li>
      <li className="Card">
        <Link to="/work/McDatabases'">
          <img src={image} className="Gallery-image" alt="logo" />
          <div className="Card-title">
            McDatabases'
          </div>
          <p>
            Database driven website.
          </p>
        </Link>
      </li>
    </ul> 
  )
}