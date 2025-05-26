
import tasksModel from "../models/tasksModel.js"

class tasksController 
{
  async index(req, res) {
    const tasks = await tasksModel.getTasks();
    return res.status(200).json(tasks);
  }
} export default new tasksController();