import React from "react";
import Work from "./Work";
import Hackathon from "./Hackathon";
import {
  Tabs,
  Tab,
CardColumns

} from "react-bootstrap";


function GetWork(props) {
  const work = props.props;
  console.log(work)
  return (
    <div>
      {work.map((exp) => (
        <Work
        key={exp.title}
          title={exp.title}
          dateRange={exp.dateRange}
          description={exp.description}
          image={exp.image}
          position={exp.position}
        ></Work>
      ))}
    </div>
  );
}
function GetHackathons(props) {
    console.log(props)
  const hackathons = props.props;
  return (
    <div>
      {hackathons.map((exp) => (
        <Hackathon
        key={exp.date}
          name={exp.name}
          date={exp.date}
          description={exp.description}
          link={exp.link}
          skills={exp.skills}
          award={exp.award}
          image={exp.image}
        ></Hackathon>
      ))}
    </div>
  );
}

function ControlledTabs(props) {
  const { work, hackathons, extra } = props;
  return (
    <Tabs
      className=" border-dark mb-3 experience-tabs"
      defaultActiveKey="work"
      variant="pills"
    >
      <Tab className=" border-dark mb-3" eventKey="work" title="Work">
        <GetWork props={work}></GetWork>
      </Tab>
      <Tab
        className=" border-dark mb-3"
        eventKey="hackathons"
        title="Hackathons"
      >
          <CardColumns>
          <GetHackathons props={hackathons}></GetHackathons>
          </CardColumns>
      </Tab>

      <Tab className=" border-dark mb-3" eventKey="Extra" title="Extra">
        <GetWork props={extra}></GetWork>
      </Tab>
    </Tabs>
  );
}

function Experience(props) {
  return (
    <div id="experience">
      <div className="container">
        <div className="card border-dark mb-3">
          <div className="card-header">
            <h1 className="display-4"> Experience</h1>
          </div>
          <div className="card-body">
            <div className="card-title"></div>
            <div className="card-text">
              <ControlledTabs
                work={props.data.work}
                hackathons={props.data.hackathons}
                extra={props.data.extra}
              ></ControlledTabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
