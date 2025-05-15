import { useState } from 'react';
import "../../css/Login.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import './firebase'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format');
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);

      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);

      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAppleSignIn = async () => {
    const auth = getAuth();
    const provider = new OAuthProvider('apple.com');
    try {
      await signInWithPopup(auth, provider);
      
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-background flex flex-col ">
      <img src="logo-w.svg" alt="Logo" className="logo mb-5" />
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p className="subtitle">
          Log in to explore property and wealth insights across the US
        </p>

        <form className="login-form" onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="JohnDeo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <img
                  src="EYE=ON.svg"
                  alt="Hide Password"
                  width="18"
                  height="18"
                />
              ) : (
                <img
                  src="EYE=OF.svg"
                  alt="Show Password"
                  width="18"
                  height="18"
                />
              )}
            </span>
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="options items-center">
            <label
              style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <input
                type="checkbox"
                style={{ width: '14px', height: '14px', marginBottom: '0px' }}
              />{' '}
              Remember me
            </label>
            <a href="#" className="forgot-link">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="sign-in-btn">
            Sign In
          </button>

          <div className="divider">
            <hr /> <span>or continue with</span> <hr />
          </div>

          <div className="social-buttons">
            <button className="google" onClick={handleGoogleSignIn}>
              <img src="google.svg" alt="Google" />
              Google
            </button>
            <button className="apple" onClick={handleAppleSignIn}>
              <img src="apple.svg" alt="Apple" />
              Apple
            </button>
          </div>
        </form>

        <p className="register-text">
          Don’t have an Account? <a href="/signup">Register Now</a>
        </p>
      </div>

      <footer className="footer-links justify-between max-w-[1200px]">
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </footer>
    </div>
  );
}
