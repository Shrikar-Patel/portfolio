import React from "react";
import { Card } from "react-bootstrap";

function checkAlert(link) {
  console.log(link);
  if (link === undefined) {
    return alert("School Project - Contact for more details!");
  }
}

function Project(props) {
  const { name, date, skills, description, type, link, image } = props;
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
            <b>Type:</b> {type}
          </span>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <a
          className="btn btn btn-dark"
          href={link}
          role="button"
          onClick={() => checkAlert(link)}
        >
          {" "}
          View Project{" "}
        </a>
        <br></br>
      </Card.Footer>
    </Card>
  );
}

export default Project;
