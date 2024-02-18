import './App.css';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
