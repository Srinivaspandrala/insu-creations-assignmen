import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div >     
       <div className="heading-with-bg-contact">Features</div>
    <h1 className='contact-heading'>CONTACT US</h1>    <div className="contact-card">
      
      <div >
      <img src="https://res.cloudinary.com/damoxc2du/image/upload/v1716829472/Group_98_dvxsc2.png" alt="Decoration" className="image-1" />
        <img src="https://res.cloudinary.com/damoxc2du/image/upload/v1716829472/Group_99_qadazy.png" alt="Decoration" className="image-2" />
        <img src="https://res.cloudinary.com/damoxc2du/image/upload/v1716829472/Group_100_tcayk9.png" alt="Decoration" className="image-3" />
        <img src="https://res.cloudinary.com/damoxc2du/image/upload/v1716829472/Mask_group_1_fifqsv.png" alt="Decoration" className="image-4" />
        <imag src="https://res.cloudinary.com/damoxc2du/image/upload/v1716868955/Vector_22_dwnkc8.png" alt="Decoration"  className="image-1"/>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:<br/>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:<br/>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:<br/>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Your Message:<br/>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>

  );
};

export default ContactForm;
