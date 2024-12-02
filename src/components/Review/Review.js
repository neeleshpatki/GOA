import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Correct import for Swiper modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import specific module styles
import "./Review.css"; // Your custom styling file

// Reviews for the website's help with planning a Goa trip
const websiteReviews = [
  { name: "John Doe", rating: 5, review: "This website was a game-changer for planning my Goa trip! The itineraries and rental services helped me pick the best locations and places to stay. I felt confident booking my accommodation after seeing the contact details. I loved how it made everything so convenient and easy to navigate." },
  { name: "Sarah Smith", rating: 4, review: "I found the website to be very helpful, especially the itinerary suggestions. I could plan my trip based on the region (North or South Goa), and the website offered great options for activities. However, it would be helpful if they included more detailed maps." },
  { name: "Amit Sharma", rating: 5, review: "The experience section of the website made it super easy for me to choose between adventure and relaxation. The information on local transport and rental services made my trip to Goa stress-free. Highly recommended for first-time visitors." },
  { name: "Emily Johnson", rating: 4, review: "This website helped me a lot in deciding the best places to visit in Goa. The reviews from other tourists were especially useful. I just wish there were more options for offbeat locations, but overall, it's a solid resource." },
  { name: "Michael Brown", rating: 3, review: "The website was useful in helping me book my stay, but I felt like some more variety in rental services would have been nice. The recommendations for places to visit were spot on, though, so that helped a lot." },
  { name: "Priya Desai", rating: 5, review: "I had a fantastic time in Goa thanks to this website! The booking details were easy to follow, and the itineraries helped me organize my days perfectly. I’ll definitely use this again for my next trip." },
  { name: "David Lee", rating: 4, review: "I liked how the website grouped activities by region. It really helped me explore Goa efficiently. I just wish they offered more hotel reviews or user feedback on accommodations." },
  { name: "Lisa Williams", rating: 5, review: "Amazing resource for planning a trip! From beaches to forts, every part of Goa was covered. I felt like I had insider knowledge, and the booking details were reliable. Will recommend to my friends." },
  { name: "Raj Patel", rating: 4, review: "The website helped me find great rental cars and homestays. I appreciated the contact information and suggestions for tours. Would love to see more tips on local dining spots in future updates." },
  { name: "Sophie Lee", rating: 5, review: "I loved the clear and concise information on this website! It helped me plan my entire trip to Goa, from selecting the best beaches to booking affordable stays. I couldn’t have asked for a better guide!" },
];

const DestinationCardSlider = () => {
  return (
    <div className="container1">
      <h1 className="Review_h1">Reviews</h1> {/* Heading for reviews section */}

      {/* Swiper for Reviews */}
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {websiteReviews.map((rev, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <h4>{rev.name}</h4>
              <p>Rating: {rev.rating} Stars</p>
              <p>{rev.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DestinationCardSlider;
