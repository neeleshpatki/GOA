import React from 'react';

const NorthGoa = () => {
  const places = [
    { name: 'Baga Beach', description: 'Famous for nightlife and watersports.' },
    { name: 'Calangute Beach', description: 'The queen of beaches in Goa.' },
    { name: 'Chapora Fort', description: 'Known for its panoramic views.' },
    { name: 'Anjuna Flea Market', description: 'A paradise for shopaholics.' },
  ];

  return (
    <div className="north-goa">
      <h2>North Goa</h2>
      <ul>
        {places.map((place, index) => (
          <li key={index}>
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NorthGoa;
