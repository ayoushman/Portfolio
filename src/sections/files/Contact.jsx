import React from 'react'

import MainHead from '../components/files/MainHead'



const Contact = () => {
    return (
        <div className="main_contact">
            <div className="contact_div">

                <div className="parahead"> <MainHead style1={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center"
                }} style={{ width: "120%", background: "#88238a" }} headName="Contact Me" /></div>
            </div>

        </div>
    )
}

export default Contact
