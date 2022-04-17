import React from 'react';

const ProjectItem = ({name, description, selectProject}) => {

    const image = require("../images/placeholder_code.jpeg");

    const handleClick = () => {
        selectProject();
    }

    return (
        <div className="project">
            <img src={image}/>
            <div className="text-on-image">
                <h3>{name}</h3>
                <p className="plain-paragraph">{description}</p>
                <p className="learn-more" onClick={handleClick}>Learn More</p>
            </div>
        </div>
    );

}

export default ProjectItem;