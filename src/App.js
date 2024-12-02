




// import React from 'react';
// import './App.css'; // Global styles
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
// import Navbar from './components/Navbar'; // Navbar component
// import Carousal from './components/Carousal';
// import modalbox from './components/modalbox';
// import Destinations from './components/Destinations';
// import Login from './components/Login';
// import Register from './components/Register';
// import Popular from './components/Popular';


// function App() {
//   return (
//     <Router>  {/* Wrap everything inside Router to enable routing */}
//       {/* Your Navbar Component */}
//       <Navbar />
//       <modalbox/>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         {/* Add more routes here */}
//       </Routes>

//       <Carousal />
//       <Destinations/>
      

//       {/* Define routes here */}
     
//       <Popular/>
     
     
//     </Router>
//   );
// }

// export default App;






// import React, { useState } from "react";
// import './App.css'; // Global styles
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
// import Navbar from './components/Navbar'; // Navbar component
// import ModalBox from './components/ModalBox'; // ModalBox component
// import Carousal from './components/Carousal';
// import Destinations from './components/Destinations';
// import Login from './components/Login';
// import Register from './components/Register';
// import Popular from './components/Popular';
// import DestinationCardSlider from "./components/Destination/DestinationCardSlider";

// function App() {
//   // State to manage whether the modal is shown and the type of modal (signin or signup)
 
//   const [showModal, setShowModal] = useState(false);
//   const [modalType, setModalType] = useState(""); // "signin" or "signup"
//   const [selectedRegion, setSelectedRegion] = useState("northGoa");

//   const openModal = (type) => {
//     setModalType(type);
//     setShowModal(true);
//   };

//   const closeModal = () => setShowModal(false);

//   return (
//     <Router>  {/* Wrap everything inside Router to enable routing */}
//       {/* Your Navbar Component */}
//       <Navbar openModal={openModal} />
      
//       {/* ModalBox Component */}
//       <ModalBox showModal={showModal} closeModal={closeModal} modalType={modalType} />


  
     
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         {/* Add more routes here */}
//       </Routes>

//       <Carousal />
//       <Destinations />
//        {/* Region Selection Buttons */}
//        <div className="region-select">
//         <button onClick={() => setSelectedRegion("northGoa")}>North Goa</button>
//         <button onClick={() => setSelectedRegion("southGoa")}>South Goa</button>
//       </div>

    
//       <DestinationCardSlider region={selectedRegion} />



      

   
//       <Popular />
//     </Router>
//   );
// }

// export default App;








// import React, { useState } from "react";
// import './App.css'; // Global styles
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
// import Navbar from './components/Navbar'; // Navbar component
// import ModalBox from './components/ModalBox'; // ModalBox component
// import Carousal from './components/Carousal';
// import Destinations from './components/Destinations';
// import Login from './components/Login';
// import Register from './components/Register';
// import Popular from './components/Popular';
// import DestinationCardSlider from "./components/Destination/DestinationCardSlider";
// import ExperienceCardSlider from "./components/Experience/ExperienceCardSlider";

// function App() {
//   // State to manage whether the modal is shown and the type of modal (signin or signup)
//   const [showModal, setShowModal] = useState(false);
//   const [modalType, setModalType] = useState(""); // "signin" or "signup"
  
//   // State for selecting region (North Goa / South Goa)
//   const [selectedRegion, setSelectedRegion] = useState("northGoa");
  
//   // State for selecting experience category (Adventure / Relaxation)
//   const [selectedExperience, setSelectedExperience] = useState(null);

//   const openModal = (type) => {
//     setModalType(type);
//     setShowModal(true);
//   };

//   const closeModal = () => setShowModal(false);

//   return (
//     <Router>  {/* Wrap everything inside Router to enable routing */}
//       {/* Your Navbar Component */}
//       <Navbar openModal={openModal} />
      
//       {/* ModalBox Component */}
//       <ModalBox showModal={showModal} closeModal={closeModal} modalType={modalType} />

//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         {/* Add more routes here */}
//       </Routes>

//       <Carousal />
//       <Destinations />
      
//       {/* Region Selection Buttons */}
//       <div className="region-select">
//         <button onClick={() => setSelectedRegion("northGoa")}>North Goa</button>
//         <button onClick={() => setSelectedRegion("southGoa")}>South Goa</button>
//       </div>

//       {/* DestinationCardSlider to display destinations based on selected region */}
//       <DestinationCardSlider region={selectedRegion} />

//       {/* Experience Selection */}
//       <div className="experience-select">
//   <button onClick={() => setSelectedExperience(null)}>All Experiences</button>
//   <button onClick={() => setSelectedExperience("adventure")}>Adventure</button>
//   <button onClick={() => setSelectedExperience("relaxation")}>Relaxation</button>
//   <button onClick={() => setSelectedExperience("cultural")}>Cultural & Heritage</button>
//   <button onClick={() => setSelectedExperience("nature")}>Nature & Wildlife</button>
//   <button onClick={() => setSelectedExperience("nightlife")}>Nightlife & Entertainment</button>
//   <button onClick={() => setSelectedExperience("family")}>Family & Kids</button>
//   <button onClick={() => setSelectedExperience("romantic")}>Romantic</button>
// </div>

//       {/* ExperienceCardSlider to display experiences */}
//       <ExperienceCardSlider selectedExperience={selectedExperience} />

//       <Popular />
//     </Router>
//   );
// }

// export default App;





import React, { useState } from "react";
import './App.css'; // Global styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import Navbar from './components/Navbar'; // Navbar component
import ModalBox from './components/ModalBox'; // ModalBox component
import Carousal from './components/Carousal';
import Destinations from './components/Destinations';
import Login from './components/Login';
import Register from './components/Register';
import Popular from './components/Popular';
import DestinationCardSlider from "./components/Destination/DestinationCardSlider";
import ExperienceCardSlider from "./components/Experience/ExperienceCardSlider";
import Review from "./components/Review/Review";

function App() {
  // State to manage whether the modal is shown and the type of modal (signin or signup)
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "signin" or "signup"
  
  // State for selecting region (North Goa / South Goa)
  const [selectedRegion, setSelectedRegion] = useState("northGoa");
  
  // State for selecting experience category (Adventure / Relaxation)
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <Router>  {/* Wrap everything inside Router to enable routing */}
      {/* Your Navbar Component */}
      <Navbar openModal={openModal} />
      
      {/* ModalBox Component */}
      <ModalBox showModal={showModal} closeModal={closeModal} modalType={modalType} />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Add more routes for other pages here */}
      </Routes>

      <Carousal />
      <Destinations />
      
      {/* Region Selection Buttons */}
      <div className="region-select">
        <button onClick={() => setSelectedRegion("northGoa")}>North Goa</button>
        <button onClick={() => setSelectedRegion("southGoa")}>South Goa</button>
      </div>

      {/* DestinationCardSlider to display destinations based on selected region */}
      <DestinationCardSlider region={selectedRegion} />
      

      {/* Experience Selection */}
      

      {/* ExperienceCardSlider to display experiences */}
      <ExperienceCardSlider selectedExperience={selectedExperience} />


    

      <Review/>
    </Router>
  );
}

export default App;



