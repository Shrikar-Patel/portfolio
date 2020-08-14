import React from "react";
import {

  Card
} from "react-bootstrap";


function Work(props) {
    const {title, dateRange, description, position} = props;
  return (
    <Card border='dark'>
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
 



        
            <ul className='list-group' style={{ textAlign: "left" }}>
                {description.map((point) =>
                <li key={point} className='list-group-item'>
               
                {point}
                
                </li>
                )}
            </ul>
        
      </Card.Body>
    </Card>
  );
}

export default Work;
