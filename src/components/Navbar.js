import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Importa el archivo CSS
import './Navbar.css'; // Importa el archivo CSS


const Navbar = () => {
  return (
    <nav>
      <Link to="/">Welcome</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/user">User Page</Link>
      <Link to="/service-request">Service Request</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  );
};

export default Navbar;