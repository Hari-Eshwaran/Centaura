import React, { useState } from 'react';
import { EyeIcon, ArrowLeftIcon } from "lucide-react";
import "../../css/MFASelection.css";
import { FaShieldAlt, FaEnvelope, FaMobileAlt } from 'react-icons/fa';

const MFASelection = () => {
  const [selected, setSelected] = useState('');

  const handleSelection = (method) => {
    setSelected(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected) {
      alert(`Selected method: ${selected}`);
      // Navigate or trigger next step
    } else {
      alert('Please select a method.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen container ">
      <div>
        <header className="flex w-full items-center justify-between py-6 px-4">
          <div className="flex items-center gap-2">
            <img className="" alt="Centaura Logo" src="logo.svg" />
          </div>

          <a
            href="/login"
            style={{ textDecoration: "none", color: "#fff" }}
            className="flex items-center gap-2 text-sm font-normal text-black"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Login
          </a>
        </header>

        <div
          className="mfa-container bg-white shadow-md rounded-lg"
          style={{ maxWidth: "700px", padding: "20px" }}
        >
          <h2 className='mfa-h2'>Secure Your Account</h2>
          <p className="mfa-subtitle">
            Set up multi-factor authentication to add an extra layer of
            protection
          </p>

          <h3 className='mfa-h3'>Choose Your Authentication Method</h3>

          <div className="mfa-options-grid">
            <div
              className={`mfa-option ${
                selected === "authenticator" ? "selected" : ""
              }`}
              onClick={() => handleSelection("authenticator")}
            >
              <input
                type="radio"
                name="mfa"
                checked={selected === "authenticator"}
                readOnly
              />
              <div>
                <strong>Use Authenticator App</strong>
                <p>Most secure and recommended option.</p>
              </div>
              <FaShieldAlt className="mfa-icon" />
            </div>

            <div
              className={`mfa-option ${selected === "email" ? "selected" : ""}`}
              onClick={() => handleSelection("email")}
            >
              <input
                type="radio"
                name="mfa"
                checked={selected === "email"}
                readOnly
              />
              <div>
                <strong>Get OTP on Email</strong>
                <p>Fast and convenient.</p>
              </div>
              <FaEnvelope className="mfa-icon" />
            </div>

            <div
              className={`mfa-option ${selected === "phone" ? "selected" : ""} full-width`}
              onClick={() => handleSelection("phone")}
              style={{ marginLeft: "150px", marginRight: "150px" }}
            >
              <input
                type="radio"
                name="mfa"
                checked={selected === "phone"}
                readOnly
              />
              <div>
                <strong>Get OTP on Phone</strong>
                <p>Carrier charges may apply.</p>
              </div>
              <FaMobileAlt className="mfa-icon" />
            </div>
          </div>

          <button className="mfa-continue-btn" onClick={handleSubmit}>
            Continue
          </button>

          <p className="mfa-footer-text">
            Why do I need MFA? <span>•</span>
          </p>

          <footer className="mfa-footer-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Support</a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default MFASelection;
