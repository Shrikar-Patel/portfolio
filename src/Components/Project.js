import React from "react";
import {
  Container,
  Jumbotron,
  Navbar,
  Nav,
  Image,
  Card, Button, Col, Row, Alert
} from "react-bootstrap";

function checkAlert(link){
  console.log(link)
  if (link=== undefined){
    
    return(
      alert(
      
      'School Project - Contact for more details!'
    )
    );
  }
}



function Project(props) {
    const {name, date,skills, description, type,  project, link, image} = props;
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
                  <text><b>Type:</b> {type}</text>
    
        </Card.Text>
      </Card.Body>
        <Card.Footer>
      <a class="btn btn btn-dark" href={link} role="button" onClick={()=>checkAlert(link)}> View Project </a>
      <br></br>

      </Card.Footer>
    </Card>
   
  );
}

export default Project;
