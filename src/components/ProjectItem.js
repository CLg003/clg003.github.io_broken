import React from 'react';
import ProjectDetail from './ProjectDetail';

const ProjectItem = ({index, name, type, description, image, projects, selectProject, selectedProject, learnMore}) => {

    // const selectedProjectDetails = 

    // const image = require("../images/placeholder_code.jpeg");

    const handleClick = function() {
        // console.log(`selectedProject : ${(selectedProject ? selectedProject.name : null)}`);
        // console.log(`projects[index]: ${projects[index].name}`)
        // console.log(`handleClick - Clicked on ${name}`);
        // console.log(`handleClick - index: ${index}`);
        selectProject(index);
    }

    return (
        <>
            { selectedProject === projects[index] ? 
            <ProjectDetail index={index} name={name} type={type} description={description} projects={projects} selectProject={selectProject} selectedProject={selectedProject} learnMore={learnMore}/>
            : 
            <div className="project">
                <img src={`${process.env.PUBLIC_URL}${image}`}/>
                <div className="text-on-image">
                    <h3>{name}</h3>
                    <p className="plain-paragraph">{type}</p>
                    <p className="learn-more" value={index} onClick={handleClick}>Learn More</p>
                </div>
            </div>
            }
        </>
    );

}

export default ProjectItem;