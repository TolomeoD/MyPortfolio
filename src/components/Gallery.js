import Carousel from "./Carousel";
import image from "./../logo192.png"
import image2 from "./../signature.svg"
import { Link } from "react-router-dom";

export default function Gallery() {
  const images = [image,image2,image,image2]
  return (
    <ul className="Gallery">
      <li className="Card">
        <div className="image-container">
          <Carousel images={images} to={"/work/DomainManager"}/>
        </div>
        <Link to="/work/DomainManager">
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
        <div className="image-container">
          <Carousel images={images} to={"/work/Oneboard"}/>
        </div>
        <Link to="/work/Oneboard">
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
        <div className="image-container">
          <Carousel images={images} to={"/work/Where'sRobdo"}/>
        </div>
        <Link to="/work/Where'sRobdo">
          <div className="Card-title">
            Where's Robdo
          </div>
          <p>
          Where's waldo-esque game created as a final project for Oregon State University's CS290 class.
          This game invovles finding an image on a variety of randomly generated background.
          </p>
        </Link>
      </li>
      <li className="Card">
        <div className="image-container">
          <Carousel images={images} to={"/work/EthicalEats"}/>
        </div>
        <Link to="/work/EthicalEats">
          <div className="Card-title">
            Ethical Eats
          </div>
          <p>
            App designed to display food that fit your ethical diet.
          </p>
        </Link>
      </li>
      <li className="Card">
        <div className="image-container">
          <Carousel images={images} to={"/work/McDatabases'"}/>
        </div>
        <Link to="/work/McDatabases'">
          <div className="Card-title">
            McDatabases'
          </div>
          <p>
            Database driven website.
          </p>
        </Link>
      </li>
      <div>
        <Carousel images={images} to={""} />
      </div>
    </ul> 
  )
}