import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({projects, selectedProject, learnMore, selectProject}) => {

    const projectNodes = projects.map((project, index) => {
        return <ProjectItem key={index} index={index} name={project.name} type={project.type} description={project.description} projects={projects} selectedProject={selectedProject} learnMore={learnMore} selectProject={selectProject}/>
    });

    return (
        <div id="project-list">
            {projectNodes}
        </div>
    );

}

export default ProjectList;