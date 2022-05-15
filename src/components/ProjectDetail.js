import React from 'react';
import ReactPlayer from 'react-player/youtube';

const ProjectDetail = ({project, clearSelectedProject}) => {

    const imageNodes = project.detailImages.map((image, index) => {
        console.log(image);

        return (
                <img src={`${process.env.PUBLIC_URL}${image}`}/>
        )
    });

    const handleClick = function() {
        clearSelectedProject();
    }

    return (
        <div className="project-detail">
            <div className="project-description-and-video">
                <div className="project-description">
                    <h3>{project.name}</h3>
                    <h4>{project.type}</h4>
                    <p>{project.description}</p>
                    <a href={project.github} target="_blank">GitHub</a>
                </div>
                <div className="video">
                    <ReactPlayer url={`${process.env.PUBLIC_URL}${project.video}`} height="250px" width="430px" />
                </div>
            </div>
            <div className="project-detail-images">
                {imageNodes}
            </div>
            <button onClick={handleClick}>Hide project details</button>
        </div>
    );

}

export default ProjectDetail;