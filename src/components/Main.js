import { Link } from 'react-router-dom';
import data from './data';

const Main = () => {
  return (
    <div className='main'>
      <h1 className='main-header'>This week's specials!</h1>
      <div className='online-menu-button-container'>
        <Link to="/online-menu">
          <button className='online-menu-button'>Online Menu</button>
        </Link>
      </div>
      <div className='dishes-container'>
        {data.map((dish) => (
          <div key={dish.id} className='dish-card'>
            <img src={dish.image} alt={dish.dishName} className='dish-image' />
            <h2>{dish.dishName}</h2>
            <p>{dish.description}</p>
            <p className='dish-price'>{dish.price}</p>
            <p className='order-delivery'>Order a delivery</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
