import React from 'react'

import MainHead from '../components/files/MainHead'
import CCard from "../components/files/CCard"
import "../css/Contact.css"

const Contact = () => {
    return (
        <div id="Contact" className="main_contact">
            <div className="contact_div">

                <div className="parahead"> <MainHead style1={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center"
                }} style={{ width: "40%", background: "#88238a" }} headName="Contact Me" /></div>
                <div className="card_holder">
                    <CCard />
                    <div className="map_div">
                        <iframe className="map" src="https://www.google.com/maps/d/u/0/embed?mid=1ijXVv4jut11xRhiyT5hPFXx9lj26LM0G" width="640" height="480"></iframe>
                    </div>
                </div>

            </div>
            <button className="sbm_btn">submit</button>

        </div>
    )
}

export default Contact
