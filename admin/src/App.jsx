import React, {useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import List from './pages/List/List'
import Add from './pages/Add/Add'
import Orders from './pages/Orders/Orders'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url= "http://localhost:4000"
  // const url= "https://fudgo-backend.onrender.com"
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect to Orders page only if the current route is '/'
  useEffect(() => {
    if (location.pathname === '/') {
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
        </Routes>
      </div>
    </div>
  )
}

export default App
