import { Router } from "express";
import tasksController from "../controllers/tasksController.js";
const routes = new Router();

routes.get("/tasks", tasksController.index);
routes.post("/tasks", tasksController.create);

export default routes;