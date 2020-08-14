import React from 'react';
import {Component,useState} from "react";
import Project from './Project'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Container'
import { Card, CardColumns, Jumbotron } from "react-bootstrap";
import ItemsCarousel from 'react-items-carousel';
import Hackathon from './Hackathon';




class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex:0
    };
  }

  setActiveItemIndex = (value) => {
    this.setState({ activeItemIndex: value });
  }

  


  render() {
    const { activeItemIndex } = this.state;

    const chevronWidth = 40;
    return (
      <div id='projects'>
        <div className='container'>
          <Card>
            <Card.Header>

          
      <h1 className='display-4'> Projects</h1>
      </Card.Header>
      <Card.Body>

     
      <div style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          requestToChangeActive={this.setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={3}
          gutter={20}
          leftChevron={<button>{"<"}</button>}
          rightChevron={<button>{">"}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
        {this.props.data.projects.map((exp) => (
       <div>
        < Project
        
          name={exp.name}
          date={exp.date}
          description={exp.description}
          link={exp.link}
          skills={exp.skills}
          type={exp.type}
          image={exp.image}
        ></Project>
        </div>
      ))}
        </ItemsCarousel>
      </div>
      </Card.Body>
      </Card>
      </div>
      
      </div>
    );
  }
}

export default Projects;
