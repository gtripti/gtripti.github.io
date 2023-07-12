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
                <div className="content">
                    <p>Programming language: Python, R, JavaScript, Java</p>
                    <p>Web Technology: HTML/CSS/Bootstrap, AngularJS, ReactJS, NodeJS, GraphQL</p>
                    <p>Data Streaming: Kafka</p>
                    <p>Database: AzureSQL, My SQL, MongoDB</p>
                    <p>Cloud Technology: Azure Cloud, Kubernetes</p>
                    <p>Data Visuapzation: Power BI, Tableau</p>
                    <p>Productivity: Jira, Agile, Velero, Microsoft Office, GitHub</p>
                </div>
                <a href="#contact" className="btn">Let's Connect</a>
            </div>
        </section>
    )
}

export default About;