// Subscriber.js
import React from 'react';
import './Subscriber-homepage.css';

const Subscriberhomepage = () => {
  const handleSubscribe = () => {
  };

  return (
    <div className="subscriber-container-hompage ">
      <h1 className="heading-hompage ">Subscribe Our Newsletter !</h1>
      <div className="bg-container-hompage ">
      </div>
      <p className='parag-hompage '>Elementum ex similique sollicitudin eveniet sem eveniet proin, iste euismod! Quia! Fugiat molestie leo placerat, tenetur.</p>

      <div className="subscribe-btn-hompage " onClick={handleSubscribe}>
        Subscribe
      </div>
      <div className="additional-btn-hompage " onClick={handleSubscribe}>
        Subscribe
      </div>
    </div>
  );
};

export default Subscriberhomepage;
