import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./nav.css";
import React from "react";
import { NavLink } from 'react-router-dom';  

export function NavBar() {
  return (
    <div>
      {/* Custom Boxes */}
      <div className="box1"></div>
      <div className="box2"></div>
      {/* Bootstrap Navbar with collapse functionality */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Brand or Logo */}
          <NavLink className="navbar-brand" to="/">Matthew Lasselle</NavLink>

          {/* Toggle button for collapsing navbar on smaller screens */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar content (links) */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Experience">Experience</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ProjectCards">Projects</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/matthew-lasselle-490259295/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/MatthewLasselleResume.pdf">Download Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </div>
  );
}
