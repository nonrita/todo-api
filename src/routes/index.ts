import express, { Router, Request, Response } from "express";
import mapRoutes from "./mapRoutes";
import { TodoController } from "../root/todo/TodoController";

const router: Router = express.Router();

const userController: TodoController = new TodoController();

mapRoutes(
  router,
  {
    '/todos': {
      get: userController.getAll,
    },
});

export default router;
