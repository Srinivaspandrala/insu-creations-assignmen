import React from 'react';
import './StudentReview.css'; 

const reviews = [
  {
    name: 'Jenny Wilson',
    image: 'https://res.cloudinary.com/damoxc2du/image/upload/v1716720919/Mask_group_ghy7wp.png',
    text: 'Per sed, mattis. Integer viverra euismod maecenas incidunt, phasellus consequatur aliquam nihil temporibus in assumenda? Aute praesentium fugiat. Perspiciatis, ultrices deserunt convallis, eius at non.'
  },
  {
    name: 'Jenny Wilson',
    image: 'https://res.cloudinary.com/damoxc2du/image/upload/v1716720919/Mask_group_ghy7wp.png',
    text: 'Per sed, mattis. Integer viverra euismod maecenas incidunt, phasellus consequatur aliquam nihil temporibus in assumenda? Aute praesentium fugiat. Perspiciatis, ultrices deserunt convallis, eius at non.'
  }
];

const StudentReview = () => {
  const starImages = [
    "https://res.cloudinary.com/damoxc2du/image/upload/v1716740266/Vector_veusvo.png",
    "https://res.cloudinary.com/damoxc2du/image/upload/v1716740266/Vector_veusvo.png",
    "https://res.cloudinary.com/damoxc2du/image/upload/v1716740266/Vector_veusvo.png",
    "https://res.cloudinary.com/damoxc2du/image/upload/v1716740266/Vector_veusvo.png",
    "https://res.cloudinary.com/damoxc2du/image/upload/v1716740266/Vector_veusvo.png"
  ];

  return (
    <div className="main-container">
      <h2>Reviews From Student</h2>
      <div className="student-review-container">
        {reviews.map((review, index) => (
          <div key={index} className="student-review">
            <div className="image-container">
              <img className="bg-image" src="https://res.cloudinary.com/damoxc2du/image/upload/v1716720930/Ellipse_6_woig9a.png" alt="Background" />
              <img className="person-image" src={review.image} alt={review.name} />
            </div>
            <img className="quote-image" src="https://res.cloudinary.com/damoxc2du/image/upload/v1716739705/inverted-commas-top_1_spgt66.png" alt="Quote" />
            <img className="arrow-image" src="https://res.cloudinary.com/damoxc2du/image/upload/v1716739959/aro_1_yttgd8.png" alt="Arrow" />
            <div className="star-container">
              {starImages.map((src, i) => (
                <img key={i} className="star-image" src={src} alt="Star" />
              ))}
            </div>
            <p className="student-name">{review.name}</p>
            <p className="student-text">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentReview;
