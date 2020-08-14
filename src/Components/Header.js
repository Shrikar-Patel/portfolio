import React from "react";
import { Container, Jumbotron, Navbar, Nav, Image } from "react-bootstrap";

const first_str = "Hey, My name is Shrikar Patel."
const second_str ="Aspiring Software Engineer."
const third_str  ="Student at Rutgers University."
const fourth_str = "Welcome to my Portfolio."

function Header(props) {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <a className="navbar-brand" href="#home">Portfolio</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#experience">Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects">Projects</a>
      </li>
    </ul>
  </div>
</nav>

    
  );
}

export default Header;
