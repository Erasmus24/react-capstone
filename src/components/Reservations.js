import React, { useState } from 'react';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    people: 1
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form data here, for example, by sending it to an API
    console.log('Reservation Submitted:', formData);
  };

  return (
    <div className="reservations-container">
      <h1>Make a Reservation</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
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
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="people">Number of People:</label>
          <input
            type="number"
            id="people"
            name="people"
            min="1"
            value={formData.people}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Reserve a Table</button>
      </form>
    </div>
  );
};

export default Reservations;
