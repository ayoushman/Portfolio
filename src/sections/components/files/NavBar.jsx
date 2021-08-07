import React from "react"

import NavComponent from "./NavCom"
import "../css/NavBar.css"


const Navbar = () => {

    return (
        <div className="Navbar_div">
            <ui className="NavList">
                <NavComponent LinkName="Home" />
                <NavComponent LinkName="About" />
                <NavComponent LinkName="Projects" />
                <NavComponent LinkName="Contact" />
            </ui>

        </div>)


}


export default Navbar