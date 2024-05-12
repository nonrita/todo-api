import { pool } from "../lib/Database";
import { ITodoModel } from "../models/TodoModel";

export class TodoCollection {
  static getAll(): Promise<ITodoModel[]> {
    return pool.query<ITodoModel[]>("select * from test").then(([result, field]) => {
      return result;
    })
  }
}