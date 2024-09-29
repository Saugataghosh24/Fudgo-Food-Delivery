import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = ({ url }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (evt) => {
    evt.preventDefault();
    try {
      const response = await axios.post(`${url}/api/admin/login`, { email, password });
      if (response.data.success) {
        localStorage.setItem('admin_token', response.data.token);  // Store the token
        toast.success('Login Successful');
        setTimeout(() => {
          navigate('/orders');  // Navigate to orders page
          window.location.reload();  // Reload the page to refresh state
        }, 500);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error logging in');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h2>Admin Login</h2>
        </div>
        <form onSubmit={handleLogin} className="login-form">
          <div className="login-input">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="login-input">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-submit">
            Login
          </button>
        </form>
      </div>
    </div>
  )  
}

export default Login;
