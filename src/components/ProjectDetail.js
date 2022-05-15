import React from 'react';
import ReactPlayer from 'react-player';

const ProjectDetail = ({project, selectProject, clearSelectedProject}) => {
    
    const image = require("../images/placeholder_code.jpeg");

    const handleClick = function() {
        clearSelectedProject();
    }

    return (
        <div className="project-detail">
            <h3>{project.name}</h3>
            <h4>{project.type}</h4>
            <p>{project.description}</p>
            <div className="project-detail-images">
                <img src={image}/>
                <img src={image}/>
                <img src={image}/>
            </div>
            <button onClick={handleClick}>Hide project details</button>
        </div>
    );

}

export default ProjectDetail;