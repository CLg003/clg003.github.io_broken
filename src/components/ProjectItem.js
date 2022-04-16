import React from 'react';

const ProjectItem = () => {

    return (
        <div className="project">
            <h3>Project Name</h3>
            <p>Project description goes here.</p>
            <img src={require('../images/placeholder_code.jpeg')}/>
        </div>
    );

}

export default ProjectItem;