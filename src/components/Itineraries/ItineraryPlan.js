import React from "react";

const ItineraryPlan = ({ itinerary }) => {
  return (
    <div>
      <h2>Your Itinerary:</h2>
      <ul>
        {itinerary.map((dayPlan, index) => (
          <li key={index}>{dayPlan}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItineraryPlan;
