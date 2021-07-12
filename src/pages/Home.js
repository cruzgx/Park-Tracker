// Imports here
import React from "react";
import { Link } from "react-router-dom";

// Props can be passed to home component
const Home = () => {

    return(
        <div>
           <h1>I'm the home page!</h1>
           <Link to='/about'>Click me to go to the About page</Link>
        </div>
    );
}

export default Home;