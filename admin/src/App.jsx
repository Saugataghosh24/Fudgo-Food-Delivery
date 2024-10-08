import React, {useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import List from './pages/List/List'
import Add from './pages/Add/Add'
import Orders from './pages/Orders/Orders'
import Login from './pages/Login/Login'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url= "https://fudgo-backend.onrender.com"
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if admin is logged in, if not, redirect to login
    const token = localStorage.getItem('admin_token');
    if (!token && location.pathname !== '/login') {
      navigate('/login');
    }
    else if (token && location.pathname === '/') {
      navigate('/orders');
    }
  }, [location, navigate]);


  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url}/>} />
          <Route path="/orders" element={<Orders url={url}/>} />
          <Route path="/login" element={<Login url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
