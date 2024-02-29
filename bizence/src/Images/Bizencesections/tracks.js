import React from 'react';
import './tracks.css'; // Import your CSS file for styling
import prot from "../Bizenceimg/_145965f1-8e3e-4368-9caf-c705b49f0e7e-removebg-preview.png"
import idea from "../Bizenceimg/_cb535974-5bcc-4590-9b79-97dcdc47065c-removebg-preview.png"
// Define your card component
const Card = ({ imageSrc, heading, paragraph }) => (
  <div className="card">
    <img src={imageSrc} alt="Card" className="card-image" />
    <h2 className="card-heading">{heading}</h2>
    <p className="card-paragraph">{paragraph}</p>
  </div>
);

// Define your App component
const TrackEvent = () => {
  // Define your card data
  const cardsData = [
    {
      imageSrc:prot,
      heading: 'Prototype Pioneers',
      paragraph: ' For participants equipped with a product or prototype, ready to pioneer innovative solutions and bring their creations to life.',
    },
    {
      imageSrc: idea,
      heading: 'Idea Innovators',
      paragraph: ' Calling all visionaries and problem solvers! This track is tailored for participants who excel at ideation, innovation, and creating groundbreaking solutions to real-world challenges.',
    },
    // Add more card data as needed
  ];

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Tracks</h1>
    <div className="Appes">
      
      {cardsData.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          heading={card.heading}
          paragraph={card.paragraph}
        />
      ))}
    </div>
    </div>
  );
};

export default TrackEvent;
