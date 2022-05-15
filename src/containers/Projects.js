import React, { useState, useEffect } from 'react';
import ProjectList from '../components/ProjectList';

const Projects = () => {

    const projects = [
        {name: "Pulse Gym Management", type: "Python full-stack web app", description: "Project description here.", image: "/assets/images/project_videos_and_screenshots/pulse_ss/pulse_home_page_ss.png"},
        {name: "NBA 75", type: "React/REST API full-stack web app", description: "Project description here.", image: "/assets/images/project_videos_and_screenshots/nba_ss/nba_main_ss.png"},
        {name: "Triolingo", type: "React full-stack web app", description: "Project description here.", image: "/assets/images/project_videos_and_screenshots/triolingo_ss/triolingo_lesson2_reset_ss.png"}
        // {name: "Project 4", type: "Project type here", description: "Project description here."},
        // {name: "Project 5", type: "Project type here", description: "Project description here."},
        // {name: "Project 6", type: "Project type here", description: "Project description here."}
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

    // const updateLearnMore = function() {

    // }

    return (
        <div id="projects">
            <h2>Projects</h2>
            <ProjectList projects={projects} selectedProject={selectedProject} learnMore={learnMore} selectProject={selectProject}/>
        </div>
    );

}

export default Projects;