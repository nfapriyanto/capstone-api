const bcrypt = require('bcryptjs');

const password = 'admin123';
const hashedPassword = bcrypt.hashSync(password, 10);

const admins = [{
    id: "admin-001",
    name: "Admin",
    email: "admin@example.com",
    password: hashedPassword,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
}];

module.exports = admins;
