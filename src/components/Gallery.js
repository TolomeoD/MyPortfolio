import About from "./About";
import Carousel from "./Carousel";
import WR1 from "./images/Where'sRobdo.PNG";
import WR2 from "./images/Where'sRobdo2.PNG";
import WR3 from "./images/Where'sRobdo3.PNG";
import OB1 from "./images/Oneboard.PNG";
import OB2 from "./images/Oneboard2.PNG";
import OB3 from "./images/Oneboard3.PNG";
import EE1 from "./images/EthicalEats.PNG";
import EE2 from "./images/EthicalEats2.PNG";
import EE3 from "./images/EthicalEats3.PNG";
import MD1 from "./images/McDatabases.PNG";
import MD3 from "./images/McDatabases3.PNG";
import DM1 from "./images/CSClogo.png"
import DM2 from "./images/DomainManager.jpg"
import { Link } from "react-router-dom";

export default function Gallery() {
  const WRs = [WR1, WR2, WR3]
  const OBs = [OB1, OB2, OB3]
  const EEs = [EE1, EE2, EE3]
  const MDs = [MD1, MD3]
  const DMs = [DM1, DM2]
  return (
    <>
      <ul className="Gallery">
      <li className="Card">
          <div className="image-container">
            <Carousel images={WRs} to={"/portfolio/Where'sRobdo"}/>
          </div>
          <Link to="/portfolio/Where'sRobdo">
            <div className="Card-title">
              Where's Robdo
            </div>
            <p>
              Where's waldo-esque game created as a final project for Oregon State University's Web Dev class.
              This game invovles finding an image on a variety of randomly generated backgrounds.  
            </p>
          </Link>
        </li>
        <li className="Card">
          <div className="image-container">
            <Carousel images={DMs} to={"/portfolio/DomainManager"}/>
          </div>
          <Link to="/portfolio/DomainManager">
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
            <Carousel images={OBs} to={"/portfolio/Oneboard"}/>
          </div>
          <Link to="/portfolio/Oneboard">
            <div className="Card-title">
              Oneboard
            </div>
            <p>
              Designed and developed multiple UI components utilizing React and Redux for Oneboard,
              contributing to the company's realtime, collaborative whiteboard.
            </p>
          </Link>
        </li>
        <li className="Card">
          <div className="image-container">
            <Carousel images={EEs} to={"/portfolio/EthicEat"}/>
          </div>
          <Link to="/portfolio/EthicEat">
            <div className="Card-title">
              Ethical Eats
            </div>
            <p>
              App designed to display food that fit your ethical diet.  Includes features for ingredient and recipe searches, 
              and allows users to save ingredients or recipies for later use.
            </p>
          </Link>
        </li>
        <li className="Card">
          <div className="image-container">
            <Carousel images={MDs} to={"/portfolio/McDatabases"}/>
          </div>
          <Link to="/portfolio/McDatabases">
            <div className="Card-title">
              McDatabases
            </div>
            <p>
              Database driven website created as a final project for Oregon State University's Databases class.
              Created a fictional McDonald's application where users can manipulate a database utilizing MariaDB.
            </p>
          </Link>
        </li>
      </ul> 
      <About />
    </>
  )
}