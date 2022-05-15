import React, { useState, useEffect } from 'react';
import ProjectList from '../components/ProjectList';

const Projects = () => {

    const projects = [
        {name: "Pulse Gym Management", 
        type: "Python full-stack web app", 
        description: "Project description here. blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ", 
        image: "/assets/images/project_videos_and_screenshots/pulse_ss/pulse_home_page_ss.png", 
        detailImages: [
            "/assets/images/project_videos_and_screenshots/pulse_ss/pulse_home_page_ss.png", 
            "/assets/images/project_videos_and_screenshots/pulse_ss/pulse_edit_member_details_ss1.png", 
            "/assets/images/project_videos_and_screenshots/pulse_ss/pulse_classes_list_ss2.png", 
            "/assets/images/project_videos_and_screenshots/pulse_ss/pulse_class_bookings_ss3.png", 
            "/assets/images/project_videos_and_screenshots/pulse_ss/pulse_booking_details_ss4.png"
        ], 
        video: "https://youtu.be/umg7LK-LQTo", 
        github:"https://github.com/CLg003/Pulse_Gym_Management"
        },
        {name: "NBA 75", 
        type: "React/REST API full-stack web app", 
        description: "Project description here.", 
        image: "/assets/images/project_videos_and_screenshots/nba_ss/nba_main_ss.png", 
        detailImages: [
            "/assets/images/project_videos_and_screenshots/nba_ss/nba_main_ss.png", 
            "/assets/images/project_videos_and_screenshots/nba_ss/nba_jordan_focus_ss1.png", 
            "/assets/images/project_videos_and_screenshots/nba_ss/nba_giannis_stats_ss2.png", 
            "/assets/images/project_videos_and_screenshots/nba_ss/nba_barkley_focus_ss3.png", 
            "/assets/images/project_videos_and_screenshots/nba_ss/nba_search_team_focus_ss4.png"
        ], 
        video: "https://youtu.be/C5yXNXXEtbc", 
        github:"https://github.com/CLg003/NBA_75th_Anniversary_Players"
        },
        {name: "Triolingo", 
        type: "React full-stack web app", 
        description: "Project description here.", 
        image: "/assets/images/project_videos_and_screenshots/triolingo_ss/triolingo_lesson2_reset_ss.png", 
        detailImages: [
            "/assets/images/project_videos_and_screenshots/triolingo_ss/triolingo_landing_screen_ss.png", 
            "/assets/images/project_videos_and_screenshots/triolingo_ss/triolingo_lesson1_quiz_ss1.png", 
            "/assets/images/project_videos_and_screenshots/triolingo_ss/triolingo_lesson2_in_progress_ss2.png", 
            "/assets/images/project_videos_and_screenshots/triolingo_ss/triolingo_lesson3_inprogress_ss3.png", 
            "/assets/images/project_videos_and_screenshots/triolingo_ss/triolingo_game_inprogress_ss4.png"
        ], 
        // video: "https://www.youtube.com/watch?v=WyMdT1xsBMg", 
        video: "https://youtu.be/WyMdT1xsBMg", 
        github:"https://github.com/CLg003/TrioLingo"
        }
        // {name: "Project 4", type: "Project type here", description: "Project description here."},
        // {name: "Project 5", type: "Project type here", description: "Project description here."},
        // {name: "Project 6", type: "Project type here", description: "Project description here."}
    ];

    const [selectedProject, setSelectedProject] = useState(0);
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