import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "C/C++/JS",
    level: "Advance",
    color: "skyBlue",
  },
  {
    skill: "HTML+CSS",
    level: "Advance",
    color: "Lavender",
  },
  {
    skill: "React",
    level: "Intermediate",
    color: "Orange",
  },
  {
    skill: "Node.js",
    level: "Beginner",
    color: "Orangered",
  },
  {
    skill: "SQL",
    level: "Advance",
    color: "Yellow",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="IMG_2126.png " alt="Avinash Kumar" />;
}

function Intro() {
  return (
    <div>
      <h1>Avinash Kumar</h1>
      <p fontSize="15px">
        An aspiring programmer and developer who has a big ambition regarding
        career goalsandthetrajectoryoflife.My hobbies include watching sports,
        reading novels and listening to various types of music from around the
        world.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skills skillObj={skill} />
      ))}

      {/* <Skills skills="C/C++/JS" emoji="💪" color="red" />
      <Skills skills="HTML+CSS" emoji="💪" color="grey" />
      <Skills skills="React" emoji="💪" color="" color="Yellow" />
      <Skills skills="Node.js" emoji="👶" color="lavender" />
      <Skills skills="SQL" emoji="💪" color="orange" /> */}
    </div>
  );
}

function Skills({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      {skillObj.level == "Advance"
        ? "💪"
        : skillObj.level == "Beginner"
        ? "👶"
        : "👍"}
      {/* <span>{props.emoji}</span> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
