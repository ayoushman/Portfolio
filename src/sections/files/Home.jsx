import React from "react"

import BCard from "../components/files/BCard"
import Moon from "../util/files/Moon"
import BookBoy from "../assets/BoyBook.svg"
import "../css/Home.css"


const Home = () => {



    return (
        <div className="Home_div">

            <div className="content">
                <div className="card">
                    <BCard />
                </div>
                <div className="moon">  <Moon /></div>




                <div className="img_div">
                    <img className="img_Bboy" src={BookBoy} />
                </div>


            </div>

        </div>
    )
}


export default Home