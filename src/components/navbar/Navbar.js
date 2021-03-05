import React from 'react'
import { FaReact } from 'react-icons/fa';
import { HiSearch } from 'react-icons/hi';
import { IoLanguage } from 'react-icons/io5';
import { IconContext } from 'react-icons'
import './Navbar.css'

function Navbar() {
    return (
        <IconContext.Provider value={{style: {height: '22px', width: '20px', color: '#fff'}}}>
        <header>
            <div className="navbar__container">
                <div className="navbar__logo-container">
                    <FaReact style={{ color: '#61DAFB', height: '22.48px', width: '20px' }}/>
                    <span className="navbar__react-name">React</span>
                </div>
                <div className="navbar__navigation-links">
                    <a href="/" className="docs">Docs</a>
                    <a href="/" className="tutorial">Tutorial</a>
                    <a href="/" className="blog">Blog</a>
                    <a href="/" className="community">Community</a>
                </div>
                <div className="navbar__fade-links">
                    <HiSearch style={{height:"28px", width: '22px', marginRight: '10px',
                    paddingLeft: '12px', boxSizing: 'content-box'}}/>
                    <input type="text" className="lower-opacity navbar__input-search" placeholder="Search"/>
                    <a href="#" className="navbar__react-version">v17.0.1</a>
                    <div className="navbar__language-container">
                        <IoLanguage style={{height: '24px', width: '24px'}}/>
                        <span className="navbar__languages-text">Languages</span>
                    </div>
                </div>
                <a href="/" className="navbar__github">GitHub</a>
            </div>
        </header>
        </IconContext.Provider>
    )
}

export default Navbar
