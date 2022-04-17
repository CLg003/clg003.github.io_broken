import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({projects, selectProject}) => {

    const projectNodes = projects.map((project, index) => {
        return <ProjectItem key={index} name={project.name} description={project.description} selectProject={selectProject}/>
    });

    return (
        <div id="project-list">
            {projectNodes}
        </div>
    );

}

export default ProjectList;