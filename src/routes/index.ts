import express, {  Router, Request, Response } from "express";
import mapRoutes from "./mapRoutes";
import { TodoController } from "../controllers/TodoController";

const router: Router = express.Router();

mapRoutes(router, {
  "/todos": {
    get: TodoController.getAllTodos,
    "/:id": {
      get: TodoController.getTodo,
      post: TodoController.createTodo,
      put: TodoController.updateTodo,
    }
  }
});

export default router;
