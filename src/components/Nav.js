import React from 'react';
import { Link } from 'react-router-dom';
//import './Nav.css'; // Import external CSS file

const Nav = () => {
  return (
    <nav className='nav'>
      {/* Restaurant Title */}
      <h1 className='title'>Little Lemon</h1>
      
      {/* Navigation Links */}
      <ul className='nav-links'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/reservations'>Reservations</Link></li>
        <li><Link to='/order-online'>Order Online</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
