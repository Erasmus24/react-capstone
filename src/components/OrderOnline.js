import React, { useState } from 'react';
//import './OrderOnline.css'; // Import CSS for styling

const OrderOnline = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dish: '',
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed for ${formData.quantity} x ${formData.dish}`);
    // Here, you can add the code to submit the form data to a backend or a service
  };

  return (
    <div className="order-online-container">
      <h1 className="order-online-title">Order Online</h1>
      <form onSubmit={handleSubmit} className="order-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dish">Select Dish</label>
          <select
            id="dish"
            name="dish"
            value={formData.dish}
            onChange={handleChange}
            required
          >
            <option value="">--Select a dish--</option>
            <option value="Greek Salad">Greek Salad</option>
            <option value="Bruchetta">Bruchetta</option>
            <option value="Lemon Dessert">Lemon Dessert</option>
            <option value="Pizza">Pizza</option>
            <option value="Burger">Burger</option>
            <option value="Fish and Chips">Fish and Chips</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Place Order</button>
      </form>
    </div>
  );
};

export default OrderOnline;
