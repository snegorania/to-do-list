const db = require('../db');

class taskController {
    async createTask(req, res) {
        const {title, description, listId} = req.body;
        const newTask = await db.query(`INSERT INTO tasks (title, description, "listId") VALUES ($1, $2, $3) RETURNING *`, [title, description, listId]);
        res.json(newTask.rows[0]);
    }

    async getTasks(req, res) {
        const tasks = await db.query(`SELECT * FROM tasks`);
        res.json(tasks.rows);
    }

    async deleteTasks(req, res) {
        const id = req.params.id;
        const deleteTask = await db.query(`DELETE FROM tasks WHERE id = $1`, [id]);
        res.json(deleteTask.rows[0]);
    }
}

module.exports = new taskController();