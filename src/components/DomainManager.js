import HomeMock from "./images/RobdoMock.png"
import GalleryMock from "./images/gallery.png"
import { Link } from "react-router-dom";

export default function DomainManager() {
  return (
    <div className="project-body">
      <div className="overview">
        <h2 className="header">
          Project Overview
        </h2>
        <div>
          The following describes the contributions I made to CSC's Domain Manager system.
          The key features I assisted with were the bulk search, truncation, and domain deletion.
        </div>
      </div>
      <div className="container">
        <div className="col"> 
          <h2 className="header">
            Initial Idea
          </h2>
          <p>
            Given the nature of this project we wanted to create something entirely unique, and landed on the idea of building a game
            because we all shared an interest in gaming. Since the project itself was for a Web-Dev class, we didn't want to get to carried
            away with the complexity of the game and decided to build our website around a Where's Waldo-esque game because of its simple 
            and replayable nature. We also wanted to show appreciation for our Professor, Rob, and given his permission we were allowed to
            incorperate him into our project. To the left are our initial mock-ups for the home and gallery pages.  The home page would allow
            users to play and like a puzzle, and had a button to randomly generate a new puzzle.  We also wanted to use a gallery page to
            fulfill the backed requirements of the app, and intended to show users the puzzles that have received the most likes.
          </p>
        </div>
        <div className="img-container">
          <img src={HomeMock} alt="" />
          <img src={GalleryMock} alt="" />
        </div>
      </div>
      <div className="learned">
        <div className="col">
          <h2 className="list header">
            What I learned
          </h2>
          <ul>
            <li>
              How to interact with a database via express
            </li>
            <li>
              Learned to create a new image from two pre-existing ones
            </li>
            <li>
              How to track pointer location on the viewport
            </li>
            <li>
              Utilizing github to work with a team
            </li>
            <li>
              How UI/UX design and mockups can impact development
            </li>
            <li>
              Practices needed to make intuitive syling
            </li>
            <li>
              Increased proficiency with HTML, CSS, and JS
            </li>
          </ul>
        </div>
      </div>
      <Link className="next-project" to="/portfolio/Oneboard">
        Next Project
      </Link>
    </div>
  )
}