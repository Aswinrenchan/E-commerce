import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', background: '#f8f8f8', display: 'flex', justifyContent: 'space-between' }}>
            <h2>E-Commerce</h2>
            <div>
                <ul>
                <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/profile">Profile</Link>
                <li><Link to="/favourites">Favourites</Link></li>
        <li><Link to="/my-orders">My Orders</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
            </div>
        </nav>
    );
};

export default Navbar;
