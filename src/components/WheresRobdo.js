import HomeMock from "./images/RobdoMock.png"
import GalleryMock from "./images/gallery.png"
import Home from "./images/Where'sRobdo.PNG";
import Gallery from "./images/Where'sRobdo2.PNG";
import Topics from "./images/topics.PNG"
import { Link } from "react-router-dom";

export default function WheresRobdo() {
  return (
    <div className="project-body">
      <div className="overview">
        <h2 className="header">
          Project Overview
        </h2>
        <div>
          The following web-app was created as a final group project for Oregon State University's
          Web-Development class.  Students were allowed full creative freedom, and the project itself is
          meant to be a culmination of all the lessons taught in this class 
        </div>
      </div>
      <div className="container">
        <div className="image">
          <img src={Topics} alt="" />
        </div>
        <div className="col">
          <h2 className="list header">
            Criteria for the Project
          </h2>
          <ul>
            <li>
              The app uses HTML and CSS to implement a well-designed client interface
            </li>
            <li>
              The app uses client-side JS to enable relevant user interactions with the client interface
            </li>
            <li>
              The app is served using a Node.js-based (or other approved) serving stack
            </li>
            <li>
              The app dynamically generates pages based on data stored permanently in a back end data store, such as MongoDB (or even a JSON file)
            </li>
            <li>
              The app’s client interface communicates asynchronously with the app’s server to create, read, update, and/or delete content in the back end data store
            </li>
            <li>
              Utilize all course topics listed to the left
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="col"> 
          <h2 className="header">
            Initial Idea
          </h2>
          <p>
            Given the nature of this project we wanted to create something entirely unique, and landed on the idea of building a game
            as we all shared an interest in gaming. Since the project itself was for a Web-Dev class, we didn't want to get to carried
            away with the complexity of the game and decided to build our website around a Where's Waldo-esque game because of its simplicity 
            and replayability. We also wanted to show appreciation for our Professor, Rob, and given his permission we were allowed to
            incorperate him into our project. To the left are our initial mock-ups for the home and gallery pages.  The home page would allow
            users to play, like, and randomly generate a new puzzle.  We also wanted to use a gallery page to
            fulfill the backed requirements of the app, and intended to show users the most popular puzzles.
          </p>
        </div>
        <div className="img-container">
          <img src={HomeMock} alt="" />
          <img src={GalleryMock} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="img-container">
          <img src={Home} alt="" />
          <img src={Gallery} alt="" />
        </div>
        <div className="col"> 
          <h2 className="header">
            Final Version
          </h2>
          <p>
            Our group only had a few deviations from our intial idea and mock-ups.  We opted for users to be able to see all puzzles that they
            liked in their gallery, and included how many likes each puzzle had instead of showcasing the most popular puzzles.  We also deciced 
            against a carousel design for the gallery and made it grid based for enhanced usability.  
          </p>
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
      <Link className="next-project" to="/MyPortfolio/portfolio/DomainManager">
        Next Project
      </Link>
    </div>
  )
}