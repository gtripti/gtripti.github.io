import React from "react";
import './education.css';

const Education = () => {
    return (
        <section id="education">
            <h2>Education</h2>
            <div className="container education_container">
                <div className="education_box">
                    <h4>Master of Science, Information Systems</h4>
                    <h5>Northeastern University, Boston<span>2022- Expected Dec 2023</span></h5>
                    <div className="education_content">
                        <p>Relevant Coursework: Data Science Engineering Methods, Planning and Management Information Systems, Data Visualization, Advance Data Science, Web Design and User Experience</p>
                    </div>
                </div>
                <div className="education_box">
                    <h4>Bachelor of Technology, Computer Science</h4>
                    <h5>Indira Gandhi Delhi Technical University, India<span>2016- 2020</span></h5>
                    <div className="education_content">
                        <p>
                        Relevant Coursework: Object Oriented Programming, Database Management Systems, Data Structure, Networking, Operating Systems, Natural Language Programming
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;