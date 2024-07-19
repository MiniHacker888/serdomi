// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Actualizado
import '../App.css'; // Importa el archivo CSS


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Actualizado

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Lógica de autenticación aquí
        // Si el usuario es autenticado con éxito:
        navigate('/dashboard'); // Actualizado
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
            <p>No tienes una cuenta Aun...Click...? <a href="/register">Registrarse</a></p>
        </form>
    );
}

export default Login;