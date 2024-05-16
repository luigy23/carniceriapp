import React, { useState } from 'react';
//import './Card.css';

const Card = ({ image, text, type }) => {
  const [expanded, setExpanded] = useState(false);

  const horizontalClass = "flex-row";
  const verticalClass = "flex-col";

  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg m-4 transition-all duration-300 ease-in-out transform ${expanded ? 'scale-105' : 'scale-100'} ${type === 'horizontal' ? horizontalClass : verticalClass}`}
      onClick={() => setExpanded(!expanded)}
      style={{ width: expanded ? '100%' : '300px' }}
    >
      <img className="w-full" src={image} alt="Meat" style={{ width: type === 'horizontal' ? '50%' : '100%' }} />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{text}</p>
      </div>
    </div>
  );
};

export default Card;
