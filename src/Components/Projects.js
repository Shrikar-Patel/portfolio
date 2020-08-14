import React from "react";
import { Component } from "react";
import Project from "./Project";

import { Card, CardColumns } from "react-bootstrap";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex: 0,
    };
  }

  setActiveItemIndex = (value) => {
    this.setState({ activeItemIndex: value });
  };

  render() {
    return (
      <div id="projects">
        <div className="container">
  
          <Card border="dark">
            <Card.Header>
              <h1 className="display-4"> Projects</h1>
            </Card.Header>
            <Card.Body>
              
            <CardColumns>
                  {this.props.data.projects.map((exp) => (
                    
                      <Project
                      key={exp.name}
                        name={exp.name}
                        date={exp.date}
                        description={exp.description}
                        link={exp.link}
                        skills={exp.skills}
                        type={exp.type}
                        image={exp.image}
                      ></Project>
                      
                
                  ))}
                  </CardColumns>
                  
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Projects;
