import React from "react";
import './experience.css';

const Experience = () => {
    return (
        <section id="experience">
            <h2>Work Experience</h2>
            <div className="container experience_container">
                <div className="experience_box">
                    <h4>Software Engineer II</h4>
                    <h5>Walmart Global Tech,India <span>August 2020 - August 2022</span></h5>
                    <div className="experience_content">
                        <ul>
                            <li>Collaborated with 3 teams to onboard application by using Apache Kafka, increasing market reach by 30%</li>
                            <li>Migrated platform from Azure to Walmart Cloud-Native Platform(using Kubernetes and Docker) to reduce cost by 40%</li>
                            <li>Designed real-time email notifications for clients using Kafka and Microservice, reduced response time by 60%</li>
                            <li>Initiated development of automated testing suite using Selenium to minimize manual intervention in regression testing</li>
                            <li>Worked on workflow management application using AngularJS and NodeJS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;