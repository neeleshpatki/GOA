// import React from 'react';
// import './App.css'; // Global styles
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
// import Navbar from './components/Navbar'; // Navbar component
// import Carousal from './components/Carousal';
// import Signin from './components/Signin';
// import Destinations from './components/Destinations';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <>
//       {/* Your Navbar Component */}
//       <Navbar />
//       <Carousal/>
//       <Signin/>
//       <Destinations/>

//       {/* Future content can go here */}
//       <div className="container mt-5">
//         <h1>Welcome to the App</h1>
//         <p>This is a simple example of a React application with a Bootstrap Navbar.</p>
//       </div>
//     </>
//   );
// }

// export default App;





import React from 'react';
import './App.css'; // Global styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import Navbar from './components/Navbar'; // Navbar component
import Carousal from './components/Carousal';
import Signin from './components/Signin';
import SignUp from './components/SignUp';  // Import SignUp component
import Destinations from './components/Destinations';


function App() {
  return (
    <Router>  {/* Wrap everything inside Router to enable routing */}
      {/* Your Navbar Component */}
      <Navbar />

      <Carousal />

      {/* Define routes here */}
      <Routes>
        <Route path="/" element={<Destinations />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {/* Future content can go here */}
      <div className="container mt-5">
        <h1>Welcome to the App</h1>
        <p>This is a simple example of a React application with a Bootstrap Navbar.</p>
      </div>
    </Router>
  );
}

export default App;

