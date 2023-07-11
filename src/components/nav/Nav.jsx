import React from "react";
import './nav.css';
import {AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineContacts} from 'react-icons/ai';
import {BiBriefcase} from 'react-icons/bi';
import {LuGraduationCap} from 'react-icons/lu';
import {LiaCertificateSolid} from 'react-icons/lia';

const Nav = () => {
    return (
        <nav>
            <a href="#"><AiOutlineHome/> Home</a>
            <a href="#about"><AiOutlineUser/> About</a>
            <a href="#experience"><BiBriefcase/> Experience</a>
            <a href="#education"><LuGraduationCap/> Education</a>
            <a href="#projects"><AiOutlineProject/> Project</a>
            <a href="#certificates"><LiaCertificateSolid/> Award</a>
            <a href="#contact"><AiOutlineContacts/> Contact</a>
        </nav>
    )
}

export default Nav;