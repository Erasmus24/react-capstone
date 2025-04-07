import React from 'react';
//import './About.css'; // You can create this CSS file for styling

const About = () => {
  return (
    <div className='about-container'>
      <h1 className='about-title'>About Us</h1>
      <p className='about-description'>
        Welcome to Little Lemon! We are a family-owned Mediterranean restaurant based in Chicago, offering a wide variety of traditional Mediterranean dishes with a modern twist. Our chefs use only the freshest ingredients to create mouth-watering meals that will transport you straight to the heart of the Mediterranean.
      </p>
      <p className='about-mission'>
        At Little Lemon, we pride ourselves on creating a warm, welcoming environment where everyone can enjoy great food, great company, and unforgettable experiences. Whether you're visiting for a casual lunch, a romantic dinner, or a special occasion, we are here to serve you delicious food that will make you feel at home.
      </p>
      <h2 className='about-contact'>Contact Us</h2>
      <p className='about-contact-info'>
        Address: 123 Lemon Street, Chicago, IL<br/>
        Phone: (123) 456-7890<br/>
        Email: info@littlelemon.com
      </p>
    </div>
  );
};

export default About;
