import Logo from "./images/CSClogo.png"
import DM from "./images/DomainManager.jpg"
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
        <div className="img-container">
          <img src={Logo} alt="" />
        </div>
        <div className="col"> 
          <h2 className="header">
            What is CSC?
          </h2>
          <p>
            Corporation Service Company (CSC) is a buisness service provider that operates in a range of sectors including
            human resources, legal management, and digital brand services (DBS).  During my two internships with CSC I primarily
            worked under DBS in domain name services, which provided security and management systems for thier clients' domains.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="col"> 
          <h2 className="header">
            My Contributions
          </h2>
          <p>
            My primary role at CSC was on a development team, creating UI componets utilizing a React with Redux framework.  Our
            project was to create a new online domain managment system called Domain Manager, and the key features I created were
            aspects of the bulk search functionality for finding several domains at once, domain truncation to create a more 
            intuitive user experience, and some of the back-end processes for domain deletion. 
          </p>
        </div>
        <div className="img-container">
          <img src={DM} alt="" />
        </div>
      </div>
      <div className="learned">
        <div className="col">
          <h2 className="list header">
            What I learned
          </h2>
          <ul>
            <li>
              How to implement a large scale product using a React with Redux framework
            </li>
            <li>
              How to utilize agile methodologies to work effectively on a development team
            </li>
            <li>
              Managing interactions with a database for a large scale product
            </li>
            <li>
              Utilizing source tree to make branch managment more intuitive for a multi-team collaborative project
            </li>
            <li>
              Working with UI/UX designers to increase usability
            </li>
            <li>
              Good documentation, coding, and organization practices 
            </li>
            <li>
              Working with QA testers and creating effective unit tests for componets I created
            </li>
          </ul>
        </div>
      </div>
      <Link className="next-project" to="/MyPortfolio/portfolio/Oneboard">
        Next Project
      </Link>
    </div>
  )
}