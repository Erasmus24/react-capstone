import React from 'react'
import restaurantImage from '../icons_assets/restauranfood.jpg'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-container'>
        <h1 className='header-title'>Little Lemon</h1>
        <h2 className='header-subtitle'>Chicago</h2>
        <p className='header-paragraph'>We are a family owned Mediterrean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className='reserve-a-table'>Reserve a Table</button>
      </div>
      <div className='header-image-container '>
          <img src={restaurantImage} alt='Little Lemon Restaurant' className='header-image'/>
      </div>
    </div>
  )
}

export default Header