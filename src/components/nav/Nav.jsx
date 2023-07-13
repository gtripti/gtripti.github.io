import React from "react";
import './nav.css';
import {AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineContacts} from 'react-icons/ai';
import {BiBriefcase} from 'react-icons/bi';
import {LuGraduationCap} from 'react-icons/lu';
import {LiaCertificateSolid} from 'react-icons/lia';

const Nav = () => {
    return (
        <nav>
            <a href="#" className="nav"><AiOutlineHome/> Home</a>
            <a href="#about" className="nav"><AiOutlineUser/> About</a>
            <a href="#experience" className="nav"><BiBriefcase/> Experience</a>
            <a href="#education" className="nav"><LuGraduationCap/> Education</a>
            <a href="#projects" className="nav"><AiOutlineProject/> Project</a>
            <a href="#certificates" className="nav"><LiaCertificateSolid/> Award</a>
            <a href="#contact" className="nav"><AiOutlineContacts/> Contact</a>
        </nav>
    )
}

export default Nav;