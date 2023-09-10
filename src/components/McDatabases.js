import Database1 from "./images/McDatabases3.PNG";
import Database2 from "./images/McdatabasesDBcode.PNG";
import Web1 from "./images/McDatabases.PNG";
import { Link } from "react-router-dom";

export default function McDatabases() {
  return (
    <div className="project-body">
      <div className="overview">
        <h2 className="header">
          Project Overview
        </h2>
        <div>
          The following database driven web-app was created as a final group project for Oregon State University's
          Databases class. This project is a demonstration of proficiency with creating, interacting, and understanding a database with MariaDB and SQL.
        </div>
      </div>
      <div className="container">
        <div className="image">
          <img src={Database2} alt="" />
          <img src={Database1} alt="" />
        </div>
        <div className="col">
          <h2 className="list header">
            Criteria for the Project
          </h2>
          <ul>
            <li>
              A fully functional database designed using MariaDB
            </li>
            <li>
              GET, UPDATE, and DELETE functionality for every table in the database
            </li>
            <li>
              Cascading functionality for all table udates/deletions, including composite tables
            </li>
            <li>
              At least one M:M relationship within tables
            </li>
            <li>
              An intuitive front end for users to interact with the database and view changes live
            </li>
          </ul>
          <h2 className="list header">
            Our Database
          </h2>
          <p>
            The Database used for this project was created using knowledge from this course.  The project asked students to create a database for an arbitrairy client and allowed for full creative expression, so we decided to theme our database around the McDonald's mobile app. We then created
            example data to fill each table, and included cascading functionality on updates and deletes.  The relational database
            utilized a 3NF design to simplify data management, avoid data anomalies, and ensure referential integrity.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="col"> 
          <h2 className="header">
            The Finished Web-App
          </h2>
          <p>
            Our final web-application included basic syling for usability, and tabs that corresponded to each of the tables in the database.
            For each tab on the website the entries in the corresponding table were listed followed by interactable elements for inserting, updating,
            or deleting entries in that table.  The effects would be shown to cascade in another table was openned, and changes made via the UI
            were permanently relfected in the database. 
          </p>
        </div>
        <div>
          <img src={Web1} alt="" />
        </div>
      </div>
      <div className="learned">
        <div className="col">
          <h2 className="list header">
            What I learned
          </h2>
          <ul>
            <li>
              How to build a database driven web application
            </li>
            <li>
              How to build a database using SQL and MariaDB
            </li>
            <li>
              How to query a GET, UPDATE, and DELETE requers using SQL
            </li>
            <li>
              How to design a 3NF database to mitigate anomalies
            </li>
          </ul>
        </div>
      </div>
      <Link className="next-project" to="/MyPortfolio/portfolio/Where'sRobdo">
        Next Project
      </Link>
    </div>
  )
}