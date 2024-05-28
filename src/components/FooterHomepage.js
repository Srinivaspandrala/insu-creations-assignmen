import React from 'react';
import './FooterHomepage.css';
import Subscriberhomepage from './Subscriber-homepage'; 

const FooterHomepage = () => {
  return (
    <div className="footer-container">
      <h1 className='address-container'>
        Vero, tempor morbi, adipiscing aliqua nonummy proident perferendis? Laboris lacus quidem repellendus quasi.
      </h1>
      <div>
        <div className='footer-links1'>
          <h1 >Quick Link</h1>
          <p> <img src='https://res.cloudinary.com/damoxc2du/image/upload/v1716867331/Vector_17_amu1q0.png' alt='bg'></img>Home</p>
          <p><img src='https://res.cloudinary.com/damoxc2du/image/upload/v1716867331/Vector_17_amu1q0.png' alt='bg'></img>About Us</p>
          <p><img src='https://res.cloudinary.com/damoxc2du/image/upload/v1716867331/Vector_17_amu1q0.png' alt='bg'></img>Careers</p>
          <p><img src='https://res.cloudinary.com/damoxc2du/image/upload/v1716867331/Vector_17_amu1q0.png' alt='bg'></img>News & Articles</p>
        </div>
        <div className='footer-links2'>
          <h1>Useful Links</h1>
          <p><img src='https://res.cloudinary.com/damoxc2du/image/upload/v1716867331/Vector_17_amu1q0.png' alt='bg'></img>Help Center</p>
          <p><img src='https://res.cloudinary.com/damoxc2du/image/upload/v1716867331/Vector_17_amu1q0.png' alt='bg'></img>Contact Us</p>
          <p><img src='https://res.cloudinary.com/damoxc2du/image/upload/v1716867331/Vector_17_amu1q0.png' alt='bg'></img>FAQ</p>
          <p><img src='https://res.cloudinary.com/damoxc2du/image/upload/v1716867331/Vector_17_amu1q0.png' alt='bg'></img>Parent Community</p>
        </div>
        <div className='footer-links3'>
          <h1>School Hours</h1>
          <p> <img src='https://res.cloudinary.com/damoxc2du/image/upload/v1716867956/Vector_2_zk2in9.png' alt='bg-shedule'></img>8AM - 5PM, Monday - Saturday</p>
          <p ><img src='https://res.cloudinary.com/damoxc2du/image/upload/v1716867956/Group_79_zcw3gj.png' alt='bg-loca'></img> Aut, quae convallis minim cum <br/>ornare! Pede ut rem, totam<br/> dictum convallis.</p>
          <img src='https://res.cloudinary.com/damoxc2du/image/upload/v1716868411/Group_80_c3xjyy.png' alt='socailmedia'></img>
          <img src='https://res.cloudinary.com/damoxc2du/image/upload/v1716868411/Group_81_mocpib.png' alt='socailmedia'></img>
          <img src='https://res.cloudinary.com/damoxc2du/image/upload/v1716868411/Group_82_tpwc13.png' alt='sociamedia'></img>

        </div>
      </div>
      <div className='policy-container'>
        <p className='copywrite-para'>Copyright © 2022 Educator. All rights reserved.</p>
        <p className='pst-para'>PRIVACY POLICY | SUPPORT | TERMS & CONDITION</p>
      </div>
      <Subscriberhomepage />
    </div>
  );
}

export default FooterHomepage;
