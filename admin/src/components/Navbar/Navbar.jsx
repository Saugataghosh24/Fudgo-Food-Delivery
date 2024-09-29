import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for token in localStorage on initial render
    const token = localStorage.getItem('admin_token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('admin_token'); // Remove token from localStorage
    setIsLoggedIn(false);  // Update state to logged out
    navigate('/login');  // Redirect to login page
  };

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="Fudgo Logo" />
      {isLoggedIn ? (
        <img
          className="profile"
          src={assets.profile_image}
          alt="Admin Profile"
          onClick={handleLogout}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <button
          className="login-btn"
          onClick={() => navigate('/login')}
        >
          Admin Login
        </button>
      )}
    </div>
  );
};

export default Navbar;
