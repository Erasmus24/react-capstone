import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import restaurantImage from '../icons_assets/restauranfood.jpg';

const Header = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleReserveClick = () => {
    navigate('/reserve-table'); // Navigate to the Reserve Table page
  };

  return (
    <div className='header'>
      <div className='header-container'>
        <h1 className='header-title'>Little Lemon</h1>
        <h2 className='header-subtitle'>Chicago</h2>
        <p className='header-paragraph'>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <button className='reserve-a-table' onClick={handleReserveClick}>Reserve a Table</button>
      </div>
      <div className='header-image-container'>
        <img src={restaurantImage} alt='Little Lemon Restaurant' className='header-image' />
      </div>
    </div>
  );
};

export default Header;
