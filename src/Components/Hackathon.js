import React from "react";
import {
  Container,
  Jumbotron,
  Navbar,
  Nav,
  Image,
  Card, Button, Col, Row
} from "react-bootstrap";



function Hackathon(props) {
    const {name, date,skills, description, project, link, image, award} = props;
  return (
      
    <Card>
      <Card.Header>
        <div id="hack-header">
          <h3>{name}</h3>
          <span>{date}</span>
        </div>
      </Card.Header>
      <Card.Body>
          <img classname='img-thumbnail' width="300px" variant="top" src={require('../images/'+ image)} alt="Project">

          </img>

        <Card.Text>
            <br></br>
            <text style={{fontStyle:"italic", textDecoration:"underline"}}>{description}</text>
            <br></br>
            <text style={{fontStyle:"bold"}}><b>Technology Used:</b> {skills.join(", ")}</text>
            <br></br>
            <text><b>Award:</b> {award}</text>
    
        </Card.Text>
      </Card.Body>
        <Card.Footer>
      <a class="btn btn btn-dark" href={link} role="button"> View Project </a>
      </Card.Footer>
    </Card>
   
  );
}

export default Hackathon;
