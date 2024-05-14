import express, { Router, Request, Response } from "express";
import mapRoutes from "./mapRoutes";
import { TodoController } from "../root/todo/TodoController";

const router: Router = express.Router();

const todoController: TodoController = new TodoController();

mapRoutes(router, {
  "/todos": {
    get: todoController.getAll,
    post: todoController.create,
    "/:id": {
      get: todoController.findById,
      delete: todoController.delete,
    },
  },
});

export default router;
