


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   const [showDropdown, setShowDropdown] = useState(false);

//   return (
//     <nav className="nav">
//       <div className="nav-logo">
//         <p>LOGO .</p>
//       </div>
//       <div className="nav-menu">
//         <ul>
//           <li><Link to="/" className="link">Home</Link></li>
//           <li><Link to="/blog" className="link">Blog</Link></li>
//           <li><Link to="/services" className="link">Services</Link></li>
//           <li>
//             <div
//               className="link dropdown-toggle"
//               onClick={() => setShowDropdown(!showDropdown)}
//             >
//               Destinations
//             </div>
//             {showDropdown && (
//               <ul className="dropdown-menu">
//                 <li><Link to="/north-goa" className="dropdown-item">North Goa</Link></li>
//                 <li><Link to="/south-goa" className="dropdown-item">South Goa</Link></li>
//                 <li><Link to="/goa" className="dropdown-item">Goa</Link></li>
//               </ul>
//             )}
//           </li>
//           <li><Link to="/experiences" className="link">Experiences</Link></li>
//           <li><Link to="/about" className="link">About</Link></li>
//         </ul>
//       </div>
//       <div className="nav-button">
//         <Link to="/login" className="btn">Sign In</Link>
//         <Link to="/register" className="btn white-btn">Sign Up</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ openModal }) {  // Accept a prop to trigger modal from Navbar
  return (
    <nav className="nav">
      <div className="nav-logo">
        <p>LOGO .</p>
      </div>
      <div className="nav-menu">
        <ul>
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/blog" className="link">Blog</Link></li>
          <li><Link to="/services" className="link">Services</Link></li>
          <li>
            <div className="link">Destinations</div>
          </li>
          <li><Link to="/experiences" className="link">Experiences</Link></li>
          <li><Link to="/about" className="link">About</Link></li>
        </ul>
      </div>
      <div className="nav-button">
        {/* Trigger the modal on button click */}
        <button onClick={() => openModal("signin")} className="btn">Sign In</button>
        <button onClick={() => openModal("signup")} className="btn white-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;





