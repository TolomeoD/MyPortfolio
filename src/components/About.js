import profile from "./../images/IMG_8625.jpg";
import React from "react";

export default function About() {
  return (
    <div className="About-me-container">
        <div className="profile">
          <img src={profile} alt="logo" />
        </div>
        <div className="About-me">
          <div className="title">
            Who is this guy?
          </div>
          <p>
            Hello, my name is Dominick Tolomeo and I am currently a 4th year Computer Science major at Oregon State University.
            I have previously worked for CSC and Oneboard as a UI/UX Developer.  My interests include artificial intelegence,
            game design, data science, and web development.  
          </p>
        </div>
      </div>
  )
}