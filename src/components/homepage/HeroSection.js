import React from 'react'
import { COLORS } from '../Data';
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero__container">
            <h1 style={{color: COLORS.blue}}>React</h1>
        </div>
    )
}

export default HeroSection
