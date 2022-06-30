const db = require('../db');

class UserController {
    async createUser(req, res) {
        const {userName, password} = req.body;
        const newUser = await db.query(`INSERT INTO users ("userName", password) values ($1, $2) RETURNING *`, [userName, password]);
        res.json(newUser.rows[0]);
    }

    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM users`);
        res.json(users.rows);
    }
}

module.exports = new UserController();