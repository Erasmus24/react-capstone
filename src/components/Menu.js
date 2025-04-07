import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';


const Menu = () => {
  return (
    <div className="menu-container">
      <h1 className="main-header">Our Menu</h1>
      <div className="dishes-container">
        {data.map((dish) => (
          <div key={dish.id} className="dish-card">
            <img src={dish.image} alt={dish.dishName} className="dish-image" />
            <h2 className="dish-name">{dish.dishName}</h2>
            <p className="dish-description">{dish.description}</p>
            <p className="dish-price">{dish.price}</p>
            <Link to="/order-online">
              <button className="order-btn">Order Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
