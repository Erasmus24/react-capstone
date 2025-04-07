import React, { useState } from 'react';

const ReserveTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    people: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here (e.g., send data to an API)
    alert(`Reservation for ${formData.name} with ${formData.people} people at ${formData.time}`);
  };

  return (
    <div className='reserve-table-form'>
      <h1>Reserve A Table</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Number of People:</label>
          <input
            type='number'
            name='people'
            value={formData.people}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type='time'
            name='time'
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Reserve</button>
      </form>
    </div>
  );
};

export default ReserveTable;
