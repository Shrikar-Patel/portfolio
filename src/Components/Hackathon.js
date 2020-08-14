import React from "react";
import { Card } from "react-bootstrap";

function Hackathon(props) {
  const { name, date, skills, description, link, image, award } = props;
  return (
    <Card border="dark">
      <Card.Header>
        <div id="hack-header">
          <h3>{name}</h3>
          <span>{date}</span>
        </div>
      </Card.Header>
      <Card.Body>
        <img
          className="img-thumbnail"
          width="300px"
          variant="top"
          src={require("../images/" + image)}
          alt="Project"
        ></img>

        <Card.Text>
          <br></br>
          <span style={{ fontStyle: "italic", textDecoration: "underline" }}>
            {description}
          </span>
          <br></br>
          <span style={{ fontStyle: "bold" }}>
            <b>Technology Used:</b> {skills.join(", ")}
          </span>
          <br></br>
          <span>
            <b>Award:</b> {award}
          </span>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <a className="btn btn btn-dark" href={link} role="button">
          {" "}
          View Project{" "}
        </a>
      </Card.Footer>
    </Card>
  );
}

export default Hackathon;
