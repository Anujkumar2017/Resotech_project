import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import UpdatePassword from './components/UpdatePassword';


function App() {
  function logout() {
    console.log("logout");
    localStorage.removeItem('token');
  }

  return (
    <BrowserRouter>
      <button className='btn btn-danger' style={{position: 'absolute', right:'0px'}} onClick={logout}>Logout</button>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/updatePassword' element={<UpdatePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
