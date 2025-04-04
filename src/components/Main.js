import React from 'react';
import data from './data';

const Main = () => {
  return (
    <div className='main'>
      <h1 className='main-header'>This week's specials!</h1>
      <div className='online-menu-button-container'>
        <button className='online-menu-button'>Online Menu</button>
      </div>
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

export default Main;
