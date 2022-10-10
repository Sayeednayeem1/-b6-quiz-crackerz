import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-section d-flex justify-content-around align-items-center p-4'>
            <h2 className='text-secondary'>Master Minds</h2>
            <nav className='fs-4'>
                <Link to='/topics'>Topics</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </nav>
        </div>
    );
};

export default Header;