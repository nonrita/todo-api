import { TodoCollection } from "../collections/TodoCollection";
import { Request, Response } from "express";

export class TodoController {
  static getAllTodos(req: Request, res: Response){
    TodoCollection.getAll().then((result) => {
      res.send(result);
    });
  }
}
