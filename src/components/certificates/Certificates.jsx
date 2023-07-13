import React from "react";
import './certificates.css';

const Certificates = () => {
    return (
        <section id="certificates">
            <h2>Awards and Certification</h2>
            <div className="container certificates_container">

                <p>Certified Scrum Product Owner <span>June 2022</span></p> 
                <p>Microsoft: Data Analyst Associate Certificate <span>December 2021</span></p>
                <p>Bravo Award at Walmart <span>April 2021</span></p>
                <p>Runner up in Walmart IDC Hackathon <span>February 2020</span></p>
                <p>Oracle Cloud Infrastructure Certified Architect Associate <span>July 2020</span></p>
                <p>First prize at National Hackathon - Intuit <span>January 2019</span></p>
            </div>
        </section>
    )
}

export default Certificates;