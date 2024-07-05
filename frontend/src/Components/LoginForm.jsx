/* eslint-disable react/prop-types */
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import { AuthContext } from './Context/AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { setIsAuthenticated } = useContext(AuthContext);

  const handleToggle = () => {
    setIsSignup(!isSignup);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Debug log

    // Validation logic
    if (isSignup) {
      console.log(`Sign Up - Username: '${username}', Email: '${email}', Password: '${password}'`); // Debug log
      if (!username.trim() || !email.trim() || !password.trim()) {
        console.log('Sign up fields incomplete'); // Debug log
        alert('Please complete all fields for sign up.');
        return;
      }
    } else {
      console.log(`Sign In - Email: '${email}', Password: '${password}'`); // Debug log
      if (!email.trim() || !password.trim()) {
        console.log('Sign in fields incomplete'); // Debug log
        alert('Please complete all fields for sign in.');
        return;
      }
    }

    try {
      if (isSignup) {
        console.log('Registering user:', { username, email, password });
        const response = await axios.post('http://localhost:3001/auth/register', { username, email, password });
        console.log('Registered successfully:', response.data);
        alert('User registered successfully');
        handleToggle();
      } else {
        console.log('Logging in user:', { email, password });
        const response = await axios.post('http://localhost:3001/auth/login', { email, password });
        console.log('Logged in successfully:', response.data);
        alert('Logged in successfully');
        setIsAuthenticated(true); // Set isAuthenticated to true
        navigate('/');
      }
      // Reset form fields
      setEmail('');
      setPassword('');
      setUsername('');
      setError('');
    } catch (error) {
      console.log('Error:', error.response ? error.response.data.error : error.message); // Debug log
      alert(error.response ? error.response.data.error : 'An error occurred'); // Alert error
      setError(error.response ? error.response.data.error : error.message);
    }
  };

  return (
    <div className="main-body">
      <div className={`login-container ${isSignup ? 'right-panel-active' : ''}`}>
        <div className="login-form-container sign-in-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="login-h1">Sign In</h1>
            <input
              className="login-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a className="login-a" href="#">Forgot your password?</a>
            <button className="login-button" type="submit">Sign In</button>
          </form>
        </div>
        <div className="login-form-container sign-up-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="login-h1">Sign Up</h1>
            <input
              id='username'
              className="login-input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              id='email'
              className="login-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id='password'
              className="login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-button signup-button">Sign Up</button>
          </form>
        </div>
        <div className="login-overlay-container">
          <div className="login-overlay">
            <div className="login-overlay-panel login-overlay-left">
              <h1 className="login-h1">Welcome Back!</h1>
              <p className="login-p">Please login with your personal info</p>
              <button className="ghost login-button" onClick={handleToggle} id="signIn">Sign In</button>
            </div>
            <div className="login-overlay-panel login-overlay-right">
              <h1 className="login-h1">Hello, Friend!</h1>
              <p className="login-p">Enter your personal details and start your journey with us</p>
              <button className="ghost login-button" onClick={handleToggle} id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
        {error && <p className="error-message login-p">{error}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
