// import React from 'react';
// import './Navbar.css'
// import 'bootstrap/dist/css/bootstrap.min.css';



// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">Navbar</a>
//         <button
//           className="menu-btn navbar-toggler  active"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">Destinations</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">Itineraries</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">Rentals</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">Review</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">About Us</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">Contact</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Link</a>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Dropdown
//               </a>
//               <ul className="dropdown-menu">
//                 <li><a className="dropdown-item" href="#">Destinations</a></li>
//                 <li><a className="dropdown-item" href="#">Another action</a></li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li><a className="dropdown-item" href="#">Something else here</a></li>
//               </ul>
//             </li>
//             <li className="nav-item">
            
//             </li>
//           </ul>
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//             </form>
 
//               <a className="nav-link active" aria-current="page" href="#">Sign up</a>
          
          
//               <a className="nav-link active" aria-current="page" href="#">Sign In</a>
          
            

          
//         </div>
//       </div>
//     </nav>
//   );
// }


// // const menuBtn=document.querySelector(".menu-btn");
// // menuBtn.addEventListener("click",()=>{
// //   menuBtn.classList.toggle("active");
// // });



// import React, { useState } from 'react';
// import './Navbar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom'; // For navigation

// export default function Navbar() {
//   // State to control visibility of Sign Up and Sign In forms
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [showSignIn, setShowSignIn] = useState(false);

//   // Use React Router's navigate for page redirection
//   const navigate = useNavigate();

//   // Handle Sign Up click
//   const handleSignUpClick = () => {
//     setShowSignUp(true);
//     setShowSignIn(false);  // Hide Sign In form
//   };

//   // Handle Sign In click
//   const handleSignInClick = () => {
//     setShowSignIn(true);
//     setShowSignUp(false);  // Hide Sign Up form
//   };

//   // Handle form submission (Sign Up or Sign In)
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Redirect to homepage after form submission
//     navigate('/');
//   };

//   // Close the form (e.g., after submission or cancel action)
//   const closeForm = () => {
//     setShowSignUp(false);
//     setShowSignIn(false);
//   };

//   return (
//     <div>
//       {/* Navbar with Sign Up and Sign In buttons */}
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Goa Tourism</a>
//           <button
//             className="menu-btn navbar-toggler active"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" href="#">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" href="#">Destinations</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" href="#">Itineraries</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" href="#">Rentals</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" href="#">Review</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" href="#">About Us</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" href="#">Contact</a>
//               </li>
//             </ul>
//             <div className="auth-buttons">
//               <button onClick={handleSignUpClick} className="btn btn-primary me-2">Sign Up</button>
//               <button onClick={handleSignInClick} className="btn btn-secondary">Sign In</button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Conditionally Render Sign Up or Sign In Form */}
//       {/* Full Screen Overlay */}
//       {(showSignUp || showSignIn) && (
//         <div className="overlay">
//           <div className="form-container">
//             <button onClick={closeForm} className="close-btn">X</button>
//             {/* Show Sign Up form */}
//             {showSignUp && (
//               <div className="sign-up-form">
//                 <h2>Sign Up</h2>
//                 <form onSubmit={handleFormSubmit}>
//                   <label htmlFor="signupEmail">Email:</label>
//                   <input type="email" id="signupEmail" placeholder="Enter your email" required />
//                   <label htmlFor="signupPassword">Password:</label>
//                   <input type="password" id="signupPassword" placeholder="Enter your password" required />
//                   <button type="submit">Sign Up</button>
//                 </form>
//               </div>
//             )}

//             {/* Show Sign In form */}
//             {showSignIn && (
//               <div className="sign-in-form">
//                 <h2>Sign In</h2>
//                 <form onSubmit={handleFormSubmit}>
//                   <label htmlFor="signinEmail">Email:</label>
//                   <input type="email" id="signinEmail" placeholder="Enter your email" required />
//                   <label htmlFor="signinPassword">Password:</label>
//                   <input type="password" id="signinPassword" placeholder="Enter your password" required />
//                   <button type="submit">Sign In</button>
//                 </form>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Website content is hidden when Sign Up or Sign In form is shown */}
//       {!showSignUp && !showSignIn && (
//         <div className="website-content">
//           {/* Your website content goes here */}
//           <h3>Welcome to our Goa Tourism website!</h3>
//           <p>Explore the best destinations, itineraries, and rentals in Goa.</p>
//         </div>
//       )}
//     </div>
//   );
// }




import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button
          className="menu-btn navbar-toggler active"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/destinations">Destinations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/signin">Sign In</Link>  {/* Link to Sign In page */}
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/signup">Sign Up</Link>  {/* Link to Sign Up page */}
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}






