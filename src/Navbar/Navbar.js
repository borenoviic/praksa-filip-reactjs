import './navbar.scss';
import logo from '../photos/logo.png'
import React, { useEffect, useState } from 'react';
import links from '../JSON_Source/links.json'
import frame from '../photos/Frame.png'
import clock from '../photos/clock.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.className = darkMode ? 'night' : '';
    }, [darkMode]);

    return (
        <nav className="nav">

            <div className={`drop_menu ${isMenuOpen ? 'open' : ''}`}>
                {links.filter(link => link.id < 9).map(link => (

                    <li key={link.id}>
                        <Link className='a'
                            to={link.section}
                            spy={true}
                            smooth={true}
                            duration={800}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.text}
                        </Link>
                    </li>
                )
                )}
            </div>

            <div className="header">
                <div className="logoo">
                    <img src={logo} alt="logo" className="logo" />
                    <ul>
                        {links.filter(link => link.id < 9).map(link => (

                            <li key={link.id}>
                                <Link className='a'
                                    to={link.section}
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                >
                                    {link.text}
                                </Link>
                            </li>
                        )
                        )}

                        {links.filter(link => link.id === 9).map(link => (

                            <li key={link.id} className='vidi'>
                                <a href='#'>
                                    <img src={frame} alt={link.text} />
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
