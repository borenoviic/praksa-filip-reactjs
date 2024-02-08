import React, { useState, useEffect } from 'react';
import './css/popup.css';

const Popup = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsPopupOpen(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }, [isPopupOpen]);

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className={`popup ${isPopupOpen ? 'open' : ''}`}>
            <button id="close" onClick={closePopup}>&times;</button>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quae cum cupiditate enim
                id perferendis sed facere expedita voluptatibus nulla.
            </p>
        </div>
    );
};

export default Popup;
