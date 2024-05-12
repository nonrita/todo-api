import { TodoCollection } from "../collections/TodoCollection";
import { Request, Response } from "express";

export class TodoController {
  static getAllTodos(req: Request, res: Response) {
    TodoCollection.getAll().then((result) => {
      res.send(result);
    });
  }

  static getTodo(req: Request, res: Response) {
    TodoCollection.findBy("where `id` = ? ", req.params.id).then((resulet) => {
      res.send(resulet[0]);
    });
  }

  static createTodo(req: Request, res: Response) {
    TodoCollection.create(Number(req.params.id), req.body.name).then(
      (result) => {
        res.status(200).send(result.affectedRows.toString());
      }
    );
  }

  static updateTodo(req: Request, res: Response) {
    TodoCollection.update(Number(req.params.id), req.body.name).then(
      (result) => {
        res.status(200).send(result.affectedRows.toString());
      }
    );
  }
}
