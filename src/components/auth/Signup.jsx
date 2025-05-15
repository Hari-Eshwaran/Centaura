import { useState } from 'react';
import "../../css/Signup.css";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { auth, db } from './firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        fullName,
        email,
        createdAt: new Date(),
      });

      window.location.href = '/MFA';
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-screen ">
      <div>
        <img src="logo-w.svg" alt="Logo" className="logo" />
      </div>
      <div className="logo-container">
        <h1>Create Your Account</h1>
        <p className="signup-subtitle">
          Set up your profile and start exploring property and wealth insights
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}

          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter Your Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email ID"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Create Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <label>Confirm Password</label>
          <div className="password-wrapper">
            <input
              type={showConfirm ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Your Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <div className="options items-center">
            <label
              style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <input
                type="checkbox"
                style={{ width: '14px', height: '14px', marginBottom: '0px' }}
                required
              />{' '}
              I accept the Terms of Service and Privacy Policy
            </label>
          </div>

          <button type="submit" className="create-btn">
            Create Account
          </button>
        </form>
      </div>
      <div className="footer-links">
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
};

export default Signup;
