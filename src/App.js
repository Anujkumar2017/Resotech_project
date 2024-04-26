import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import UpdatePassword from './components/UpdatePassword';
import { Slide, ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


function App() {

  async function logout() {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await axios.post('https://appdev.resotechsolutions.in/onboarding/logout', {}, {
        headers: {
          'token': localStorage.getItem('token'),
        }
      });

      const data = response.data;
      console.log(data);

      // Valid Token
      if (data.status.statusCode == 1) {
        console.log("Logout!");
        localStorage.removeItem('token');
        toast.success(data.status.statusMessage, {
          position: "top-center",
          autoClose: 1000,
          closeOnClick: true,
          pauseOnHover: true,
          transition: Slide,
        });
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BrowserRouter>
      <button className='btn btn-danger' style={{ position: 'absolute', right: '0px' }} onClick={logout}>Logout</button>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/updatePassword' element={<UpdatePassword />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
