import Settings from "./images/Oneboard3.PNG"
import Welcome from "./images/Oneboard4.PNG"
import Home from "./images/OneboardHome.PNG";
import Participants from "./images/Oneboard2.PNG"
import { Link } from "react-router-dom";

export default function OneBoard() {
  return (
    <div className="project-body">
      <div className="overview">
        <h2 className="header">
          Project Overview
        </h2>
        <div>
          The project descriptions below outline contributions I made to Oneboard's online whiteboard product.
          The key contributions I made to this project was the creation of the participant tab, list, and features.
        </div>
      </div>
      <div className="container">
        <div className="image">
          <img src={Home} alt="" />
        </div>
        <div className="col">
          <h2 className="list header">
            What is Oneboard?
          </h2>
          <p>
            Oneboard is an online learning tool created to assist students and teachers in the remote learning enviornment.
            It was initially just an online whiteboard, created as a small hackathon project by students that were inspired to correct the faults of
            remote learning, but has since grown into a multi-feature application.  While the focus is still the infinite, high resolution
            whiteboard, it also includes features such as a chat, record playback, and video/audio call.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="col"> 
          <h2 className="header">
            My Contributions
          </h2>
          <p>
            My main task while working at Oneboard was to create the Participants tab and counter, which included most functionality
            and features included within the draggable tab.  Functionality included dynamic updating of Live users and Live user counters,
            the ability to assign roles given correct permissions, and a search bar for participants on the board.  For example if the owner
            of the board was to change the role of a user from an editor to a viewer, they would change this role status via interacting with
            the participant list.
          </p>
        </div>
        <div className="img-container2">
          <img src={Welcome} alt="" />
          <img src={Settings} alt="" />
          <img src={Participants} alt="" />
        </div>
      </div>
      <div className="learned">
        <div className="col">
          <h2 className="list header">
            What I learned
          </h2>
          <ul>
            <li>
              Deployment of front end infrastructure for a large scale online product using React
            </li>
            <li>
              Proficiency in front end development utilizing a React framework
            </li>
            <li>
              Utilizing github and branch managment for a large scale application via the terminal
            </li>
            <li>
              How to create intuitive designs for application features
            </li>
          </ul>
        </div>
      </div>
      <Link className="next-project" to="/portfolio/EthicEat">
        Next Project
      </Link>
    </div>
  )
}