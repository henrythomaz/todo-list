import connection from "../models/connection.js";

class tasksModel
{
  async getTasks() {
    const [rows] = await connection.execute("SELECT * FROM tasks");
    return rows ;
  }
} export default new tasksModel();