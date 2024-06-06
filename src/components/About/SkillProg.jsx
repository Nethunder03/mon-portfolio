import React from "react";
import { Container } from "react-bootstrap";

const getColorClass = (level) => {
  if (level >= 80) {
    return "high-level";
  } else if (level >= 40) {
    return "medium-level";
  } else {
    return "low-level";
  }
};

const SkillProgressBar = ({ skill, level }) => {
  const colorClass = getColorClass(level);

  return (
    <Container>
      <div className="bar">
        <h2 className="skill-name">{skill} :</h2>
        <div className={`progress-bar-container ${colorClass }`}>
          <div className="progress-bar" style={{ width: `${level}%` }}></div>
        </div>
      </div>
    </Container>
  );
};

export default SkillProgressBar;
