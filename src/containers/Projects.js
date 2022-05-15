import React, { useState, useEffect } from 'react';
import ProjectList from '../components/ProjectList';

const Projects = () => {

    const projects = [
        {name: "Pulse Gym Management", 
        type: "Python full-stack web app", 
        description: "Project description here.", 
        image: "/assets/images/project_videos_and_screenshots/pulse_ss/pulse_home_page_ss.png", 
        detailImages: [1, 2, 3], 
        video:"/assets/images/project_videos_and_screenshots/pulse_video_1080.mov"
        },
        {name: "NBA 75", 
        type: "React/REST API full-stack web app", 
        description: "Project description here.", 
        image: "/assets/images/project_videos_and_screenshots/nba_ss/nba_main_ss.png", 
        detailImages: [1, 2, 3], 
        video:"/assets/images/project_videos_and_screenshots/nba_video_1080.mov"
        },
        {name: "Triolingo", 
        type: "React full-stack web app", 
        description: "Project description here.", 
        image: "/assets/images/project_videos_and_screenshots/triolingo_ss/triolingo_lesson2_reset_ss.png", 
        detailImages: [1, 2, 3], 
        video:"/assets/images/project_videos_and_screenshots/triolingo_video_1080.mov"
        }
        // {name: "Project 4", type: "Project type here", description: "Project description here."},
        // {name: "Project 5", type: "Project type here", description: "Project description here."},
        // {name: "Project 6", type: "Project type here", description: "Project description here."}
    ];

    const [selectedProject, setSelectedProject] = useState(1);
    // const [learnMore, setLearnMore] = useState(false);

    // useEffect(() => {setLearnMore(true)}, [selectedProject]);
    // useEffect(() => {setLearnMore(false)}, [!selectedProject]);

    const selectProject = function(index) {
        setSelectedProject(index);
    }

    const clearSelectedProject = function(){
        setSelectedProject(null);
    }

    // const updateLearnMore = function() {

    // }

    return (
        <div id="projects">
            <h2>Projects</h2>
            <ProjectList projects={projects} selectedProject={selectedProject} selectProject={selectProject} clearSelectedProject={clearSelectedProject}/>
        </div>
    );

}

export default Projects;