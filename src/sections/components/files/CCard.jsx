import React from 'react'

import "../css/Ccard.css"
const CCard = () => {
    return (
        <div className="main_card">
            <div className="contact_card">
                <div className="form_content">

                    <label className="label">Name <input className="input" /></label>
                    <br />
                    <label className="label">Email <input className="input" /></label>
                    <br />
                    <label className="label">Message <input className="input" /></label>

                </div>

            </div>
        </div>
    )
}

export default CCard
