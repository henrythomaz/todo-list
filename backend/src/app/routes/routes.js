import { Router } from "express";
import tasksController from "../controllers/tasksController.js";
const routes = new Router();

routes.get("/tasks", tasksController.index);

export default routes;