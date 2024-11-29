import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Destinations.css';
import goasn from '../assets/dest_img/goasn.png';

const Destinations = () => {
  // Data for North Goa and South Goa
  const northGoaPlaces = [
    { name: 'Baga Beach', description: 'Famous for nightlife and watersports.' },
    { name: 'Calangute Beach', description: 'The queen of beaches in Goa.' },
    { name: 'Chapora Fort', description: 'Known for its panoramic views.' },
    { name: 'Anjuna Flea Market', description: 'A paradise for shopaholics.' },
  ];

  const southGoaPlaces = [
    { name: 'Palolem Beach', description: 'Perfect for relaxation and dolphin watching.' },
    { name: 'Colva Beach', description: 'Known for its white sand and serene vibes.' },
    { name: 'Basilica of Bom Jesus', description: 'A UNESCO World Heritage Site.' },
    { name: 'Dudhsagar Waterfalls', description: 'A breathtaking natural wonder.' },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Explore Goa</h1>
      {/* <img src={goasn} alt='goa_map'></img> */}
      <div className='responsive-map'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984956.6953413053!2d73.34714319485532!3d15.350084444631367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1732843354108!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
      <div className="row">
        {/* North Goa Section */}
        <div className="col-xl-6 col-lg-6 col-md-12 mb-4">
          <div className="border p-4 rounded shadow">
            <h2 className="text-primary">North Goa</h2>
            <ul className="list-unstyled">
              {northGoaPlaces.map((place, index) => (
                <li key={index} className="mb-3">
                  <h4 className="mb-1">{place.name}</h4>
                  <p className="text-muted">{place.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* South Goa Section */}
        <div className="col-xl-6 col-lg-6 col-md-12 mb-4">
          <div className="border p-4 rounded shadow">
            <h2 className="text-primary">South Goa</h2>
            <ul className="list-unstyled">
              {southGoaPlaces.map((place, index) => (
                <li key={index} className="mb-3">
                  <h4 className="mb-1">{place.name}</h4>
                  <p className="text-muted">{place.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
