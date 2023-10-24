import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="header">
            <div className="header-left">Profess AI</div>
            <div className="header-right">
                <div className="hamburger" onClick={handleDropdownClick}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                {isDropdownOpen && (
                    <div className="dropdown">
                        <a href="#">Menu Item 1</a>
                        <a href="#">Menu Item 2</a>
                        <a href="#">Menu Item 3</a>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
