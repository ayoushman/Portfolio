import React from "react"

import MainHead from "../components/files/MainHead"
import ProfilePic from "../assets/Profile.svg"
import "../css/About.css"


const About = () => {
    return (<div className="about_section">

        <div className="main">
            <div className="header">

                <div className="profile_holder">
                    <img className="profile_img" src={ProfilePic} />
                </div>
                <div className="content">
                    <MainHead headName="About Me" />
                    <p className="profile_summary">


                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices arcu sed velit sagittis dictum. In nec est pharetra, vehicula sapien sed, fermentum libero. <br />Nulla diam eros, feugiat vitae consectetur et, <br />auctor vel neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam convallis vel dui quis pulvinar. Sed urna ante, feugiat vel varius non, porttitor quis urna. Integer mollis finibus nunc at dictum.<br /> Donec eget tortor congue, malesuada mauris ut, tincidunt massa. Aenean ultrices, odio ut fermentum mattis, tortor diam mattis diam, a vehicula ex erat interdum nunc. Vestibulum vehicula convallis magna, ac sagittis odio congue quis.
                    </p>
                    <button className="cv_btn">Download CV</button>
                </div>
            </div>


        </div>

        <div className="skills_div">
            <h3 className="sub_head">Skills</h3>

        </div>
    </div>)
}


export default About