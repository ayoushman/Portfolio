import React from 'react'

import ServiceCard from '../components/files/ServiceCard'
import MainHead from '../components/files/MainHead'
import "../css/Services.css"

export const Services = () => {
    return (
        <div className="service_div">
            <div className="header">
                <MainHead headName="Services" />

            </div>
            <div className="service_cards">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>

        </div>
    )
}

