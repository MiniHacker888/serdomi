// server.js

const express = require('express');
const app = express();
const userService = require('./userService');
const serviceRequestService = require('./serviceRequestService');

app.use(express.json());

// Rutas para usuarios
app.post('/users', async (req, res) => {
    const { name, username, role, passwordHash } = req.body;
    const userId = await userService.createUser(name, username, role, passwordHash);
    res.json({ id: userId });
});

// Rutas para solicitudes de servicio
app.post('/serviceRequests', async (req, res) => {
    const { userId, details, status, createdAt } = req.body;
    const requestId = await serviceRequestService.createServiceRequest(userId, details, status, createdAt);
    res.json({ id: requestId });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});