// userService.js

const db = require('./db');

// Crear un nuevo usuario
async function createUser(name, username, role, passwordHash) {
    const result = await db.query(
        'INSERT INTO Users (name, username, role, password) VALUES (?, ?, ?, ?)',
        [name, username, role, passwordHash]
    );
    return result[0].insertId;
}

// Obtener un usuario por su ID
async function getUserById(id) {
    const [user] = await db.query('SELECT * FROM Users WHERE id = ?', [id]);
    return user;
}

// Actualizar un usuario
async function updateUser(id, name, username, role, passwordHash) {
    await db.query(
        'UPDATE Users SET name = ?, username = ?, role = ?, password = ? WHERE id = ?',
        [name, username, role, passwordHash, id]
    );
}

// Eliminar un usuario
async function deleteUser(id) {
    await db.query('DELETE FROM Users WHERE id = ?', [id]);
}

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser
};