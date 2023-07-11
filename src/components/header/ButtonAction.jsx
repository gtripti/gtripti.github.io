import React from "react";
import Resume from '../../assets/Resume.pdf'

const ButtonAction = () => {
    return (
        <div className="buttonAction">
            <a href={Resume} download className="btn">Download PDF Resume</a>
        </div>
    )
}

export default ButtonAction