import React from 'react';

const SouthGoa = () => {
  const places = [
    { name: 'Palolem Beach', description: 'Perfect for relaxation and dolphin watching.' },
    { name: 'Colva Beach', description: 'Known for its white sand and serene vibes.' },
    { name: 'Basilica of Bom Jesus', description: 'A UNESCO World Heritage Site.' },
    { name: 'Dudhsagar Waterfalls', description: 'A breathtaking natural wonder.' },
  ];

  return (
    <div className="south-goa">
      <h2>South Goa</h2>
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

export default SouthGoa;
