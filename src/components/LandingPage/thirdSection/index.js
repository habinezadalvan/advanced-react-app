import React from "react";
import ProjectCard from "../../common/ProjectCard";

import db from '../../../config/dummydata';

const ThirdSection = () => {

  const displayProjectCards = () => {

    return db.map(project => {
      return <ProjectCard key={project.id} cover={project.image} name={project.name} description={project.description} site={project.link}/>
    })

  }

    return (
      <div className="third-section" id="section-three">
      <div className="heading"><h1>My work</h1></div>
      <div className="info-section">
       {displayProjectCards()}
      </div>
      </div>
    );

}


export default ThirdSection;
