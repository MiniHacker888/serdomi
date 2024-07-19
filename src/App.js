import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import WelcomePage from './components/WelcomePage';
import Login from './components/Login';
import Register from './components/Register';
import UserPage from './components/UserPage';
import ServiceRequest from './components/ServiceRequest';
import RealTimeLocation from './components/RealTimeLocation';
import Logout from './components/Logout';
import './App.css'; // Importa el archivo CSS


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/service-request" element={<ServiceRequest />} />
        <Route path="/real-time-location" element={<RealTimeLocation />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;