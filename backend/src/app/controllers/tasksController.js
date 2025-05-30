
import tasksModel from "../models/tasksModel.js"

class tasksController 
{
  async index(req, res) {
    const tasks = await tasksModel.getTasks();
    return res.status(200).json(tasks)
  }
  async show(req, res) {
    const id = req.params.id;
    const tasks = await tasksModel.getTasksById(id);
  }
} export default new tasksController();