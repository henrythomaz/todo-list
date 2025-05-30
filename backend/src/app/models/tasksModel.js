import connection from "../models/connection.js";

class tasksModel
{
  async getTasks() {
    const [rows, buffer] = await connection.execute("SELECT * FROM tasks");
    return rows;
  }
  async getTasksById(id) {
    const [id] = connection.execute()
  }
} export default new tasksModel();