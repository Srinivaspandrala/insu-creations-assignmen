
import './Home.css'; 
import HomepageModule1 from './Homepage-module1'; 
import HomepageModule2 from './Homepage-module2'; 
import HomepageModulee3 from './Homepage-module3';
import HomepageModule4 from './Homepage-module4'; 


import { useState } from 'react';

const Home = () => {
  const [images] = useState([
    'https://res.cloudinary.com/damoxc2du/image/upload/v1716663235/hero_mock_1_xgmiqd.png', // Add more image URLs as needed
    'https://res.cloudinary.com/damoxc2du/image/upload/v1716699693/rt_1_a6rbj8.png' // New image URL
  ]);

  return (
    <div>
      <div className="home-container">
        <div className="content">
          <h1 className='home-page-heading'>Best Mobile App Showcase</h1>
          <p className='homepage-parg'>
            Aenean dictum odio dapibus turpis dapibus vestibulum.<br/> 
            Mauris quis massa nisi. Nullam porta lorem at volutpat euismod. Proin in ex nunc.
          </p>
          <button className='button-readomre'>ReadMore</button>
        </div>

        <div className="background-image right-image"></div>
        {images.map((imageUrl, index) => (
          <img
            key={index}
            className={`hero-image${index === images.length - 1 ? ' additional-image' : ''}`} // Add additional-image class conditionally
            src={imageUrl}
            alt={`Hero Section ${index + 1}`}
          />
        ))}
        <div className="shape-11"></div> 
        <div className="new-background-image"></div> 
        <div className='bank-image'></div>
        
      </div>
      <HomepageModule1 />
      <HomepageModule2 />
      <HomepageModulee3 />
      <HomepageModule4 />
    </div>
  );
};

export default Home;
