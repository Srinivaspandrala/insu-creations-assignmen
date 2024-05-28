import React from 'react';
import './FeatureCardGrid.css';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <div className="images-container">
        <img
          src="https://res.cloudinary.com/damoxc2du/image/upload/v1716745091/Ellipse_10_j6jscn.png"
          alt="Ellipse"
          className="ellipse-image"
        />
        <img
          src="https://res.cloudinary.com/damoxc2du/image/upload/v1716745135/Group_90_cvhlv8.png"
          alt="Group"
          className="group-image"
        />
        <img
          src="https://res.cloudinary.com/damoxc2du/image/upload/v1716745887/Ellipse_11_xhiraz.png"
          alt="Ellipse 11"
          className="ellipse-11-image"
        />
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const FeatureCardGrid = () => {
  const cards = Array(6).fill({
    id: 1,
    title: 'Easy Copy And Paste ',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  });

  return (
    <div className="feature-card-grid-container">
      <h2 className="main-heading">The Features To Create Your</h2>
      <div className="feature-card-grid">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
      <div className="heading-with-bg">Features</div>
    </div>
  );
};

export default FeatureCardGrid;
