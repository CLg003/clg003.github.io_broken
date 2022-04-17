import React, { useState } from 'react';
import ProjectList from '../components/ProjectList';

const Projects = () => {

    const projects = [
        {name: "Project 1", description: "Project description here"},
        {name: "Project 2", description: "Project description here"},
        {name: "Project 3", description: "Project description here"},
        {name: "Project 4", description: "Project description here"},
        {name: "Project 5", description: "Project description here"},
        {name: "Project 6", description: "Project description here"}
    ];

    const [learnMore, setLearnMore] = useState(false);

    const selectProject = () => {
        setLearnMore(!learnMore);
    }

    return (
        <div id="projects">
            <h2>Projects</h2>
            <ProjectList projects={projects} selectProject={selectProject}/>
        </div>
    );

}

export default Projects;