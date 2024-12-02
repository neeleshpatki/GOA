import React, { useState } from "react";
import "./ModalBox.css";

const ModalBox = ({ showModal, closeModal, modalType }) => {
  if (!showModal) return null; // If modal isn't shown, return null (no rendering)

  return (
    <div className="modal fade show" style={{ display: "block" }} id="authModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="authModalLabel">
              {modalType === "signin" ? "Sign In" : "Sign Up"}
            </h5>
            <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            {modalType === "signin" ? (
              <div>
                <input type="text" className="form-control mb-3" placeholder="Username or Email" />
                <input type="password" className="form-control mb-3" placeholder="Password" />
                <button className="btn btn-primary w-100">Sign In</button>
              </div>
            ) : (
              <div>
                <input type="text" className="form-control mb-3" placeholder="First Name" />
                <input type="text" className="form-control mb-3" placeholder="Last Name" />
                <input type="email" className="form-control mb-3" placeholder="Email" />
                <input type="password" className="form-control mb-3" placeholder="Password" />
                <button className="btn btn-primary w-100">Sign Up</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
