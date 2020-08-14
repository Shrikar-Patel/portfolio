import React from "react";
import Skills from "./Skills";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card'

class About extends React.Component {

 ControlledTabs(props) {


    return (
<Tabs className=' border-dark mb-3'defaultActiveKey="language" id="uncontrolled-tab-example" variant='pills'>
  <Tab className=' border-dark mb-3' eventKey="language" title="Language">
    
    <Skills className=' border-dark mb-3'title='Languages' data={props.data.data.skills}></Skills>
  </Tab>
  <Tab className=' border-dark mb-3' eventKey="framework" title="Framework">
  <Skills title='Frameworks' data={props.data.data.frameworks}></Skills>
  </Tab>
  <Tab className=' border-dark mb-3' eventKey="database" title="Database">
  <Skills title='Databases' data={props.data.data.databases}></Skills>
    
  </Tab>
</Tabs>
    );
  }

  render() {

    return (
      <div id="about">
        <div className="container">
          <Card border="dark">
         
            <Card.Header>
            
              <h1 className="display-4"> About Me</h1>
            
            </Card.Header>
        
         <Card.Body>
          <div className="card-group">
          <div className="card border-dark mb-3">
              <div className="card-header">
                <h2>Education</h2>
              </div>
              <div className="card-body">
              <img className='img-thumbnail' width="50px"  src={require('../images/rutgers.png')} alt="Project"></img>
              <hr className='black-border'></hr>
              <span style={{fontStyle: "bold"}}><big><b>Rutgers University</b></big></span>
                <br></br>
                <span style={{fontStyle: "italic"}}>Class of 2021</span>
                <br></br>
                <b>Major</b>: B.S. Computer Science
                <br></br>
               <b>Minor</b>: Economics, Mathematics
               <br></br>
               
               
              </div>
            </div>
            <div className="card border-dark mb-3">
              <div className="card-header">
                <h2>Description</h2>
              </div>
              <div className="card-body">
                <span id="about-me">{this.props.data.aboutme}</span>
              </div>
            </div>
            <div className="card border-dark mb-3">
              <div className="card-header">
                <h2>Favorites</h2>
              </div>
              <div className="card-body">
                <span id="about-me">
                <b>Favorite Shows</b>
                <br></br>
                  
                   Friends, Parks and Rec, The Office, Sherlock, honestly, too many to name.
                   <br></br>
                
                <b>Favorite Sports</b>
                <br></br>
                  Basketball, Football, Soccer, Ultimate Frisbee
                  <br></br>
                
                <b>Favorite Activites</b>
                <br></br>
                   Hiking, Reading, Boardgames (Catan, Resistance, etc.)
                </span>
              </div>
            </div>
          </div>
          <hr></hr>
         <this.ControlledTabs data = {this.props}></this.ControlledTabs>
         </Card.Body>
         </Card>
        </div>
      </div>
    );
  }
}

export default About;
