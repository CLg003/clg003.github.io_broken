import React, { useState, useEffect } from 'react';
import ProjectList from '../components/ProjectList';

const Projects = () => {

    const projects = [
        {name: "Project 1", type: "Project type here", description: "Project description here."},
        {name: "Project 2", type: "Project type here", description: "Project description here."},
        {name: "Project 3", type: "Project type here", description: "Project description here."},
        {name: "Project 4", type: "Project type here", description: "Project description here."},
        {name: "Project 5", type: "Project type here", description: "Project description here."},
        {name: "Project 6", type: "Project type here", description: "Project description here."}
    ];

    const [selectedProject, setSelectedProject] = useState(null);
    const [learnMore, setLearnMore] = useState(false);

    // useEffect(() => {setLearnMore(true)}, [selectedProject]);
    // useEffect(() => {setLearnMore(false)}, [!selectedProject]);

    const selectProject = function(index) {
        const projectToSelect = projects[index];
        if (projectToSelect !== selectedProject || !projectToSelect) {
            setSelectedProject(projectToSelect);
            setLearnMore(true);
            console.log('selectedProject: ' + selectedProject.name);
            console.log('learnMore: ' + learnMore);
        } else if (projectToSelect === selectedProject) {
            setSelectedProject(null);
            setLearnMore(false);
        }
    }

    return (
        <div id="projects">
            <h2>Projects</h2>
            <ProjectList projects={projects} selectedProject={selectedProject} learnMore={learnMore} selectProject={selectProject}/>
        </div>
    );

}

export default Projects;