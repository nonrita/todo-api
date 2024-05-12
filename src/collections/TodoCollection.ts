import { pool } from "../lib/Database";
import { ITodoModel } from "../models/TodoModel";

export class TodoCollection {
  static getAll(): Promise<ITodoModel[]> {
    return pool.query<ITodoModel[]>("select * from test").then(([result, field]) => {
      return result;
    });
  }

  static findBy(where: string,  question: any): Promise<ITodoModel[]> {
    return pool.query<ITodoModel[]>("select * from test " + where, question).then(([resulet, field]) => {
      return resulet;
    });
  }
}