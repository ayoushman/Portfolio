import { React, useState } from 'react'

import "../css/Project.css"
import LeftArrow from '../assets/LeftArrow.svg'
import RightArrow from "../assets/RightArrow.svg"
import MainHead from "../components/files/MainHead"
import { Project } from '../data/ProjectData'
const Projects = () => {

    const [project, setProject] = useState(Project[2])
    return (
        <div className="main_project">
            <div className="projects_div">
                <div className="parahead"> <MainHead style1={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center"
                }} style={{ width: "20%", background: "#88238a" }} headName="Projects" /></div>

                <div className="project_content">
                    <div className="left_arrow"><img src={LeftArrow} /></div>
                    <div className="main_content">
                        <div className="Pimg_div"> <img className="project_img" src={project.img} /></div>

                        <div className="para_div">
                            <p className="para">{project.description}</p>
                        </div>
                    </div>
                    <div className="right_arrow"><img src={RightArrow} /></div>
                </div>

                <div className="btn_div"></div>

            </div>
        </div>
    )
}

export default Projects
