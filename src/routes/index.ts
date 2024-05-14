import express, { Router, Request, Response } from "express";
import mapRoutes from "./mapRoutes";
import { TodoController } from "../root/todo/TodoController";

const router: Router = express.Router();

const todoController: TodoController = new TodoController();

mapRoutes(
  router,
  {
    '/todos': {
      get: todoController.getAll,
      '/:id': {
        get:  todoController.findById
      }
    },
});

export default router;
