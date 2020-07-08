import '../styles/home.css';
import '../styles/header.css';
import React from 'react';
import SearchBar from './SearchBar';
import HomeBackground from './HomeBackground';
import videosrc from '../assets/Keyboard.mp4';
import Header from './Header';

const lin = '../assets/Keyboard.mp4';

const Home = () => {
    return(
        <div>
        <div className="home">
            <HomeBackground />
            <div className="home__model"></div>
           <Header/>
        </div>

           <div style={{height:'1000px', width:"100%", backgroundColor: "red"}}></div>

        </div>

    )
}

export default Home;