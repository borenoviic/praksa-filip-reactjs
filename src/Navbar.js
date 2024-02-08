import './css/navbar.css';
import logo from './photos/logo.png'
import React, { useEffect, useState } from 'react';
import links from './links.json'
import frame from './photos/Frame.png'
import clock from './photos/clock.png'

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.className = darkMode ? 'night' : '';
    }, [darkMode]);

    return (
        <nav className="nav">
            <div className="header">
                <div className="logoo">
                    <img src={logo} alt="logo" className="logo" />
                    <ul>
                        {links && links.filter(link => link.id < 9).map(link => (

                            <li key={link.id}>
                                <a href='#'>
                                    {link.text}
                                </a>
                            </li>
                        )
                        )}

                        {links && links.filter(link => link.id === 9).map(link => (

                            <li key={link.id} className='vidi'>
                                <a href='#'>
                                    {link.img && <img src={frame} alt={link.text} />}
                                    {link.text}
                                </a>
                            </li>
                        )
                        )}
                    </ul>
                </div>
                <div className="toggle_btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>

            <div className="time">
                <div className="time-p">
                    <p className="da">
                        <label className={`dark ${darkMode ? 'active' : ''}`} onClick={() => setDarkMode(!darkMode)}></label>
                    </p>
                    <img src={clock} alt="clock" />
                    <p className="bold">Opentime:</p>
                    <p className="dole">Di - Fr.: 07:00-13:00 und 15:00-18:30. Sa.: 07:30 - 12:30</p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
