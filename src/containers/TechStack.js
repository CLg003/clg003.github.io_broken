import React from 'react';
import cssLogo from '../images/tech_stack/css.png';
import cypressLogo from '../images/tech_stack/cypress.png';
import gitLogo from '../images/tech_stack/git.png';
import githubLogo from '../images/tech_stack/github.png';
import htmlLogo from '../images/tech_stack/html.png';
import javascriptLogo from '../images/tech_stack/javascript.jpeg';
import mochaLogo from '../images/tech_stack/mocha.png';
import node_jsLogo from '../images/tech_stack/node_js.png';
import npmLogo from '../images/tech_stack/npm.png';
import postgresqlLogo from '../images/tech_stack/postgresql.png';
import pythonLogo from '../images/tech_stack/python.png';
import reactLogo from '../images/tech_stack/react.png';
import slackLogo from '../images/tech_stack/slack.png';
import trelloLogo from '../images/tech_stack/trello.jpeg';
import vs_codeLogo from '../images/tech_stack/vs_code.png';

const TechStack = () => {
    return (
        <div id="tech-stack">
            <h2>Tech Stack</h2>
            <div id="tech-stack-logos">
                <img src={pythonLogo} alt="pythonLogo"/>
                <img src={javascriptLogo} alt="javascriptLogo"/>
                <img src={node_jsLogo} alt="node_jsLogo"/>
                <img src={npmLogo} alt="npmLogo"/>
                <img src={reactLogo} alt="reactLogo"/>
                <img src={htmlLogo} alt="htmlLogo"/>
                <img src={cssLogo} alt="cssLogo"/>
                <img src={mochaLogo} alt="mochaLogo"/>
                <img src={cypressLogo} alt="cypressLogo"/>
                <img src={vs_codeLogo} alt="vs_codeLogo"/>
                <img src={postgresqlLogo} alt="postgresqlLogo"/>
                <img src={gitLogo} alt="gitLogo"/>
                <img src={githubLogo} alt="githubLogo"/>
                <img src={slackLogo} alt="slackLogo"/>
                <img src={trelloLogo} alt="trelloLogo"/>
            </div>
        </div>
    );
}

export default TechStack;