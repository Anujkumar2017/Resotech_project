import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import ChangePassword from './components/changePassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/changePassword' element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
