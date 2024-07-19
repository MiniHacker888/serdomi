// serviceRequestService.js

const db = require('./db');

// Crear una nueva solicitud de servicio
async function createServiceRequest(userId, details, status, createdAt) {
    const result = await db.query(
        'INSERT INTO ServiceRequests (userId, details, status, createdAt) VALUES (?, ?, ?, ?)',
        [userId, details, status, createdAt]
    );
    return result[0].insertId;
}

// Obtener una solicitud de servicio por su ID
async function getServiceRequestById(id) {
    const [request] = await db.query('SELECT * FROM ServiceRequests WHERE id = ?', [id]);
    return request;
}

// Obtener todas las solicitudes de servicio de un usuario
async function getServiceRequestsByUserId(userId) {
    const [requests] = await db.query('SELECT * FROM ServiceRequests WHERE userId = ?', [userId]);
    return requests;
}

// Actualizar una solicitud de servicio
async function updateServiceRequest(id, details, status) {
    await db.query(
        'UPDATE ServiceRequests SET details = ?, status = ? WHERE id = ?',
        [details, status, id]
    );
}

// Eliminar una solicitud de servicio
async function deleteServiceRequest(id) {
    await db.query('DELETE FROM ServiceRequests WHERE id = ?', [id]);
}

module.exports = {
    createServiceRequest,
    getServiceRequestById,
    getServiceRequestsByUserId,
    updateServiceRequest,
    deleteServiceRequest
};