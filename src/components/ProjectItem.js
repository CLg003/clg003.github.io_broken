import React from 'react';
import ProjectDetail from './ProjectDetail';

const ProjectItem = ({index, name, type, description, projects, selectedProject, learnMore, selectProject}) => {

    const image = require("../images/placeholder_code.jpeg");

    const handleClick = function() {
        selectProject(index);
    }

    return (
        <>
        { learnMore && selectedProject === projects[index] ?
        <p>Project details here</p>
        : <div className="project">
            <img src={image}/>
            <div className="text-on-image">
                <h3>{name}</h3>
                <p className="plain-paragraph">{type}</p>
                <p className="learn-more" value={index} onClick={handleClick}>Learn More</p>
            </div>
        </div> }
                     
            {/* <ProjectDetail index={index} name={name} type={type} description={description} />  */}
        </>
    );

}

export default ProjectItem;