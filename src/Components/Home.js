import React from "react";
import { Container, Jumbotron, Navbar, Nav, Image, Row, Col, Button } from "react-bootstrap";
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
                

              </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
