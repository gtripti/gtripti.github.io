import React from "react";
import './contact.css';
import {MdEmail} from 'react-icons/md';
import {BsPhoneFill, BsLinkedin} from 'react-icons/bs';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact_option">
                        <MdEmail/>
                        <h4 className="h4">Email</h4>
                        <h5>tripti.gupta97@gmail.com</h5>
                    </article>
                    <article className="contact_option">
                        <BsPhoneFill/>
                        <h4 className="h4">Contact Number</h4>
                        <h5>+1-617-992-0885</h5>
                    </article>
                    <article className="contact_option">
                        <BsLinkedin/>
                        <h4 className="h4">LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/tripti-gupta-b14832167/" className="h4">tripti-gupta-b14832167</a>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Contact;