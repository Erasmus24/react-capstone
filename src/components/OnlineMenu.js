// OnlineMenu.js
import React from 'react';
import data from './data';

const OnlineMenu = () => {
  return (
    <div className='online-menu-page'>
      <h1 className='main-header'>Online Menu</h1>
      <div className='dishes-container'>
        {data.map((dish) => (
          <div key={dish.id} className='dish-card'>
            <img src={dish.image} alt={dish.dishName} className='dish-image' />
            <h2>{dish.dishName}</h2>
            <p>{dish.description}</p>
            <p className='dish-price'>{dish.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineMenu;
