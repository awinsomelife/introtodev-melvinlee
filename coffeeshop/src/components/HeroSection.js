import React from 'react';
import '../App.css';
import { Button } from './Productbutton';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video.mp4" autoPlay loop muted />
            <h1>LET'S TICKLE YOUR SENSES</h1>
            <p> Ready to be tickled?</p>
            <div className="hero-btns"></div>
            <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>GET TICKLED<i className='fas fa-feather-alt' /></Button>
        </div>
    )
}

export default HeroSection
