import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'; 
import AboutUsContent from './AboutUsContent'; 


function AboutUs() {
  const backgroundImageUrls = [
    'https://res.cloudinary.com/damoxc2du/image/upload/v1716665769/Rectangle_19_fhde0n.png',
    'https://res.cloudinary.com/damoxc2du/image/upload/v1716666035/Ellipse_9_sbm9ht.png',
    'https://res.cloudinary.com/damoxc2du/image/upload/v1716666107/banner_2man_1_hrewxq.png',
    'https://res.cloudinary.com/damoxc2du/image/upload/v1716695892/1_1_tjrxyj.png',
    'https://res.cloudinary.com/damoxc2du/image/upload/v1716696114/1_2_dcoeov.png',
    'https://res.cloudinary.com/damoxc2du/image/upload/v1716696191/1_3_anyijj.png',
    'https://res.cloudinary.com/damoxc2du/image/upload/v1716696253/1_4_fc6csu.png',
    'https://res.cloudinary.com/damoxc2du/image/upload/v1716696902/1_5_ilpoot.png',
    'https://res.cloudinary.com/damoxc2du/image/upload/v1716696902/1_6_ro1s4u.png',
    'https://res.cloudinary.com/damoxc2du/image/upload/v1716696902/1_7_glddky.png',
    'https://res.cloudinary.com/damoxc2du/image/upload/v1716696902/1_7_glddky.png',
    'https://res.cloudinary.com/damoxc2du/image/upload/v1716696902/1_7_glddky.png',
    'https://res.cloudinary.com/damoxc2du/image/upload/v1716696902/1_7_glddky.png',

  ];

  return (
    <div>
    <div className="about-us-container" style={{ backgroundImage: `url(${backgroundImageUrls[0]})` }}>
      <h1 className='Heading-style'> ABOUT US</h1>
      {backgroundImageUrls.slice(1).map((url, index) => (
        <div
          key={index}
          className={`additional-bg${index + 1}`}
          style={{ backgroundImage: `url(${url})` }}
        />
      ))}

    </div>
    <AboutUsContent />

    </div>
    
  );
}

export default AboutUs;
