import React from 'react'

import MainHead from '../components/files/MainHead'
import CCard from "../components/files/CCard"
import "../css/Contact.css"

const Contact = () => {
    return (
        <div className="main_contact">
            <div className="contact_div">

                <div className="parahead"> <MainHead style1={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center"
                }} style={{ width: "40%", background: "#88238a" }} headName="Contact Me" /></div>
                <div className="card_holder">
                    <CCard />
                </div>
            </div>

            <div className="sbm_btn_div"><button className="sbm_btn">submit</button></div>
        </div>
    )
}

export default Contact
