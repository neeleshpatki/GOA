import React, { useState, useEffect } from "react";

const destinations = {
  beaches: {
    north: ["Baga Beach", "Anjuna Beach", "Calangute Beach"],
    south: ["Colva Beach", "Palolem Beach", "Agonda Beach"],
  },
  waterfalls: {
    north: ["Dudhsagar Falls"],
    south: ["Netravali Waterfalls"],
  },
  heritage: {
    north: ["Fort Aguada", "Chapora Fort"],
    south: ["Cabo de Rama Fort"],
  },
  cultural: {
    north: ["Basilica of Bom Jesus"],
    south: ["Shantadurga Temple"],
  },
};

const ItineraryForm = ({ onSubmit }) => {
  const [days, setDays] = useState(1);
  const [type, setType] = useState("beaches");
  const [region, setRegion] = useState("north");
  const [availableDestinations, setAvailableDestinations] = useState([]);
  const [selectedDestinations, setSelectedDestinations] = useState([]);

  useEffect(() => {
    setAvailableDestinations(destinations[type][region] || []);
    setSelectedDestinations([]);
  }, [type, region]);

  const handleCheckboxChange = (destination) => {
    setSelectedDestinations((prev) =>
      prev.includes(destination)
        ? prev.filter((d) => d !== destination)
        : [...prev, destination]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ days: parseInt(days), selectedDestinations, type });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <label>
        Number of Days:
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          min="1"
          style={{ marginLeft: "10px" }}
        />
      </label>
      <br />
      <label>
        Type of Destinations:
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option value="beaches">Beaches</option>
          <option value="waterfalls">Waterfalls</option>
          <option value="heritage">Heritage</option>
          <option value="cultural">Cultural</option>
        </select>
      </label>
      <br />
      <label>
        Region:
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option value="north">North Goa</option>
          <option value="south">South Goa</option>
        </select>
      </label>
      <br />
      <div style={{ marginTop: "10px" }}>
        <strong>Select Destinations:</strong>
        {availableDestinations.map((destination) => (
          <div key={destination}>
            <label>
              <input
                type="checkbox"
                checked={selectedDestinations.includes(destination)}
                onChange={() => handleCheckboxChange(destination)}
              />
              {destination}
            </label>
          </div>
        ))}
      </div>
      <button
        type="submit"
        style={{
          marginTop: "10px",
          padding: "5px 15px",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Generate Itinerary
      </button>
    </form>
  );
};

export default ItineraryForm;
