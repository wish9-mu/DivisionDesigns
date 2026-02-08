import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
        // Add your search logic here
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Division Designs</h1>
            </div>

            <ul className="navbar-links">
                <li><a href="/">Products</a></li>
                <li><a href="#about">Order Forms</a></li>
                <li><a href="#services">About</a></li>
                <li><a href="#contact">Custom Orders</a></li>
            </ul>

            <div className="navbar-right">
                <form className="search-bar" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="search-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                    </button>
                </form>

                <div className="profile-circle">

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
