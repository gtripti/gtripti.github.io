import React from "react";
import './projects.css';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="container projects_container">
                <div className="projects_box">
                    <h4>Commission Management System <span>January 2023 - April 2023</span></h4>
                    <h5><a href="https://drive.google.com/file/d/1HqH6Kv1lLon23jFb04tSckWBWZDHFowY/view">Link to Document</a></h5>
                    <div className="projects_content">
                        <ul className="list">
                            <li>Led planning for enhancing Fidelity's commission system, addressing critical business needs and improving flexibility</li>
                            <li>Collaborated on determining and documenting business and technical requirements for a new, user-friendly system</li>
                            <li>Developed a comprehensive project plan for implementing a flexible and auditable commission system</li>
                        </ul>
                    </div>
                </div>
                <div className="projects_box">
                    <h4>Fast food impacting health, causing PCOS<span>January 2023 - April 2023</span></h4>
                    <h5><a href="">Link to Document</a></h5>
                    <div className="projects_content">
                        <ul className="list">
                            <li>Analysed data from top 50 fast food chains in U.S. and fast food nutrition data to investigate impact of fast food on health</li>
                            <li>Developed an interactive data visualization project using Python, Plotly and Seaborn to visually represent the correlation between fast food consumption and health indicators, specifically focusing on the impact of fast food on PCOS (Polycystic Ovary Syndrome)</li>
                        </ul>
                    </div>
                </div>
                <div className="projects_box">
                    <h4>Sentiment Analysis of "1984" Book Corpus<span>Nov 2022 - Dec 2022</span></h4>
                    <div className="projects_content">
                        <ul className="list">
                            <li>Analyzed the sentiment in the "1984" book corpus to evaluate the overall tone and emotions portrayed within the text</li>
                            <li>Corpus has significant presence of negative sentiment and highlighting the underlying theme of fear and sadness</li>
                            <li>Employed text2emotion and word cloud analysis, revealing fear, sadness, anger, and surprise as the prominent emotions conveyed by the text</li>
                            <li>Utilized page rank algorithm to determine the most relevant sentence, with sentence 654 ranked highest in relevance</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;