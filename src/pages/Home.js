// Imports here
import React from "react";
import { Link } from "react-router-dom";
import '../styling/Home.css'

// Props can be passed to home component
const Home = () => {

    return (
        <div>
            <div className='home_container'>
                <h1>I'm the home page!</h1>
                <Link to='/about'>Click me to go to the About page</Link>

                <div className='home_top_imgage' className='home_img_container'>
                    <h1 className='home_front_decript'>Find your next park</h1>
                    <img src='https://media.timeout.com/images/100469525/image.jpg' alt='' />
                </div>


                <h1 className='home_info_blurb'>Find out all you need to know any of any of NYC's parks here</h1>

            </div>
        </div>
    );
}

export default Home;