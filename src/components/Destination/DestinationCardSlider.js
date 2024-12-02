




// DestinationCardSlider.js
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Correct import for Swiper modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import specific module styles
import "./DestinationCardSlider.css"; // Your custom styling file

// Sample data for North Goa and South Goa destinations
const goaDestinations = {
  northGoa: [
    { id: 1, name: "Anjuna Beach", description: "Famous for its vibrant nightlife and beach shacks.", image: "anjuna.jpg" },
    { id: 2, name: "Calangute Beach", description: "One of the most popular beaches, known for water sports.", image: "calangute.jpg" },
    { id: 3, name: "Baga Beach", description: "Known for its lively nightlife, beach clubs, and water sports.", image: "baga.jpg" },
    { id: 4, name: "Candolim Beach", description: "A quieter beach with beautiful sunset views.", image: "candolim.jpg" },
    { id: 5, name: "Vagator Beach", description: "Famous for its cliffs, relaxed vibe, and sunset views.", image: "vagator.jpg" },
    { id: 6, name: "Chapora Fort", description: "Known for its history, featured in Bollywood movie Dil Chahta Hai.", image: "chapora_fort.jpg" },
    { id: 7, name: "Morjim Beach", description: "A serene beach popular among Russian tourists.", image: "morjim.jpg" },
    { id: 8, name: "Ashwem Beach", description: "A laid-back beach perfect for yoga and relaxation.", image: "ashwem.jpg" },
    { id: 9, name: "Anjuna Flea Market", description: "A famous market known for its colorful stalls and handicrafts.", image: "anjuna_market.jpg" },
    { id: 10, name: "Sinquerim Beach", description: "A calm beach ideal for water activities like parasailing.", image: "sinquerim.jpg" },
  ],
  southGoa: [
    { id: 1, name: "Palolem Beach", description: "A serene and beautiful beach ideal for relaxation.", image: "palolem.jpg" },
    { id: 2, name: "Agonda Beach", description: "Known for its quiet atmosphere and clean surroundings.", image: "agonda.jpg" },
    { id: 3, name: "Benaulim Beach", description: "A peaceful beach, perfect for long walks and relaxation.", image: "benaulim.jpg" },
    { id: 4, name: "Colva Beach", description: "A popular beach with a vibrant atmosphere and water sports.", image: "colva.jpg" },
    { id: 5, name: "Cabo De Rama Fort", description: "A historical fort offering panoramic views of the Arabian Sea.", image: "cabo_de_rama.jpg" },
    { id: 6, name: "Betul Beach", description: "A lesser-known beach, peaceful and quiet, ideal for nature lovers.", image: "betul.jpg" },
    { id: 7, name: "Varca Beach", description: "A stunning beach with calm waters, perfect for a laid-back holiday.", image: "varca.jpg" },
    { id: 8, name: "Galgibaga Beach", description: "A pristine beach, famous for its clean surroundings and calm waters.", image: "galgibaga.jpg" },
    { id: 9, name: "Majorda Beach", description: "A beautiful beach with golden sand, ideal for swimming and relaxation.", image: "majorda.jpg" },
    { id: 10, name: "Sernabatim Beach", description: "A quiet beach perfect for a peaceful day out.", image: "sernabatim.jpg" },
  ]
};

const DestinationCardSlider = ({ region }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  
  // Filter destinations based on region
  const destinations = goaDestinations[region] || [];

  const handleCardClick = (place) => {
    setSelectedPlace(place); // Set the selected place for showing details
  };

  return (
    <div className="container1">
      {/* Cards Slider */}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {destinations.map((place) => (
          <SwiperSlide key={place.id}>
            <div className="card" onClick={() => handleCardClick(place)}>
              <img src={place.image} alt={place.name} className="card-image" />
              <div className="card-body">
                <h5>{place.name}</h5>
                <p>{place.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* If a place is selected, show detailed information */}
      {selectedPlace && (
        <div className="place-detail">
          <h2>{selectedPlace.name}</h2>
          <p>{selectedPlace.description}</p>
          <img src={selectedPlace.image} alt={selectedPlace.name} className="detail-image" />
        </div>
      )}
    </div>
  );
};

export default DestinationCardSlider;

