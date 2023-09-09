import Saved from "./images/EthicalEats3.PNG"
import Home from "./images/EthicalEats.PNG";
import Diet from "./images/EthicalEats2.PNG";
import Topics from "./images/topics2.PNG"
import { Link } from "react-router-dom";

export default function EthicEat() {
  return (
    <div className="project-body">
      <div className="overview">
        <h2 className="header">
          Project Overview
        </h2>
        <div>
          The following project was created as a final group project for Oregon State University's
          Software Engineering class.  This project is meant to combine student's pre-existing Web-Development knowledge
          and an agile workflow to tackle a health related issue.
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
              The app uses HTML and CSS to implement a well-designed UI
            </li>
            <li>
              The app uses client-side JS to enable relevant user interactions with the UI
            </li>
            <li>
              The app is served using a Node.js-based (or other approved) serving stack
            </li>
            <li>
              The app dynamically generates pages and information based on data stored permanently in a back end data store, such as MongoDB (or even a JSON file).
            </li>
            <li>
              The team has well documented sprints via Jira
            </li>
            <li>
              All topics course topics (shown to the left) have been utilized
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="col"> 
          <h2 className="header">
            Our Implementation
          </h2>
          <p>
            For our project we decided to create an application to store, save, and filter ingredients and recipes.  
            EthicEat was designed to allow users to find foods that fit their diet and ethical values.  The home page
            included a search bar that allowed users to search for a particular ingredient or recipe contained within our
            database.  Cards of the foods would dynamically be shown to the user as they typed in their query and included 
            a short description of the food, an indication for foods that don't fit their dietary restrictions, alternatives 
            for the given food, an "ethicallity score", and the ability to save the card for future use.  Users can also use a muli-ingredient search to find recipes containing all of their searched ingredients.   The "ethicallity 
            score" applied to foods was determined based on how the food was farmed/processed, the values and practices of
            the company that produced it, and the health benefits associated with the food.  This information was researched
            and calculated entirely by our team for each item in the database.
          </p>
        </div>
        <div className="img-container2">
          <img src={Home} alt="" />
          <img src={Diet} alt="" />
          <img src={Saved} alt="" />
        </div>
      </div>
      <div className="learned">
        <div className="col">
          <h2 className="list header">
            What I learned
          </h2>
          <ul>
            <li>
              How to create an interactive webpage with a mock-database backend
            </li>
            <li>
              Collaborative coding with teammates via github 
            </li>
            <li>
              How to merge and manage branch conflics through the terminal 
            </li>
            <li>
              Maintaining a truly ethical diet is very hard
            </li>
          </ul>
        </div>
      </div>
      <Link className="next-project" to="/portfolio/McDatabases'">
        Next Project
      </Link>
    </div>
  )
}