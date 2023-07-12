import React from "react";
import './about.css';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div className="container about__container">
                <p>
                Graduate student with 2 years of professional experience in Full Stack Software Engineering. Possess good understanding of software development life cycle of enterprise applications in agile environment. Quick learner, confident, result-oriented and a team player seeking full-time opportunities to challenge my technical and interpersonal skills.
                </p><br></br>
                <h4>Technical Skills</h4>
                <ul>
                    <li>Programming language: Python, R, JavaScript, Java</li>
                    <li>Web Technology: HTML/CSS/Bootstrap, AngularJS, ReactJS, NodeJS, GraphQL</li>
                    <li>Data Streaming: Kafka</li>
                    <li>Database: AzureSQL, My SQL, MongoDB</li>
                    <li>Cloud Technology: Azure Cloud, Kubernetes</li>
                    <li>Data Visualization: Power BI, Tableau</li>
                    <li>Productivity: Jira, Agile, Velero, Microsoft Office, GitHub</li>
                </ul>
                <a href="#contact" className="btn">Let's Connect</a>
            </div>
        </section>
    )
}

export default About;