import React from 'react';
import ProjectDetail from './ProjectDetail';

const ProjectItem = ({index, name, type, description, image, projects, selectProject, selectedProject, learnMore}) => {

    const handleClick = function() {
        selectProject(index);
    }

    return (
        <>
            { selectedProject === projects[index] ? 
            <ProjectDetail index={index} name={name} type={type} description={description} projects={projects} selectedProject={selectedProject} learnMore={learnMore}/>
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