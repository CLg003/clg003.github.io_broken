import React from 'react';
import ProjectDetail from './ProjectDetail';
import ProjectItem from './ProjectItem';

const ProjectList = ({projects, selectedProject, learnMore, selectProject, clearSelectedProject}) => {

    const projectNodes = projects.map((project, index) => {
        return <ProjectItem key={index} index={index} name={project.name} type={project.type} description={project.description} image={project.image} projects={projects} selectProject={selectProject} selectedProject={selectedProject} learnMore={learnMore}/>
    });

    // if (!selectedProject && !learnMore){
    //     return(
    //         <div id="project-list">
    //             {projectNodes}
    //         </div>
    //     )
    if (selectedProject === 0) {
        return (<ProjectDetail project={projects[0]} selectProject={selectProject} clearSelectedProject={clearSelectedProject}/>)
    } else if (selectedProject === 1) {
        return (<ProjectDetail project={projects[1]} selectProject={selectProject} clearSelectedProject={clearSelectedProject}/>)
    } else if (selectedProject === 2) {
        return (<ProjectDetail project={projects[2]} selectProject={selectProject} clearSelectedProject={clearSelectedProject}/>)
    } else {
        return(
            <div id="project-list">
                {projectNodes}
            </div>
        )
    }}
//     return (
//         <> {!selectedProject && !learnMore ?
//         <div id="project-list">
//             {projectNodes}
//         </div>
//         :
//         <ProjectDetail/>
//         }
//         </>
//     );

// }

export default ProjectList;