import React from "react";

function SkillList(props) {
  const data = props.data.data;
  return (
    <div className="bruh">
      {data.map((element) => (
        <div key={element.skillname}>
          <div className="progress" style={{ height: "20px" }}>
            <div
              className={element.class}
              role="progressbar"
              style={{ width: element.percentage + "%" }}
              aria-valuenow={element.percentage}
              aria-valuemin="0"
              aria-valuemax="100"
              height="50px"
            >
              {element.skillname}
            </div>
          </div>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

function Skills(props) {
  return (
    <div id="skills">
      <div className="card border-dark mb-3">
        <div className="card-title" style={{ paddingTop: "10px" }}>
          {/*<h1 style={{color:"white"}}>{props.title}</h1>*/}
        </div>
        <div className="card-body">
          <SkillList data={props}></SkillList>
        </div>
      </div>
    </div>
  );
}

export default Skills;
