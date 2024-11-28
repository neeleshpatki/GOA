import React from 'react';
import './App.css'; // Global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import Navbar from './components/Navbar'; // Navbar component
import Carousal from './components/Carousal';
import Signin from './components/Signin';

function App() {
  return (
    <>
      {/* Your Navbar Component */}
      <Navbar />
      <Carousal/>
      <Signin/>

      {/* Future content can go here */}
      <div className="container mt-5">
        <h1>Welcome to the App</h1>
        <p>This is a simple example of a React application with a Bootstrap Navbar.</p>
      </div>
    </>
  );
}

export default App;
