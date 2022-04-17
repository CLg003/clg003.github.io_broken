import React from 'react';

const ProjectDetail = ({index, name, type, description, projects, selectProject, selectedProject, learnMore}) => {
    
    const image = require("../images/placeholder_code.jpeg");

    const handleClick = function() {
        selectProject(index);
    }

    return (
        <div className="project-detail">
            <h3>{name}</h3>
            <h4>{type}</h4>
            <p>{description}</p>
            <div className="project-detail-images">
                <img src={image}/>
                <img src={image}/>
                <img src={image}/>
            </div>
            <button value={index} onClick={handleClick}>Hide project details</button>
        </div>
    );

}

export default ProjectDetail;