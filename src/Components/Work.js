import React from "react";
import {
  Container,
  Jumbotron,
  Navbar,
  Nav,
  Image,
  Card,Col
} from "react-bootstrap";


function Work(props) {
    const {title, dateRange, description, skills, image, position} = props;
  return (
    <Card>
      <Card.Header>
        <div id="work-header">
          <h3 style={{ textAlign: "left" }}>{title}</h3>
          <div style={{ textAlign: "left" }}>
          <span>{position}</span>
          <br></br>
          <span>{dateRange}</span>
          </div>

          
        </div>
    
      </Card.Header>
      <Card.Body>
 



        <Card.Text>
            <ul className='list-group' style={{ textAlign: "left" }}>
                {description.map((point) =>
                <li className='list-group-item'>
               
                {point}
                
                </li>
                )}
            </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Work;
