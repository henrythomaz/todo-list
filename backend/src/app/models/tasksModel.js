import connection from "../models/connection.js";

class tasksModel
{
  async getTasks() {
    const [tasks] = await connection.execute("SELECT * FROM tasks");
    return tasks;
  }
  async createTask(task) {
    const { title } = task;
    const dateUTC = new Date(Date.now()).toUTCString();

    const query = "INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)";
    const createdTask = await connection.execute(query, [title, "pendente", dateUTC]);

    return {insertId: createdTask.insertId};
  }
} export default new tasksModel();