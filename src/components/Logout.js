// Logout.js

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Actualizado
import '../App.css'; // Importa el archivo CSS


function Logout() {
    const navigate = useNavigate(); // Actualizado

    const handleLogout = () => {
        // Lógica de cierre de sesión aquí
        navigate('/login'); // Actualizado
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

export default Logout;