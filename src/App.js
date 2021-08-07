import React from 'react'

import "./css/App.css"
import Navbar from './sections/components/files/NavBar'
import Home from "./sections/files/Home"
import Sicons from './sections/components/files/SocialIcons'
import { Services } from './sections/files/Services'
import About from './sections/files/About'

const App = () => {

    return (
        <div className="App">
            <Navbar />
            <Home />
            <Sicons />
            <Services />
            <About />
        </div>)

}


export default App;