import React from 'react'

import "./css/App.css"
import Navbar from './components/NavBar'
import Home from "./sections/Home"
import Sicons from './components/SocialIcons'

const App = () => {

    return (
        <div className="App">
            <Navbar />
            <Home />
            <Sicons />
        </div>)

}


export default App;