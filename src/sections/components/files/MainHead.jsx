import React from "react"

import "../css/mainhead.css"


const MainHead = (props) => {


    return (
        <div className="main_div">
            <h1 className="head">{props.headName}</h1>
            <div className="line"></div>
        </div>
    )
}


export default MainHead