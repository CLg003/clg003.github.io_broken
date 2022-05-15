import React from 'react';
import cssLogo from '../images/tech_stack/css.png';
import cypressLogo from '../images/tech_stack/cypress.png';
import gitLogo from '../images/tech_stack/git.png';
import githubLogo from '../images/tech_stack/github.png';
import htmlLogo from '../images/tech_stack/html.png';
import javascriptLogo from '../images/tech_stack/javascript.jpeg';
import javaLogo from '../images/tech_stack/java.png';
import node_jsLogo from '../images/tech_stack/node_js.png';
import pipLogo from '../images/tech_stack/pip.png';
import postgresqlLogo from '../images/tech_stack/postgresql.png';
import pythonLogo from '../images/tech_stack/python.png';
import reactLogo from '../images/tech_stack/react.png';
import slackLogo from '../images/tech_stack/slack.png';
import trelloLogo from '../images/tech_stack/trello.jpeg';
import vs_codeLogo from '../images/tech_stack/vs_code.png';
import mongoDBLogo from '../images/tech_stack/mongodb.png';
import insomniaLogo from '../images/tech_stack/insomnia.png';
import expressLogo from '../images/tech_stack/express.png';
import intellijLogo from '../images/tech_stack/intellij.png';

const TechStack = () => {
    return (
        <div id="tech-stack">
            <h2>Tech Stack</h2>
            <div id="tech-stack-logos">
                <div className="tech">
                    <img src={pythonLogo} alt="pythonLogo"/>
                    <p>Python</p>
                </div>
                <div className="tech">
                    <img src={javaLogo} alt="javaLogo"/>
                    <p>Java</p>
                </div>
                <div className="tech">
                    <img src={javascriptLogo} alt="javascriptLogo"/>
                    <p>JavaScript</p>
                </div>
                <div className="tech">
                    <img src={htmlLogo} alt="htmlLogo"/>
                    <p>HTML5</p>
                </div>
                <div className="tech">
                    <img src={cssLogo} alt="cssLogo"/>
                    <p>CSS3</p>
                </div>
                <div className="tech">
                    <img src={pipLogo} alt="pipLogo"/>
                    <p>Flask/Jinja</p>
                </div>
                <div className="tech">
                    <img src={node_jsLogo} alt="node_jsLogo"/>
                    <p>Node.js</p>
                </div>
                <div className="tech">
                    <img src={reactLogo} alt="reactLogo"/>
                    <p>React</p>
                </div>
                <div className="tech">
                    <img src={expressLogo} alt="expressLogo"/>
                    <p>Express</p>
                </div>
                {/* <div className="tech">
                    <img src={npmLogo} alt="npmLogo"/>
                    <p>NPM</p>
                </div>
                <div className="tech">
                    <img src={mochaLogo} alt="mochaLogo"/>
                    <p>Mocha</p>
                </div> */}
                <div className="tech">
                    <img src={cypressLogo} alt="cypressLogo"/>
                    <p>Cypress</p>
                </div>
                <div className="tech">
                    <img src={vs_codeLogo} alt="vs_codeLogo"/>
                    <p>VSCode</p>
                </div>
                <div className="tech">
                    <img src={intellijLogo} alt="intellijLogo"/>
                    <p>IntelliJ</p>
                </div>
                <div className="tech">
                    <img src={postgresqlLogo} alt="postgresqlLogo"/>
                    <p>PostgreSQL</p>
                </div>
                <div className="tech">
                    <img src={mongoDBLogo} alt="mongoDBLogo"/>
                    <p>MongoDB</p>
                </div>
                <div className="tech">
                    <img src={insomniaLogo} alt="insomniaLogo"/>
                    <p>Insomnia</p>
                </div>
                <div className="tech">
                    <img src={gitLogo} alt="gitLogo"/>
                    <p>Git</p>
                </div>
                <div className="tech">
                    <img src={githubLogo} alt="githubLogo"/>
                    <p>GitHub</p>
                </div>
                <div className="tech">
                    <img src={slackLogo} alt="slackLogo"/>
                    <p>Slack</p>
                </div>
                <div className="tech">
                    <img src={trelloLogo} alt="trelloLogo"/>
                    <p>Trello</p>
                </div>
            </div>
        </div>
    );
}

export default TechStack;