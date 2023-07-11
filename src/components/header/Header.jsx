import React from "react";
import './header.css';
import ButtonAction from "./ButtonAction";
import ME from "../../assets/ProfileGood.png";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h4> Hello I am </h4>
                <h1> Tripti Gupta</h1>
                {/* <h5 className="text-light">Full Stack Developer</h5> */}
                <ButtonAction/>
                <div className="me">
                    <img src={ME} alt=""></img>
                </div>
            </div>
        </header>
    )
}

export default Header;