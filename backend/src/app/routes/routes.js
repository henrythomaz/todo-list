import { Router } from "express";
import tasksController from "../controllers/tasksController.js";
const routes = new Router();

routes.get("/tasks", tasksController.index);
routes.get("/tasks/:id", tasksController.show);

export default routes;