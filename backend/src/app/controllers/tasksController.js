
import tasksModel from "../models/tasksModel.js"

class tasksController 
{
  async index(req, res) {
    const tasks = await tasksModel.getTasks();
    return res.status(200).json(tasks);
  };
  async create(req, res) {

    if (!req.body) {
      return res.status(400).json({ error: "O o body está vazio." });
    }

    const createdTask = await tasksModel.createTask(req.body);
    return res.status(201).json(createdTask);
  }

} export default new tasksController();