import React from "react";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";


function ProjectItem({ name, about, technologies }) {
  
  return (
    <div className="project-item">
      <NavBar/>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <Home />
        <About />
        {technologies.map((technologies, projects) => (
          <span key={projects.technologies}>{technologies}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
