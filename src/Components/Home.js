import React from "react";
import { Container, Jumbotron, Navbar, Nav, Image, Row, Col, Button } from "react-bootstrap";
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


function Home(props) {
  const data = props.data;
  return (
    <div id='home'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <div className='typewriter'>
              <h1 className='display-1'>
                Shrikar Patel
              </h1>
              <h1 className='display-4'>
                <Typewriter
                  options={{
                    strings: data.role,
                    autoStart: true,
                    loop: true,
                  }}>

                </Typewriter>
                
              </h1>
              <hr>
              </hr>

              <a href='#about' type="button" className="btn btn-light">View My Work</a>
                  <hr></hr>
              <Row >
                <Col>
                <div>
                  <a style={{color:"white"}} href='https://www.linkedin.com/in/shrikarpatel/'>
                <FontAwesomeIcon size ='4x' icon={faLinkedin}>
          
                </FontAwesomeIcon>
                </a>
                {"              "}
                <a style={{color:"white"}} href='https://github.com/Shrikar-Patel'>
                <FontAwesomeIcon size ='4x' icon={faGithub}>

              
              </FontAwesomeIcon>
              </a>
              </div>
              </Col>
              </Row>
                

              </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
